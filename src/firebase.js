// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import * as firebase from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyCDO3hQySI-W-X54HLkurBFeQCiBWZCHTo',
    authDomain: 'linkedin-clone-dd49c.firebaseapp.com',
    projectId: 'linkedin-clone-dd49c',
    storageBucket: 'linkedin-clone-dd49c.appspot.com',
    messagingSenderId: '452826772729',
    appId: '1:452826772729:web:9e454fb82b09a2facf5e28',
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore()
const auth = getAuth()
const provider = new GoogleAuthProvider()
const storage = getStorage()

export { auth, provider, storage, signInWithPopup }
export default db
