const initState = [
  {
    id: 1,
    name: "Learn",
    completed: false,
    priorty: "High",
  },
  {
    id: 2,
    name: "Learn A",
    completed: false,
    priorty: "High",
  },
  {
    id: 3,
    name: "Learn B",
    completed: true,
    priorty: "Medium",
  },
];
const todosReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default todosReducer;
