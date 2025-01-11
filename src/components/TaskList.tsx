import { FC } from 'react';
import { Task } from '../App';

interface Props {
  tasks: Task[];
  onDelete: (index: number) => void;
  onComplete: (index: number) => void;
}

export const TasksList: FC<Props> = ({ tasks }) => {
  return (
    <div className="w-1/3">
      {tasks.map(({ text, id }) => (
        <div
          key={`task-${id}`}
          className="flex items-center justify-between gap-4 p-4 bg-blue-100 m-1 rounded-md"
        >
          <input type="checkbox" className="size-5 scale-150" />
          <span>{text}</span>
          <button className="rounded-md bg-red-500 text-white p-2">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};
