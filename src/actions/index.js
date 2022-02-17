import { auth, provider, signInWithPopup } from '../firebase'

export const signInAPI = () => {
    return (dispatch) => {
        signInWithPopup(auth, provider)
            .then((payload) => {
                console.log(payload)
            })
            .catch((error) => {
                alert(error.message)
            })
    }
}
