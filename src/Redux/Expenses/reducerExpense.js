import { ADD_EXPENSE, EDIT_EXPENSE } from "./actionTypes"

const initState ={
    expenseList:[]
}
const reducerExpense =(state=initState,{type,payload})=>
{
    switch(type){
        case ADD_EXPENSE :
          return{
              ...state,
              expenseList:[...state.expenseList,payload]
          }
         case EDIT_EXPENSE :
             
             return{

             } 
          default :
          return state
    }
}
export {reducerExpense}