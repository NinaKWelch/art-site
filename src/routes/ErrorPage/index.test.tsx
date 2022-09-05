import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorPage from './index';

test('renders page header', () => {
  render(<ErrorPage />);
  const headerElement = screen.getByText(/not found/i);
  expect(headerElement).toBeInTheDocument();
});
