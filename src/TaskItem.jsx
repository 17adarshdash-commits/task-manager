export default function TaskItem({ task, onToggle, onDelete }) {
  return (

    <div className="flex items-center justify-between p-3 border border-gray-200 rounded bg-gray-50 hover:bg-gray-100 transition-colors">
      

      <div className="flex items-center gap-3">
        <input 
          type="checkbox" 
          className="w-5 h-5 cursor-pointer"
          checked={task.isCompleted} 
          onChange={() => onToggle(task.id)} 
        />
        

        <span className={task.isCompleted ? 'line-through text-gray-400' : 'text-gray-700'}>
          {task.text}
        </span>
      </div>
      
      <button 
        className="text-red-500 font-semibold hover:text-red-700 transition-colors"
        onClick={() => onDelete(task.id)}
      >
        Delete
      </button>
    </div>
  );
}