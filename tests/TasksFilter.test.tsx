import React from 'react';
import { TasksFilter } from '../src/components/TasksFilter';

import { fireEvent, render } from '@testing-library/react';

describe('TasksFilter', () => {
  test('should render a list of tasks', () => {
    render(<TasksFilter showCompleted="all" setShowCompleted={jest.fn()} />);

    expect(document.querySelector('legend')).toBeInTheDocument();
  });

  test('user should be able to filter tasks', () => {
    const setShowCompleted = jest.fn();
    render(
      <TasksFilter showCompleted="all" setShowCompleted={setShowCompleted} />
    );

    const completeRadio = document.getElementById('Complete')!;
    const incompleteRadio = document.getElementById('Incomplete')!;

    fireEvent.click(completeRadio);
    fireEvent.click(incompleteRadio);

    expect(setShowCompleted).toHaveBeenCalledTimes(2);
  });
});
