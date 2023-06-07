import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false); // State variable to track if the task is being edited
  const [description, setDescription] = useState(task.description); // State variable to store the task description
  const dispatch = useDispatch(); // Hook to get the Redux dispatch function

  const handleToggleEditing = () => {
    setIsEditing(!isEditing); // Toggle the editing state when the Edit button is clicked
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (description.trim()) {
      // Dispatch an action to update the task
      setIsEditing(false); // Set editing state to false after submitting the updated task
    }
  };

  return (
    <div>
      {isEditing ? ( // Render form for editing if isEditing is true
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <button type="submit">Save</button>
        </form>
      ) : ( // Render task details if isEditing is false
        <div>
          <span
            style={{
              textDecoration: task.isDone ? 'line-through' : 'none',
              cursor: 'pointer',
            }}
            onClick={handleToggleEditing}
          >
            {description}
          </span>
          <button onClick={handleToggleEditing}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default Task;
