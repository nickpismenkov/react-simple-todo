import React, { useState } from 'react';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Title 1' },
    { id: 2, title: 'Title 2' },
    { id: 3, title: 'Title 3' },
    { id: 4, title: 'Title 4' },
    { id: 5, title: 'Title 5' },
  ]);

  const addTask = (task) => {
    if (task !== '') {
      setTasks((tasks) => [...tasks, { id: Date.now(), title: task }]);
    }
  };

  return (
    <>
      <AddTask addTask={addTask} />
      <Tasks tasks={tasks} />
    </>
  );
};

export default App;
