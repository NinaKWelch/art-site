import React from 'react';
import { render, screen } from '@testing-library/react';
import PortfolioPage from './index';

test('renders page header', () => {
  render(<PortfolioPage />);
  const headerElement = screen.getByText(/portfolio/i);
  expect(headerElement).toBeInTheDocument();
});