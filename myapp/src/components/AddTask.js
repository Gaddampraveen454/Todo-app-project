import React, { useState, useEffect } from 'react';

const AddTask = ({ tasklist, setTasklist, editTaskId, setEditTaskId }) => {
  const [inputValue, setInputValue] = useState(''); 

  
  useEffect(() => {
    if (editTaskId) {
      const taskToEdit = tasklist.find(task => task.id === editTaskId);
      setInputValue(taskToEdit.name); 
    } else {
      setInputValue(''); 
    }
  }, [editTaskId, tasklist]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const date = new Date();

    if (inputValue.trim() === '') return; 

    if (editTaskId) {

      const updatedTaskList = tasklist.map(task => 
        task.id === editTaskId ? { ...task, name: inputValue, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` } : task
      );
      setTasklist(updatedTaskList);
      setEditTaskId(null); 
    } else {
      // Add a new task
      const newTask = {
        id: date.getTime(),
        name: inputValue, // Task name from input
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` // Current time
      };
      setTasklist([...tasklist, newTask]);
    }

    // Clear the input field after submission
    setInputValue('');
  };

  return (
    <section className='addTask'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue} // Bind the input value to the 'inputValue' state
          onChange={(e) => setInputValue(e.target.value)} // Update the 'inputValue' state as user types
          autoComplete='off'
          placeholder='Add The Task or Edit The task'
        />
        <button type="submit">{editTaskId ? 'Update' : 'Add'}</button>
      </form>
    </section>
  );
};

export default AddTask;
