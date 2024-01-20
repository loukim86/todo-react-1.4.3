import React from 'react';
import Header from "../Header/Header";
import TaskList from "../TaskList/TaskList";
import Footer from "../Footer/Footer";

import './App.css';

const App = () => {
    const taskData = [
        { id: 1, status: 'completed', description: 'Completed task', created: 'created 17 seconds ago' },
        { id: 2, status: 'editing', description: 'Editing task', created: 'created 5 minutes ago' },
        { id: 3, status: '', description: 'Active task', created: 'created 5 minutes ago' }
    ]
    return (
        <section className="todoapp">
            <Header />
            <section className="main">
                <TaskList taskData={taskData} />
                <Footer />
            </section>
        </section>
    );
}

export default App