import React, { useState } from 'react';

const AddTask = ({ addTask }) => {
  const [task, setTask] = useState('');

  return (
    <>
      <input
        type="text"
        onChange={(event) => setTask(event.target.value)}
        value={task}
      />
      <button
        onClick={() => {
          setTask('');
          addTask(task);
        }}
      >
        Добавить
      </button>
    </>
  );
};

export default AddTask;
