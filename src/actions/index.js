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
    collection,
    getDocs,
    addDoc,
} from '../firebase'
import { GET_ARTICLES, SET_LOADING_STATUS, SET_USER } from './actionType'

export const setUser = (payload) => ({
    type: SET_USER,
    user: payload,
})

export const setLoading = (status) => ({
    type: SET_LOADING_STATUS,
    status: status,
})

export const getArticles = (payload) => ({
    type: GET_ARTICLES,
    payload: payload,
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
    return async (dispatch) => {
        dispatch(setLoading(true))
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

                    await addDoc(collection(db, 'articles'), {
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
                    dispatch(setLoading(false))
                }
            )
        } else if (payload.video) {
            await addDoc(collection(db, 'articles'), {
                actor: {
                    description: payload.user.email,
                    title: payload.user.displayName,
                    date: payload.timestamp,
                    image: payload.user.photoURL,
                },
                video: payload.video,
                sharedImg: '',
                comments: 0,
                description: payload.description,
            })
            dispatch(setLoading(false))
        }
    }
}

export const getArticlesAPI = () => {
    return async (dispatch) => {
        const docRef = collection(db, 'articles')
        const querySnapshot = await getDocs(docRef)

        var payload = querySnapshot.docs.map((doc) => {
            // doc.data() is never undefined for query doc snapshots
            return doc.data()
        })
        // payload = payload.sort((a, b) => a.actor.timestamp - b.actor.timestamp)
        dispatch(getArticles(payload))
    }
}
