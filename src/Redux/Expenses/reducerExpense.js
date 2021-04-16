import { ADD_EXPENSE, DELETE_EXPENSE, EDIT_EXPENSE, EDIT_POP } from "./actionTypes";

const initState = {
  expenseList: [],
};
const reducerExpense = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_EXPENSE:
      return {
        ...state,
        expenseList: [...state.expenseList, payload],
      };
    case EDIT_EXPENSE:
      return {};
    case DELETE_EXPENSE:
        const newArr = state.expenseList.filter((items) => items.id !== payload);
      return {...state,expenseList:newArr};
     case EDIT_POP:
        const newArr1 = state.expenseList.map((items) =>
        items.id === payload ? { ...items, status: !items.status } : items
      );
      return { ...state, expenseList: newArr1 };  
    default:
      return state;
  }
};
export { reducerExpense };
