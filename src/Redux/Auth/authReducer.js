import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT_SUCCESS, SIGNUP_FAILURE, SIGNUP_SUCCESS } from "./authActionType"
import { auth } from "../../Components/Auth/firebase"
import { saveData, loadData } from "../../Components/Auth/localStorage"

const isAuth = loadData("token") || false;
const uid = loadData("user") || "";

const init = {
    isAuth: isAuth,
    isRegistered: false,
    uid
}

export const authReducer = (state = init, { type, payload }) => {

    switch (type) {

        case LOGIN_FAILURE:
            return {
                ...state,
                isAuth: false
            }
        case LOGIN_SUCCESS:

            saveData("token",true);
            saveData("user", payload)
            return {
                ...state,
                isAuth: true,
                uid: payload
            }
        case SIGNUP_FAILURE:
            return {
                ...state,
                isRegistered: false
            }
        case SIGNUP_SUCCESS:
            saveData("user_name", payload)
            return {
                ...state,
                isRegistered: true,
            }
        case LOGOUT_SUCCESS:
            localStorage.clear();
            return {
                ...state,
                isAuth: false,
                uid: ""
            }

        default: return state

    }

}