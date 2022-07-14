import { combineReducers } from "redux";

import filterReducer from "../components/Filters/FiltersSlice";
import todosReducer from "../components/Todo/TodosSlice";

// const rootReducer = (state = {}, action) => {
//   return {
//     filters: filterReducer(state.filters, action),
//     todoList: todosReducer(state.todoList, action),
//   };
// };
const rootReducer = combineReducers({
  filters: filterReducer,
  todoList: todosReducer,
});

export default rootReducer;
