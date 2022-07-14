// import { createSelector } from "reselect";

import { searchFilterChange } from "./actions";

// export const searchTextSelector = (state) => state.filters.search;
// // export const filterStatusSelector = (state) => state.filters.status;
// export const todoListSelector = (state) => state.todoList;

// export const todoRemainingSelector = createSelector(
//   todoListSelector,
//   searchTextSelector,
//   (todoList, searchText) => {
//     return todoList.filter((todo) => {
//       return todo.name.includes(searchText);
//     });
//   }
// );

// import { createSelector } from "reselect";

export const todoListSelector = (state) => {
  const searchText = searchTextSelector(state);
  const status = filterStatusSelector(state);
  const todoRemaining = state.todoList.filter((todo) => {
    if (status === "All") {
      return todo.name.includes(searchText);
    }
    return (
      todo.name.includes(searchText) &&
      (status !== "All" && status === "Completed"
        ? todo.completed
        : !todo.completed)
    );
  });
  return todoRemaining;
};
export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
// export const todoListSelector = (state) => state.todoList;

// export const todoRemainingSelector = createSelector(
//   todoListSelector,
//   searchTextSelector,
//   (todoList, searchText) => {
//     return todoList.filter((todo) => {
//       return todo.name.includes(searchText);
//     });
//   }
// );
