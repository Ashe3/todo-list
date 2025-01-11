import { useState } from 'react';

export const AddTask = () => {
  const [inputState, setInputState] = useState<string>('');

  return (
    <div>
      <input
        type="text"
        value={inputState}
        onChange={(e) => setInputState(e.target.value)}
      />
      <button
        disabled={!inputState.length}
        onClick={() => console.log(inputState)}
      >
        Add Task
      </button>
    </div>
  );
};
