import db from "@/config/firestore";
import {useToast} from '@/helpers'
import {defineStore} from 'pinia'

import {
    collection,
    doc,
    getDoc,
    getDocs,
    query,
    where,
    setDoc
} from "firebase/firestore/lite";

const collectionName = "user"

const state = () => ({
    nis: "",
    email: "",
    password: "",
    role: "",
    isLogin: false
})

const actions = {
    async registerSiswa() {
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

        // const userCol = collection(db, "user");
        // const citySnapshot = await getDocs(userCol);
        // return citySnapshot.docs.map((doc) => doc.data());
    }
}

export const useAuthStore = defineStore("authStore", {
    state,
    actions
})
