// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBj32foyo9K39OyPaj1adCXIRH6XZRXUO0",
    authDomain: "candit-9fae8.firebaseapp.com",
    projectId: "candit-9fae8",
    storageBucket: "candit-9fae8.appspot.com",
    messagingSenderId: "396319868472",
    appId: "1:396319868472:web:98c8fb436150a749b448cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db