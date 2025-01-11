import { FC } from 'react';
import { ShowCompleted, Task } from '../App';

interface Props {
  tasks: Task[];
  showCompleted: ShowCompleted;
  onDelete: (id: number) => void;
  onComplete: (id: number) => void;
}

export const TasksList: FC<Props> = ({
  tasks,
  showCompleted,
  onDelete,
  onComplete,
}) => (
  <ul className="w-full pl-32 pr-32">
    {tasks
      .filter(
        ({ isCompleted }) =>
          showCompleted === 'all' ||
          isCompleted === (showCompleted === 'completed')
      )
      .reverse()
      .map(({ text, id, isCompleted }) => (
        <li
          key={`task-${id}`}
          className={`flex items-center justify-between gap-4 p-4 bg-blue-100 m-1 rounded-md ${
            isCompleted && 'bg-green-100'
          }`}
        >
          <input
            aria-checked={isCompleted}
            type="checkbox"
            className="h-5 w-5 scale-150 ml-2"
            onChange={() => onComplete(id)}
          />
          <span style={{ maxWidth: '65%' }} className="break-words">
            {text}
          </span>
          <button
            aria-label="Delete Task"
            className="rounded-md bg-red-500 text-white p-2"
            onClick={() => onDelete(id)}
          >
            Delete
          </button>
        </li>
      ))}
  </ul>
);
