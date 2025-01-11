import React from 'react';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { AddTask } from '../src/components/AddTask';

describe('AddTask', () => {
  test('should add a new task', () => {
    let task: string;
    render(<AddTask onAdd={(newTask) => (task = newTask)} />);

    const input = screen.getByPlaceholderText('Add task here...');
    const button = screen.getByText('Add Task');

    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.click(button);

    waitFor(() => {
      expect(task).toHaveValue('New Task');
    });
  });
});
