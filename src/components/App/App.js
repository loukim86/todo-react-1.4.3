import React, { useState } from 'react';
import Header from '../Header/Header';
import TaskList from '../TaskList/TaskList';
import Footer from '../Footer/Footer';
import './App.css';

const App = () => {
  const [taskData, setTaskData] = useState([
    { id: 1, status: 'completed', description: 'Completed task', created: 'created 17 seconds ago' },
    { id: 2, status: 'editing', description: 'Editing task', created: 'created 5 minutes ago' },
    { id: 3, status: '', description: 'Active task', created: 'created 5 minutes ago' }
  ]);
  const [filter, setFilter] = useState('all'); 

  const editTask = (id) => {
    setTaskData((prevTaskData) => {
      const updatedTaskData = prevTaskData.map((item) => {
        if (item.id === id) {
          const taskStatus = item.status === 'completed' ? '' : 'completed';
          return { ...item, status: taskStatus };
        }
        return item;
      });
      return updatedTaskData;
    });
  };

  const deleteTask = (id) => {
    setTaskData((prevTaskData) => {
      const updatedTaskData = prevTaskData.filter((item) => item.id !== id);
      return updatedTaskData;
    });
  };

  const addTask = (newTask) => {
    setTaskData((prevTaskData) => [...prevTaskData, { id: prevTaskData.length + 1, ...newTask }]);
  };

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  const deleteCompletedTasks = () => {
    setTaskData((prevTaskData) => prevTaskData.filter((task) => task.status !== 'completed'));
  };


  
  const filteredTasks = taskData.filter((task) => {
    if (filter === 'active') {
      return task.status !== 'completed';
    } else if (filter === 'completed') {
      return task.status === 'completed';
    }
    return true;
  });

  return (
    <section className="todoapp">
      <Header onAddTask={addTask} />
      <section className="main">
        <TaskList taskData={filteredTasks}
          onChange={editTask}
          onDelete={deleteTask} />
        <Footer onFilterChange={handleFilterChange}
          onDeleteCompleted={deleteCompletedTasks}
          activeTasksCount={filteredTasks.filter((task) => task.status !== 'completed').length} />
      </section>
    </section>
  );
};

export default App;
