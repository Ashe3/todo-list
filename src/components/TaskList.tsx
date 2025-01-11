import { FC } from 'react';
import { ShowCompleted, Task } from '../App';
import { motion, AnimatePresence } from 'framer-motion';

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
  <motion.ul
    className="w-full pl-32 pr-32"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <AnimatePresence initial={false}>
      {tasks
        .filter(
          ({ isCompleted }) =>
            showCompleted === 'all' ||
            isCompleted === (showCompleted === 'completed')
        )
        .reverse()
        .map(({ text, id, isCompleted }) => (
          <motion.li
            key={`task-${id}`}
            className={`flex items-center justify-between gap-4 p-4  m-1 rounded-md transition-colors duration-500 ${
              isCompleted
                ? 'bg-green-100 dark:bg-green-800'
                : 'bg-blue-100 dark:bg-blue-800'
            }`}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5, backgroundColor: { duration: 0.3 } }}
            layout
          >
            <input
              aria-checked={isCompleted}
              checked={isCompleted}
              type="checkbox"
              className="h-5 w-5 scale-150 ml-2"
              onChange={() => onComplete(id)}
            />
            <span style={{ maxWidth: '65%' }} className="break-words ">
              {text}
            </span>
            <button
              aria-label="Delete Task"
              className="rounded-md bg-red-500 text-white p-2"
              onClick={() => onDelete(id)}
            >
              Delete
            </button>
          </motion.li>
        ))}
    </AnimatePresence>
  </motion.ul>
);
