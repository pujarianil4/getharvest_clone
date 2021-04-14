import { LOGIN_FAILURE, LOGIN_SUCCESS, SIGNUP_SUCCESS, SIGNUP_FAILURE } from "./authActionType"
import Axios from "axios"
// import { auth } from "../../Components/Auth/firebase"



const loginSuccess = () => {
    return {
        type: LOGIN_SUCCESS
    }
}
const loginFailure = () => {
    return {
        type: LOGIN_FAILURE
    }
}
const registerSuccess = () => {
    return {
        type: SIGNUP_SUCCESS,
        payload: "Your account was successfully created! Now you need to verify your e-mail address, please go check your inbox."
    }
}
const registerFailure = () => {
    return {
        type: SIGNUP_FAILURE,
        payload: "we couldn't create your account. Please try again."
    }
}

/// user registration data


const signUp = (inp) => (dispatch) => {

    // const {wemail,password} = inp

    // try {
    //     auth.createUserWithEmailAndPassword(wemail, password)
    //     .then(dataBeforeEmail => {
    //         auth().onAuthStateChanged(function (user) {
    //             user.sendEmailVerification();
    //         });
    //     })
    //         .then(dataAfterEmail => {
    //             auth().onAuthStateChanged(function (user) {
    //                 if (user.emailVerified) {
    //                     // Email is verified
    //                     dispatch(registerSuccess());
    //                 }
    //                 else {
    //                     // email is not varified
    //                     dispatch(registerFailure())
    //                 }
    //             })
    //         })
    //         .catch(function (error) {
    //             dispatch(registerFailure())
    //         })
    // }

    // catch (err) {
    //     dispatch(registerFailure())
    // }

}

///    login auth is getting done here

const submitSignInData = (inp) => (dispatch) => {

    const axios = Axios.create({
        baseURL: "https://c2ec8.sse.codesandbox.io"
    });
    axios({
        url: "/harvest",
        method: "get"
    })
        .then((res) => {
            res = res.data;
            console.log(res);

            res.filter((item) => item.wemail == inp.wemail && item.password == inp.password ?
                dispatch(loginSuccess()) :
                dispatch(loginFailure())
            )

        })
}




export { loginSuccess, loginFailure, signUp, submitSignInData }