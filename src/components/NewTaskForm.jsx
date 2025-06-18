import TaskList from './components/TaskList.jsx';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import NewTaskForm from './components/NewTaskForm';

function App() {
  const [taskData, setTaskData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/tasks')
      .then ((response) => {
        const formattedTasks = response.data.map((task) => ({
          id: task.id,
          title: task.title,
          isComplete: task.is_complete,
        }));
        setTaskData(formattedTasks);
      })
      .catch((error) => {
        console.error('Error fectching tasks:', error);
      });
  }, []);

  const toggleTaskComplete = (taskId) => {
    const task = taskData.find((t) => t.id === taskId);
    const url = `http://localhost:5000/tasks/${taskId}/${task.isComplete ? 'mark_incomplete' : 'mark_complete'}`;
    axios.patch(url)
      .then(()=>{
        const updatedTasks = taskData.map((t)=>
          t.id === taskId ? { ...t, isComplete: !t.isComplete }:t
        );
        setTaskData(updatedTasks);
      })
      .catch((error)=>{
        console.error('Error toggling task:',error);
      });
  };

  const deleteTask = (taskId) => {
    axios.delete(`http://localhost:5000/tasks/${taskId}`)
      .then(() => {
        const updatedTasks = taskData.filter((t) => t.id !== taskId);
        setTaskData(updatedTasks);
      })
      .catch((error) => {
        console.error('Error deleting task:', error);
      });
  };

  const addNewTask = (titleText) =>{
    axios.post('http://localhost:5000/tasks', {
      title: titleText,
      description:''
    })
      .then ((response) => {
        const newTask = {
          id: response.data.id,
          title: response.data.title,
          isComplete: response.data.is_complete,
        };
        setTaskData([...taskData, newTask]);
      })
      .catch((error) => {
        console.error('Error adding task:', error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          <NewTaskForm onAddTask={addNewTask} />
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
