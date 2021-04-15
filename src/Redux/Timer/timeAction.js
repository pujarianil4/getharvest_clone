import axios from "axios"
import { CREATETASK_FAILURE, CREATETASK_REQUEST, CREATETASK_SUCCESS,GETTASK_FAILURE, GETTASK_REQUEST, GETTASK_SUCCESS } from "./actionType"

export const createTaskRequest =()=>{
    return {
        type:CREATETASK_REQUEST
    }
}

export const createTaskSuccess=(payload)=>{
    return {

        type:CREATETASK_SUCCESS,
        payload
    }
}

export const createTaskFailure=(payload)=>{
    return {
        type:CREATETASK_FAILURE,
        payload
    }
}


export const getTaskRequest =()=>{
    return {
        type:GETTASK_REQUEST
    }
}

export const getTaskSuccess=(payload)=>{
    return {

        type:GETTASK_SUCCESS,
        payload
    }
}

export const getTaskFailure=(payload)=>{
    return {
        type:GETTASK_FAILURE,
        payload
    }
}



export const createTaskTimer =(payload)=>(dispatch)=>{
    dispatch(createTaskRequest())
    return axios.post("https://auth-dev-9137e-default-rtdb.firebaseio.com/TaskTimer",payload).then((res)=>
        dispatch(createTaskSuccess(res.data))
    ).catch((err)=>{
        dispatch(createTaskFailure(err))
    })
}

export const getTaskTimer =(dispatch)=>(payload)=>{
    dispatch(getTaskRequest())
    return axios.post("https://auth-dev-9137e-default-rtdb.firebaseio.com/TaskTimer").then((res)=>{
        dispatch(getTaskSuccess(res.data))
    }).catch((err)=>{
        dispatch(getTaskFailure(err))
    })
}