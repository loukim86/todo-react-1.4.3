import React from 'react';
import Task from "../Task/Task";
import './TaskList.css';

const TaskList = ({ taskData, onChange, onDelete }) => {
  const taskTodo = taskData.map((item) => {
    const {id, status, ...itemProps} = item;
    return (
        <li key={id} className={status}>
            <div className="view">
                <input className="toggle" type="checkbox"
                       checked={status === 'completed' ? true : false}
                       onChange={() => onChange(id)}/>
                <label><Task taskItem={itemProps}/></label>
                <button className="icon icon-edit"></button>
                <button className="icon icon-destroy"
                 onClick={() => onDelete(id)}></button>
            </div>
            {status === 'editing' ? <input type="text" className="edit" defaultValue="Editing task"/> : null}
        </li>
    );
});

return (
    <ul className="todo-list">
        {taskTodo}
    </ul>
);
}

export default TaskList;

