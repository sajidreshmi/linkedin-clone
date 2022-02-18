import { signOut } from 'firebase/auth'
import {
    auth,
    provider,
    signInWithPopup,
    onAuthStateChanged,
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
