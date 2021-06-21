import {
  ADD_EXPENSE,
  DELETE_EXPENSE,
  EDIT_EXPENSE,
  EDIT_POP,
  UPLOAD_FAILURE,
  UPLOAD_REQUEST,
  UPLOAD_SUCCESS,
} from "./actionTypes";

const initState = {
  expenseList: [],
  isLoading: false,
  isError: false,
};
const reducerExpense = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_EXPENSE:
      return {
        ...state,
        expenseList: [...state.expenseList, payload],
      };
    case EDIT_EXPENSE:
      const Edited = state.expenseList.map((items) =>
        items.id === payload.id ? { payload } : items
      );
      return { ...state, expenseList: Edited };
    case DELETE_EXPENSE:
      const newArr = state.expenseList.filter((items) => items.id !== payload);
      return { ...state, expenseList: newArr };
    case EDIT_POP:
      const newArr1 = state.expenseList.map((items) =>
        items.id === payload ? { ...items, status: !items.status } : items
      );
      return { ...state, expenseList: newArr1 };
    case UPLOAD_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case UPLOAD_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case UPLOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    default:
      return state;
  }
};
export { reducerExpense };
