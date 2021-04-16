import React from 'react'
import {PROJECT_FAILURE, PROJECT_SUCCESS, PROJECT_REQUEST} from "./projectActionType"


const init = {
    isLoading: false,
    successRes: ""
}

export const projectReducer = (state = init, {type, payload}) => {


    switch (type) {
        case PROJECT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                successRes: payload
            }
            
            case PROJECT_FAILURE:
            return {
                ...state,
                isLoading: false
            }
            
            case PROJECT_REQUEST:
            return {
                ...state,
                isLoading: true
            }
            
    }


} 