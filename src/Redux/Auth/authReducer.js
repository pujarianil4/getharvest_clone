import { LOGIN_FAILURE, LOGIN_SUCCESS } from "./authActionType"

const init = {
    isAuth: false
}

export const authReducer = (state = init, { type, payload }) => {

    switch (type) {

        case LOGIN_FAILURE:
            return {
                isAuth: false
            }
        case LOGIN_SUCCESS:
            return {
                isAuth: true
            }

        default: return state

    }


}