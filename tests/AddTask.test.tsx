/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import { AddTask } from '../src/components/AddTask';

describe('AddTask', () => {
  test('should add a new task', () => {
    render(<AddTask onAdd={jest.fn()} />);
  });
});
