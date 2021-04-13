import { LOGIN_FAILURE, LOGIN_SUCCESS, SIGNUP_SUCCESS,SIGNUP_FAILURE } from "./authActionType"
import Axios from "axios"



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
        type: SIGNUP_SUCCESS
    }
}
const registerFailure = () => {
    return {
        type: SIGNUP_FAILURE
    }
}


const submitSignUpData = (inp) => (dispatch) => {
    const axios = Axios.create({
        baseURL: "https://c2ec8.sse.codesandbox.io"
    });
    axios({
        url: "/harvest",
        method: "post",
        data: {
            fname: inp.fname,
            lname: inp.lname,
            cname: inp.cname,
            wemail: inp.wemail,
            password: inp.password,
        }
    })
        .then((res) => {
            console.log(res)
            dispatch(registerSuccess());
        })
        .catch((error) =>
            dispatch(registerFailure())
        )

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




export { loginSuccess, loginFailure, submitSignUpData, submitSignInData }