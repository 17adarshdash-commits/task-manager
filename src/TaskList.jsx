import TaskItem from './TaskItem';

export default function TaskList({ tasks, onToggle, onDelete }) {
  return (

    <div className="flex flex-col gap-3">
      {tasks.length === 0 && <p className="text-gray-400 text-center">No tasks yet</p>}
      {tasks.map((task) => (
        <TaskItem 
          key={task.id} 
          task={task} 
          onToggle={onToggle} 
          onDelete={onDelete} 
        />
      ))}
    </div>
  );
}