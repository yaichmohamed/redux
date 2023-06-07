import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function ListTask() {
  const tasks = useSelector(state => { // Select tasks from the Redux store based on filter state
    if (state.filter === 'all') { // If the filter is set to 'all', return all tasks
      return state.tasks;
    } else if (state.filter === 'done') { // If the filter is set to 'done', return only tasks marked as done
      return state.tasks.filter(task => task.isDone);
    } else { // If the filter is set to 'notDone', return only tasks marked as not done
      return state.tasks.filter(task => !task.isDone);
    }
  });

  const dispatch = useDispatch(); // Hook to get the Redux dispatch function

  const handleToggle = id => {
    dispatch({ type: 'TOGGLE_TASK', payload: id }); // Dispatch an action to toggle the task's completion status
  };

  return (
    <ul>
      {tasks.map(task => ( // Map over the tasks and render a list item for each task
        <li key={task.id} onClick={() => handleToggle(task.id)}>
          <span
            style={{
              textDecoration: task.isDone ? 'line-through' : 'none',
              cursor: 'pointer',
            }}
          >
            {task.description}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default ListTask;
