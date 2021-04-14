import React from 'react'


const init = {
    isLoading = false,
}

export const projectReducer = (state = init, {type, payload}) => {


    switch (type) {
        case PROJECT_SUCCESS:
            return {
                ...state,
                isLoading: false
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