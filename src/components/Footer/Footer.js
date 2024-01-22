import React from 'react';
import TasksFilter from "../TasksFilter/TasksFilter";
import './Footer.css';

const Footer = ({ filter, updateFilter, clearCompletedTasks, activeTasks }) => {
    return (
        <footer className="footer">
            <span className="todo-count">{activeTasks} items left</span>
            <TasksFilter filter={filter} onUpdateFilter={updateFilter}/>
            <button className="clear-completed" onClick={() => clearCompletedTasks()}>Clear completed</button>
        </footer>
    );
}

export default Footer;
