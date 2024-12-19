import React, { useState } from 'react';
import './app.css';
import Header from './components/Header';
import AddTask from './components/AddTask';
import ShowTask from './components/ShowTask'

const App = () => {  //App.js file
  const [tasklist, setTasklist] = useState([]);
  const [editTaskId, setEditTaskId] = useState(null); 
  
  return (
  
    <div className='App'>
      <Header />
      <AddTask 
        tasklist={tasklist} 
        setTasklist={setTasklist} 
        editTaskId={editTaskId} 
        setEditTaskId={setEditTaskId} 
      />
      <ShowTask 
        tasklist={tasklist} 
        setTasklist={setTasklist} 
        setEditTaskId={setEditTaskId} 
      />
    </div>
  );
};

export default App;