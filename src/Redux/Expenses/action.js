import axios from "axios"
import { ADD_EXPENSE, DELETE_EXPENSE, EDIT_EXPENSE, EDIT_POP, UPLOAD_FAILURE, UPLOAD_REQUEST, UPLOAD_SUCCESS } from "./actionTypes"

const addExpense =(payload)=>
{
    return{
        type:ADD_EXPENSE,
        payload
    }
}
const editExpense =(payload)=>
{
    return{
        type:EDIT_EXPENSE,
        payload
    }
}
const deleteExpense=(payload)=>
{
     return{
         type:DELETE_EXPENSE,
         payload
     }
}
const editPop=(payload)=>
{
    return{
        type:EDIT_POP,
        payload
    
    }
}
const  upLoadReq=()=>
{
    return{
        type:UPLOAD_REQUEST
    }
}
const upLoadFail=()=>
{
    return{
        type:UPLOAD_FAILURE
    }
}
const upLoadSucc=()=>
{
    return{
       type:UPLOAD_SUCCESS
    }
}
const savedExpense=(payload,userId)=>(dispatch)=>{
       dispatch(upLoadReq());
       const newPayload={...payload,userId}
       axios.post("https://gor1f.sse.codesandbox.io/expences", newPayload)
       .then((res)=>{
           res=res.status
           dispatch(upLoadSucc());
       })
       .catch((er)=>{
           dispatch(upLoadFail());
       })
}

export {addExpense ,editExpense,deleteExpense,editPop,savedExpense}