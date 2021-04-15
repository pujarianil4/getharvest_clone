import { ADD_EXPENSE, EDIT_EXPENSE } from "./actionTypes"

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
export {addExpense ,editExpense}