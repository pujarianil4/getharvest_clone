import { CREATETASK_FAILURE, CREATETASK_REQUEST, CREATETASK_SUCCESS, GETTASK_FAILURE, GETTASK_REQUEST, GETTASK_SUCCESS } from "./actionType"

const initTaskState ={
    projectName:"",
    taskName:"",
    notes:"",
    timer:""
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
        default:{
            return state
        }
        
    }
}