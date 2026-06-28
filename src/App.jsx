import { useState, useEffect } from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';


export default function App() {

  const [tasks, setTasks] = useState([]);


  useEffect(() => {
    const savedTasks = localStorage.getItem('task-manager-data');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);


  useEffect(() => {
    localStorage.setItem('task-manager-data', JSON.stringify(tasks));
  }, [tasks]);


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
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md border border-gray-100">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">My Tasks</h1>
      
      <TaskInput onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
      />
    </div>
  );
}