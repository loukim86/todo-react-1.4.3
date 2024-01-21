import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import './NewTaskForm.css';


const NewTaskForm = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  }; 

const handleAddTask = () => {
    if (newTask.trim() !== '') {
      const taskDate = new Date(); 
      const formattedTime = getTimeAgo(taskDate);
  
      onAddTask({ description: newTask, status: '', created: formattedTime });
      setNewTask('');
    }
  };
  

const getTimeAgo = (taskDate) => {
    return formatDistanceToNow(taskDate, { addSuffix: true });
  };
  

  return (
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      autoFocus
      value={newTask}
      onChange={handleInputChange}
      onKeyDown={(e) => e.key === 'Enter' && handleAddTask()}
    />
  );
};

export default NewTaskForm;
