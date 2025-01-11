import { FC } from 'react';
import { ShowCompleted } from '../App';

interface Props {
  showCompleted: ShowCompleted;
  setShowCompleted: (value: ShowCompleted) => void;
}

export const TasksFilter: FC<Props> = ({ setShowCompleted, showCompleted }) => (
  <fieldset className="flex flex-row gap-2 justify-around border-dashed border-2 border-gray-300 rounded-md min-w-96 p-7">
    <legend>Show tasks</legend>

    <div>
      <input
        id="All"
        type="radio"
        name="All"
        value="All"
        checked={showCompleted === 'all'}
        aria-checked={showCompleted === 'all'}
        onClick={() => setShowCompleted('all')}
        className=""
      />
      <label className="ml-1" htmlFor="All">
        All
      </label>
    </div>

    <div>
      <input
        id="Complete"
        type="radio"
        name="Complete"
        value="Complete"
        checked={showCompleted == 'completed'}
        aria-checked={showCompleted == 'completed'}
        onClick={() => setShowCompleted('completed')}
      />
      <label htmlFor="Complete" className="ml-1">
        Complete
      </label>
    </div>

    <div>
      <input
        id="Incomplete"
        type="radio"
        name="Incomplete"
        value="Incomplete"
        checked={showCompleted === 'uncompleted'}
        aria-checked={showCompleted === 'uncompleted'}
        onClick={() => setShowCompleted('uncompleted')}
      />
      <label className="ml-1" htmlFor="Incomplete">
        Incomplete
      </label>
    </div>
  </fieldset>
);
