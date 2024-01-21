import React from 'react';
import NewTaskForm from "../NewTaskForm/NewTaskForm";
import './Header.css';

const Header = ({ onAddTask, newTask, setNewTask }) => {
  return (
    <header className="header">
      <h1>todos</h1>
      <NewTaskForm onAddTask={onAddTask}
        newTask={newTask}
        setNewTask={setNewTask} />
    </header>
  );
}

export default Header;
