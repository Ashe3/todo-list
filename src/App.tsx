import { useCallback, useState } from 'react';
import { AddTask } from './components/AddTask';
import { TasksList } from './components/TaskList';
import { useLocalStorage } from './hooks/useLocalStorage';
import { TasksFilter } from './components/TasksFilter';
import { ThemeSwitcher } from './components/ThemeSwitcher';

export interface Task {
  id: number;
  text: string;
  isCompleted: boolean;
}

export type ShowCompleted = 'all' | 'completed' | 'uncompleted';

const App = () => {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);
  const [showCompleted, setShowCompleted] = useState('all' as ShowCompleted);

  const handleAddTask = useCallback(
    (text: string) =>
      setTasks((tasks) => [
        ...tasks,
        { id: Date.now(), text, isCompleted: false },
      ]),
    [setTasks]
  );

  const handleCompoteTask = useCallback(
    (id: number) =>
      setTasks((tasks) =>
        tasks.map((task) =>
          task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
        )
      ),
    [setTasks]
  );

  const handleDeleteTask = useCallback(
    (id: number) =>
      setTasks((tasks) => tasks.filter(({ id: taskId }) => taskId !== id)),
    [setTasks]
  );

  return (
    <>
      <header>
        <ThemeSwitcher />
      </header>
      <div className="flex flex-col items-center pt-5 h-screen gap-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <h1 className="text-9xl font-black text-gray-400">TodoList</h1>
        <AddTask onAdd={handleAddTask} />
        <TasksFilter
          showCompleted={showCompleted}
          setShowCompleted={setShowCompleted}
        />
        <TasksList
          tasks={tasks}
          showCompleted={showCompleted}
          onDelete={handleDeleteTask}
          onComplete={handleCompoteTask}
        />
      </div>
    </>
  );
};

export default App;
