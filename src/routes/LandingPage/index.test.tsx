import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { renderWithRouter } from '../../utils/testUtils'
import LandingPage from './index';

test('renders page header', () => {
  renderWithRouter(<LandingPage />);
  const headerElement = screen.getByText(/art site/i);
  expect(headerElement).toBeInTheDocument();
})

test('page link navigates to home page', async () => {
  renderWithRouter(<LandingPage />);
  const link = screen.getByText('Visit site...')
  userEvent.click(link)
  setTimeout(() => {
    expect(screen.getByText(/some text/i)).toBeInTheDocument()
  }, 2000)
})
