import { LOGIN_FAILURE, LOGIN_SUCCESS, SIGNUP_FAILURE, SIGNUP_SUCCESS } from "./authActionType"

const init = {
    isAuth: false,
    isRegistered: false
}

export const authReducer = (state = init, { type, payload }) => {

    switch (type) {

        case LOGIN_FAILURE:
            return {
                ...state,
                isAuth: false
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuth: true
            }
        case SIGNUP_FAILURE:
            return {
                ...state,
                isRegistered: false
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isRegistered: true
              
            }

        default: return state

    }


}