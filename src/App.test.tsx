import React from 'react';
import { screen } from '@testing-library/react';
//import userEvent from '@testing-library/user-event';
import { renderWithRouter } from './utils/testUtils';
import App from './App';


test('non-existent route displays an error page', () => {
  renderWithRouter(<App />, { route: '/non-route/non-route' })

  expect(screen.getByText(/not found/i)).toBeInTheDocument()
})
