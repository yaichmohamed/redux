import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function AddTask() {
  const [description, setDescription] = useState(''); // State variable to store the task description
  const dispatch = useDispatch(); // Hook to get the Redux dispatch function

  const handleSubmit = e => {
    e.preventDefault();
    if (description.trim()) {
      // Create a new task object with a unique ID, description, and isDone set to false
      const newTask = {
        id: Date.now(),
        description,
        isDone: false,
      };
      // Dispatch an action to add the new task to the Redux store
      dispatch({ type: 'ADD_TASK', payload: newTask });
      setDescription(''); // Clear the input field by resetting the description state
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Enter task description"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTask;
