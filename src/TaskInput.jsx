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
    <form className="flex gap-2 mb-6" onSubmit={handleSubmit}>
      <input 
        type="text" 
        className="flex-1 border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500"
        placeholder="Add a new task..." 
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button 
        type="submit" 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
      >
        Add
      </button>
    </form>
  );
}