import React, { useState, useEffect } from 'react';

const AddTask = ({ tasklist, setTasklist, editTaskId, setEditTaskId }) => {
  const [inputValue, setInputValue] = useState(''); // State to manage the input value

  // When editing a task, set the input field value to the task's current value
  useEffect(() => {
    if (editTaskId) {
      const taskToEdit = tasklist.find(task => task.id === editTaskId);
      setInputValue(taskToEdit.name); // Populate the input field with the task's current name
    } else {
      setInputValue(''); // Clear input if no task is being edited
    }
  }, [editTaskId, tasklist]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const date = new Date();

    if (inputValue.trim() === '') return; // Prevent adding empty tasks

    if (editTaskId) {
      // Edit the existing task
      const updatedTaskList = tasklist.map(task => 
        task.id === editTaskId ? { ...task, name: inputValue, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` } : task
      );
      setTasklist(updatedTaskList);
      setEditTaskId(null); // Reset edit mode after saving
    } else {
      // Add a new task
      const newTask = {
        id: date.getTime(), // Unique ID based on timestamp
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
          placeholder='Add or Edit task'
        />
        <button type="submit">{editTaskId ? 'Update' : 'Add'}</button>
      </form>
    </section>
  );
};

export default AddTask;
