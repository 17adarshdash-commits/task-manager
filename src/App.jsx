import { useState, useEffect } from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

export default function App() {

  const [tasks, setTasks] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const savedTasks = localStorage.getItem('task-manager-data');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
    setHasLoaded(true);
  }, []);

  useEffect(() => {
    if (hasLoaded) {
      localStorage.setItem('task-manager-data', JSON.stringify(tasks));
    }
  }, [tasks, hasLoaded]);


  const addTask = (newTaskText) => {
    const newTask = {
      id: Date.now().toString(),
      text: newTaskText,
      isCompleted: false
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (taskId) => {
    setTasks(tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    }));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="app-container">
      <h1>My Tasks</h1>
      <TaskInput onAddTask={addTask} />
      <TaskList 
        tasks={tasks} 
        onToggle={toggleTask} 
        onDelete={deleteTask} 
      />
    </div>
  );
}