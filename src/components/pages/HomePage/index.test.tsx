import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './index';

test('renders page header', () => {
  render(<HomePage />);
  const headerElement = screen.getByText(/home/i);
  expect(headerElement).toBeInTheDocument();
});
