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
      
      const newTask = {
        id: date.getTime(),
        name: inputValue, 
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` 
      };
      setTasklist([...tasklist, newTask]);
    }


    setInputValue('');
  };

  return (
    <section className='addTask'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          autoComplete='off'
          placeholder='ADD THE TASK EDIT THE TASK'
        />
        <button type="submit">{editTaskId ? 'Update' : 'Add'}</button>
      </form>
    </section>
  );
};

export default AddTask;
