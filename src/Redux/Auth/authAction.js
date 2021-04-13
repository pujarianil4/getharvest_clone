import { LOGIN_FAILURE, LOGIN_SUCCESS } from "./authActionType"
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
            dispatch(loginSuccess());
        })
        .catch((error) =>
            dispatch(loginFailure())
        )

}




export { loginSuccess, loginFailure, submitSignUpData }