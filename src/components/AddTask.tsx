import { FC, FormEvent, useState } from 'react';

interface Props {
  onAdd: (text: string) => void;
}

export const AddTask: FC<Props> = ({ onAdd }) => {
  const [inputState, setInputState] = useState<string>('');

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAdd(inputState);
    setInputState('');
  };

  return (
    <form
      role="form"
      aria-required="true"
      onSubmit={handleFormSubmit}
      className="flex gap-2"
    >
      <input
        aria-label="Task description"
        type="text"
        value={inputState}
        placeholder="Add task here..."
        onChange={(e) => setInputState(e.target.value)}
        className="border border-gray-300 rounded-md p-2 outline-none dark:text-black"
      />
      <button
        aria-label="Add new task"
        disabled={!inputState.length}
        className="bg-blue-500 text-white p-2 rounded-md ml-2 hover:bg-blue-600 disabled:bg-blue-300 disabled:pointer-events-none"
      >
        Add Task
      </button>
    </form>
  );
};
