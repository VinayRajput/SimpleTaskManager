// reducer is a function with switch case which returns an object with updated state

const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Add":
      return { ...state, tasks: [...state.tasks, action.payload] };
      break;
    default:
      return { ...state };
      break;
  }
};

export default taskReducer;
