export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className="task-item">
      <input 
        type="checkbox" 

        checked={task.isCompleted} 

        onChange={() => onToggle(task.id)} 
      />
      

      <span style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      

      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
}