import React from 'react';
import TasksFilter from '../TasksFilter/TasksFilter';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <span className="todo-count">1 items left</span>
            <TasksFilter />
            <button className="clear-comleted">Clear completed</button>
        </footer>
    );
};

export default Footer;