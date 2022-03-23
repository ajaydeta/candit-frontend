import db from "@/config/firestore";
import {useToast} from '@/helpers'
import {defineStore} from 'pinia'
import bcrypt from 'bcryptjs';

import {
    collection,
    doc,
    getDoc,
    getDocs,
    query,
    where,
    setDoc,
    limit
} from "firebase/firestore/lite";


const state = () => ({
    nis: "",
    email: "",
    password: "",
    role: "",
    isLogin: false
})

const actions = {
    async registerSiswa() {
        const collectionName = "siswa"
        const collRef = collection(db, collectionName);
        const docRef = doc(db, collectionName, this.nis);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            useToast("NIS telah terdaftar.", "danger")
        } else {
            const docs = await getDocs(query(collRef, where("email", "==", this.email)))
            if (!docs.empty) {
                useToast("Email telah terdaftar.", "danger")
            } else {
                await setDoc(docRef, {
                    nis: this.nis,
                    email: this.email,
                    password: this.password
                });
                useToast("Akun anda telah berhasil terdaftar.")
                this.$reset(); 
            }
        }
    },

    async login() {
        const collRef = collection(db, "lapak");
        const querySnapshot = await getDocs(query(collRef, where("email", "==", this.email), limit(1)));
        if (querySnapshot.empty) {
            useToast("Email tidak terdaftar.", "danger")
            return false;
        }

        const userData = querySnapshot.docs[0].data();
        const validPassword = bcrypt.compareSync(this.password, userData.password);
        if (!validPassword) {
            useToast("Password salah", "danger")
            return false;
        }

        return validPassword
    },
}

export const useAuthStore = defineStore("authStore", {
    state,
    actions
})
