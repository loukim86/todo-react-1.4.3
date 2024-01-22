import React from 'react';
import './TasksFilter.css';

const TasksFilter = ({ filter, onUpdateFilter }) => {
    const filters = [
        { state: 'all', label: 'All' },
        { state: 'active', label: 'Active' },
        { state: 'completed', label: 'Completed' },
    ];

    return (
        <ul className="filters">
            {filters.map(({ state, label }) => (
                <li key={state}>
                    <button
                        className={state === filter ? 'selected' : ''}
                        onClick={() => onUpdateFilter(state)}>
                        {label}
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TasksFilter;
