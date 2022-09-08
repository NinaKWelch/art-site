import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithRouter } from './utils/testUtils';
import App from './App';

test('artist page displays artist name as header', () => {
  renderWithRouter(<App />, { route: '/john-doe' });

  const headerElement = screen.getByText(/john doe/i);
  expect(headerElement).toBeInTheDocument();
});

test('non-existent artist page displays an error page', () => {
  renderWithRouter(<App />, { route: '/non-route' });

  expect(screen.getByText(/not found/i)).toBeInTheDocument();
})
