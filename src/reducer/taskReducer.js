// reducer is a function with switch case which returns an object with updated state

const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, tasks: [...state.tasks, action.payload] };
    default:
      return { ...state };
  }
};

export default taskReducer;
