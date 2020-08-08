import React from 'react';

const Tasks = ({ tasks }) => {
  return (
    <>
      <hr />
      {tasks.map((task) => (
        <p key={task.id}>{task.title}</p>
      ))}
    </>
  );
};

export default Tasks;
