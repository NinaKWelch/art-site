import React from 'react';
import { render, screen } from '@testing-library/react';
import LandingPage from './index';

test('renders page header', () => {
  render(<LandingPage />);
  const headerElement = screen.getByText(/art site/i);
  expect(headerElement).toBeInTheDocument();
});
