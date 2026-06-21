import { useState } from 'react';

export default function TaskInput({ onAddTask }) {
  
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    
 
    if (inputText.trim() === '') return; 
    

    onAddTask(inputText); 
    

    setInputText(''); 
  };

  return (
    <form className="task-input" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Add a new task..." 
        value={inputText}
        onChange={(e) => setInputText(e.target.value)} 
      />
      <button type="submit">Add</button>
    </form>
  );
}