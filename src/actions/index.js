import { signOut } from 'firebase/auth'
import db, {
    auth,
    provider,
    signInWithPopup,
    onAuthStateChanged,
    storage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
    doc,
    setDoc,
} from '../firebase'
import { SET_USER } from './actionType'

export const setUser = (payload) => ({
    type: SET_USER,
    user: payload,
})

export const signInAPI = () => {
    return (dispatch) => {
        signInWithPopup(auth, provider)
            .then((payload) => {
                console.log(payload.user)
                dispatch(setUser(payload.user))
            })
            .catch((error) => {
                alert(error.message)
            })
    }
}

export const getUserAuth = () => {
    return (dispatch) => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                dispatch(setUser(user))
            }
        })
    }
}

export const signOutAPI = () => {
    return (dispatch) => {
        signOut(auth)
            .then(() => {
                dispatch(setUser(null))
            })
            .catch((error) => {
                console.log(error.message)
            })
    }
}

export const postArticleAPI = (payload) => {
    return (dispatch) => {
        if (payload.image != '') {
            const storageRef = ref(storage, `image/${payload.image.name}`)

            const uploadTask = uploadBytesResumable(storageRef, payload.image)

            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    console.log(`Progress: ${progress}%`)
                    if (snapshot.state === 'RUNNING') {
                        console.log(`Progress: ${progress}%`)
                    }
                },
                (error) => console.log(error.code),
                async () => {
                    const downloadURL = await getDownloadURL(
                        uploadTask.snapshot.ref
                    )
                    await setDoc(doc(db, 'posts', 'articles'), {
                        actor: {
                            description: payload.user.email,
                            title: payload.user.displayName,
                            date: payload.timestamp,
                            image: payload.user.photoURL,
                        },
                        video: payload.video,
                        sharedImg: downloadURL,
                        comments: 0,
                        description: payload.description,
                    })
                }
            )
        }
    }
}
