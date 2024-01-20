import React, { useState } from "react";
import Header from "../Header/Header";
import TaskList from "../TaskList/TaskList";
import Footer from "../Footer/Footer";

import './App.css';

const App = () => {
    const [taskData, setTaskData] = useState([
        { id: 1, status: 'completed', description: 'Completed task', created: 'created 17 seconds ago' },
        { id: 2, status: 'editing', description: 'Editing task', created: 'created 5 minutes ago' },
        { id: 3, status: '', description: 'Active task', created: 'created 5 minutes ago' }
    ]);

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

return (
  <section className="todoapp">
      <Header />
      <section className="main">
          <TaskList taskData={taskData}
           onChange={editTask}
           onDelete={deleteTask} />
          <Footer />
      </section>
  </section>
 );
};

export default App;




    

   

    
