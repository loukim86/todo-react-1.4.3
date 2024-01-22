import React from 'react';
import NewTaskForm from "../NewTaskForm/NewTaskForm";
import './Header.css';

const Header = ({ onCreateNewTask }) => {
  return (
    <header className="header">
      <h1>todos</h1>
      <NewTaskForm onAddTask={onCreateNewTask} />
    </header>
  );
}

export default Header;