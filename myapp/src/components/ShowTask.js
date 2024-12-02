import React from 'react';

const ShowTask = ({ tasklist, setTasklist, setEditTaskId }) => {
  const deleteTask = (id) => {
    // Filter out the task with the given id
    const updatedTaskList = tasklist.filter((task) => task.id !== id);
    setTasklist(updatedTaskList); // Update the tasklist state
  };

  const startEditing = (id) => {
    setEditTaskId(id); // Set the task ID to start editing
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
            {/* Edit Icon */}
            <i 
              className="bi bi-pencil-square" 
              onClick={() => startEditing(task.id)} // Start editing when clicked
            ></i>
            {/* Delete Icon */}
            <i 
              className="bi bi-trash" 
              onClick={() => deleteTask(task.id)} // Delete task when clicked
            ></i>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ShowTask;
