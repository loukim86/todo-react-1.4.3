import React from 'react';
import './Task.css';


const Task = ({ taskItem }) => {
    return (
        <>
            <span className="description">{taskItem.description}</span>
            <span className="created">{taskItem.created}</span>
        </>
    );
}


export default Task;