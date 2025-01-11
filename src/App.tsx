import { useState } from 'react';
import { AddTask } from './components/AddTask';
import { TasksList } from './components/TaskList';

export interface Task {
  id: number;
  text: string;
  isCompleted: boolean;
}

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (text: string) => {
    const taskId = tasks[tasks.length - 1]?.id + 1 || 1;
    setTasks([...tasks, { id: taskId, text, isCompleted: false }]);
  };

  const handleCompoteTask = (id: number) => {
    const updateTasks = tasks.map(({ text, id: taskId, isCompleted }) =>
      taskId === id
        ? { text, id: taskId, isCompleted: !isCompleted }
        : { text, id: taskId, isCompleted }
    );

    setTasks(updateTasks);
  };

  const handleDeleteTask = (id: number) => {
    const updateTasks = tasks.filter(({ id: taskId }) => taskId !== id);
    setTasks(updateTasks);
  };

  return (
    <>
      <h1>TodoList</h1>
      <AddTask onAdd={handleAddTask} />
      <TasksList
        tasks={tasks}
        onDelete={handleDeleteTask}
        onComplete={handleCompoteTask}
      />
    </>
  );
};

export default App;
