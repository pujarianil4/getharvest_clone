import axios from "axios"
import { CREATETASK_FAILURE, CREATETASK_REQUEST, CREATETASK_SUCCESS,GETPROJECT_FAILURE,GETPROJECT_REQUEST,GETPROJECT_SUCCESS,GETTASK_FAILURE, GETTASK_REQUEST, GETTASK_SUCCESS } from "./actionType"

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







export const getProjectRequest =()=>{
    return {
        type:GETPROJECT_REQUEST
    }
}

export const getProjectSuccess=(payload)=>{
    return {

        type:GETPROJECT_SUCCESS,
        payload
    }
}

export const getProjectFailure=(payload)=>{
    return {
        type:GETPROJECT_FAILURE,
        payload
    }
}


export const createTaskTimer =(payload)=>(dispatch)=>{
    console.log(payload)
    dispatch(createTaskRequest())
    return axios.post("https://1u30f.sse.codesandbox.io/timer",payload).then((res)=>
        // dispatch(createTaskSuccess(res.data))
        console.log(res)
    ).catch((err)=>{
        dispatch(createTaskFailure(err))
    })
}

export const getTaskTimer =()=>(dispatch)=>{
    dispatch(getTaskRequest())
    return axios.get("https://1u30f.sse.codesandbox.io/timer").then((res)=>{
        // dispatch(getTaskSuccess(res.data))
        console.log(res.data)
    }).catch((err)=>{
        dispatch(getTaskFailure(err))
    })
}




export const getProjectData =()=>(dispatch)=>{
    // dispatch(getProjectRequest())
    return axios.get('https://auth-dev-9137e-default-rtdb.firebaseio.com/projects.json').then((res)=>{
            let arrdata =[]
            for(let k in res.data){
                arrdata.push(res.data[k])
            }
            dispatch(getProjectSuccess(arrdata))
    }).catch((err)=>{
        dispatch(getProjectFailure(err))
    })
}



