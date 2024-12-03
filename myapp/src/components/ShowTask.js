import React from 'react';

const ShowTask = ({ tasklist, setTasklist, setEditTaskId }) => {
  const deleteTask = (id) => {
  
    const updatedTaskList = tasklist.filter((task) => task.id !== id);
    setTasklist(updatedTaskList);
  };

  const startEditing = (id) => {
    setEditTaskId(id);
  };

  return (
    <section className='showTask'>
      <p className="head">
        <span>
          <span className="title">Todo-App</span>
          <span className="count">{tasklist.length}</span>
        </span>
        <span className="clearAll" onClick={() => setTasklist([])}>Clear All</span>
      </p>
      <ul>
        {tasklist.map((task) => (
          <li key={task.id}>
            <p>
              <span className="name">{task.name}</span>
              <span className="time">{task.time}</span>
            </p>
         
            <i 
              className="bi bi-pencil-square" 
              onClick={() => startEditing(task.id)}
            ></i>
            <i 
              className="bi bi-trash" 
              onClick={() => deleteTask(task.id)} 
            ></i>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ShowTask;
