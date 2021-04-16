import { ADD_EXPENSE, DELETE_EXPENSE, EDIT_EXPENSE, EDIT_POP } from "./actionTypes"

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
export {addExpense ,editExpense,deleteExpense,editPop}