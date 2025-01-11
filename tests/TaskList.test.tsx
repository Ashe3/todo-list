import React from 'react';
import { TasksList } from '../src/components/TaskList';

import { fireEvent, render, screen } from '@testing-library/react';

const tasks = [
  { id: 1, text: 'Task 1', isCompleted: false },
  { id: 2, text: 'Task 2', isCompleted: true },
];

describe('TaskList', () => {
  test('should render a list of tasks', () => {
    render(
      <TasksList
        tasks={tasks}
        showCompleted="all"
        onDelete={jest.fn()}
        onComplete={jest.fn()}
      />
    );

    expect(document.querySelectorAll('li')).toHaveLength(2);
  });

  test('user should be able to delete a task', () => {
    const onDelete = jest.fn();
    render(
      <TasksList
        tasks={tasks}
        showCompleted="all"
        onDelete={onDelete}
        onComplete={jest.fn()}
      />
    );

    const deleteButton = screen.getAllByText('Delete')[0];
    fireEvent.click(deleteButton);

    expect(onDelete).toHaveBeenCalled();
  });

  test('user should be able to complete a task', () => {
    const onComplete = jest.fn();
    render(
      <TasksList
        tasks={tasks}
        showCompleted="all"
        onDelete={jest.fn()}
        onComplete={onComplete}
      />
    );

    const checkbox = screen.getAllByRole('checkbox')[0];
    fireEvent.click(checkbox);

    expect(onComplete).toHaveBeenCalled();
  });
});
