import { LOGIN_FAILURE, LOGIN_SUCCESS, SIGNUP_SUCCESS, SIGNUP_FAILURE, LOGOUT_SUCCESS } from "./authActionType"
import Axios from "axios"
import { auth } from "../../Components/Auth/firebase"



const loginSuccess = (payload) => {
    
    
    return {
        type: LOGIN_SUCCESS,
        payload: payload,
    }
}
const loginFailure = () => {
    return {
        type: LOGIN_FAILURE
    }
}
const registerSuccess = (payload) => {
    return {
        type: SIGNUP_SUCCESS,
        payload: payload
    }
}
const registerFailure = () => {
    return {
        type: SIGNUP_FAILURE,
        payload: "we couldn't create your account. Please try again."
    }
}
const logoutSuccess = () => {
    return {
        type: LOGOUT_SUCCESS,

    }
}

/// user registration data


const signUp = (inp) => (dispatch) => {

    const {wemail,password,fname} = inp

    localStorage.setItem("userName",fname);

        auth.createUserWithEmailAndPassword(wemail, password)
        
            .then( (res) => {
               dispatch(registerSuccess(fname))
            })
            .catch((error) => {
                console.log(error);
                dispatch(registerFailure())
            })
    
}

///    login auth is getting done here

const submitSignInData = ({wemail,password}) => (dispatch) => {

    auth.signInWithEmailAndPassword(wemail,password)
    .then((res)=> dispatch(loginSuccess(res.user.uid)))
    .catch((error) => alert(error.message))

}



export { loginSuccess, loginFailure, signUp, submitSignInData, logoutSuccess }