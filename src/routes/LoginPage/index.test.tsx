import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginPage from './index';

test('renders page header', () => {
  render(<LoginPage />);
  const headerElement = screen.getByText(/login/i, { selector: 'h2' });
  expect(headerElement).toBeInTheDocument();
});

test('correctly filled form is sent and inputs cleared', () => {
  render(<LoginPage />);
  const email = screen.getByLabelText(/email/i)
  const password = screen.getByLabelText(/password/i)
  const submitButton = screen.getByText(/login/i, { selector: 'button' })
  userEvent.type(email, 'john.doe@art-site.com')
  userEvent.type(password, 'password')
  userEvent.click(submitButton)
  expect(email).toHaveValue('')
  expect(password).toHaveValue('')
});
