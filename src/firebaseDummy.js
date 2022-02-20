// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    signOut,
} from 'firebase/auth'
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from 'firebase/storage'
import { getFirestore, doc, setDoc } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: '',
    authDomain: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore()
const auth = getAuth()
const provider = new GoogleAuthProvider()
const storage = getStorage(firebaseApp)

export {
    auth,
    provider,
    storage,
    signInWithPopup,
    onAuthStateChanged,
    signOut,
    ref,
    uploadBytesResumable,
    getDownloadURL,
    setDoc,
    doc,
}
export default db
