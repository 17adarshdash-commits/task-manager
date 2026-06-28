import { useState, useEffect } from 'react';

export default function FlaskTest() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/fake')
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  return (
    <div>
      {tasks.map((task, index) => (
        <p key={index}>{JSON.stringify(task)}</p>
      ))}
    </div>
  );
}