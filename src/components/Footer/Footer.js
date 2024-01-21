import React from 'react';
import TasksFilter from '../TasksFilter/TasksFilter';
import './Footer.css';

const Footer = ({ onFilterChange, onDeleteCompleted, activeTasksCount }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{activeTasksCount} items left</span>
      <TasksFilter onFilterChange={onFilterChange} />
      <button className="clear-completed" onClick={onDeleteCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
