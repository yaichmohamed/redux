import React from 'react';
import AddTask from './component/AddTask';
import ListTask from './component/ListTask';

function App() {
  return (
    <div>
      <h1>Todo App</h1>
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;