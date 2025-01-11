import { useCallback, useState } from 'react';
import { AddTask } from './components/AddTask';
import { TasksList } from './components/TaskList';

export interface Task {
  id: number;
  text: string;
  isCompleted: boolean;
}

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = useCallback(
    (text: string) =>
      setTasks((tasks) => [
        ...tasks,
        { id: Date.now(), text, isCompleted: false },
      ]),
    []
  );

  const handleCompoteTask = useCallback(
    (id: number) =>
      setTasks((tasks) =>
        tasks.map((task) =>
          task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
        )
      ),
    []
  );

  const handleDeleteTask = useCallback(
    (id: number) =>
      setTasks((tasks) => tasks.filter(({ id: taskId }) => taskId !== id)),
    []
  );

  return (
    <div className="flex flex-col items-center pt-5 h-screen gap-4">
      <h1 className="text-9xl font-black text-gray-400">TodoList</h1>
      <AddTask onAdd={handleAddTask} />
      <TasksList
        tasks={tasks}
        onDelete={handleDeleteTask}
        onComplete={handleCompoteTask}
      />
    </div>
  );
};

export default App;
