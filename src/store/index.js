import { createStore } from 'redux';

const initialState = {
  tasks: [],
  filter: 'all',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload], // Add the new task to the tasks array
      };
    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload ? { ...task, isDone: !task.isDone } : task // Toggle the isDone property of the task with the given ID
        ),
      };
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload, // Update the filter value
      };
    default:
      return state;
  }
}

const store = createStore(reducer); // Create the Redux store with the reducer function

export default store;
