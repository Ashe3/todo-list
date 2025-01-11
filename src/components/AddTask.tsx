import { useState } from 'react';

export const AddTask = () => {
  const [inputState, setInputState] = useState<string>('');

  return (
    <div>
      <input
        type="text"
        value={inputState}
        onChange={(e) => setInputState(e.target.value)}
        className="border border-gray-300 rounded-md p-2 outline-none"
      />
      <button
        disabled={!inputState.length}
        onClick={() => console.log(inputState)}
        className="bg-blue-500 text-white p-2 rounded-md ml-2 hover:bg-blue-600 disabled:bg-blue-300 disabled:pointer-events-none"
      >
        Add Task
      </button>
    </div>
  );
};
