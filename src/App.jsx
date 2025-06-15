import TaskList from './components/TaskList.jsx';
import './App.css';
import { useState } from 'react';

function App() {
  const [taskData, setTaskData] = useState([
    {
      id: 1,
      title: 'Mow the lawn',
      isComplete: false,
    },
    {
      id: 2,
      title: 'Cook Pasta',
      isComplete: true,
    },
  ]);

  const toggleTaskComplete = (taskId) => {
    const tasks = taskData.map(task => {
      if (task.id === taskId) {
        return {...task, isComplete: !task.isComplete };
      } else {
        return task;
      }
    });
    setTaskData(tasks);
  };

  const deleteTask = (taskId) => {
    const updatedList = taskData.filter(task => task.id !== taskId);
    setTaskData(updatedList);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          <TaskList
            tasks={taskData}
            onTaskCompleteToggle= {toggleTaskComplete}
            deleteThisTask = {deleteTask}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
