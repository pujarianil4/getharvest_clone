import { CREATETASK_FAILURE, CREATETASK_REQUEST, CREATETASK_SUCCESS, GETPROJECT_FAILURE, GETPROJECT_REQUEST, GETPROJECT_SUCCESS, GETTASK_FAILURE, GETTASK_REQUEST, GETTASK_SUCCESS } from "./actionType"

const initTaskState ={
    isLoading:true,
    isError:false,
    projectData:[]
}

export const timeReducer=(state=initTaskState,{type,payload})=>{
    switch(type){
        case CREATETASK_REQUEST: {
            return{
                ...state,
            }
        }
        case CREATETASK_SUCCESS: {
            return{
                ...state,
            }
        }
        case CREATETASK_FAILURE: {
            return{
                ...state,
            }
        }
        case GETTASK_REQUEST: {
            return{
                ...state,
            }
        }
        case GETTASK_SUCCESS: {
            return{
                ...state,
            }
        }
        case GETTASK_FAILURE: {
            return{
                ...state,
            }
        }

        case GETPROJECT_REQUEST: {
            return{
                ...state,
                isLoading:true
            }
        }
        case GETPROJECT_SUCCESS: {
            return{
                
                ...state,
                projectData:payload,
                isLoading:false
            }
        }
        case GETPROJECT_FAILURE: {
            return{
                ...state,
            }
        }



        default:{
            return state
        }
        
    }
}