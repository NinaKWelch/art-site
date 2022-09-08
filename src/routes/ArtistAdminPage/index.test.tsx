import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../utils/testUtils';
import App from '../../App';

const artist = {
  id: 2,
  firstName: 'mary',
  lastName: 'smith',
  nameUrl: 'mary-smith',
}

test('shows error page for unauthorised user', () => {
  renderWithRouter(<App/>, { route: `/${artist.nameUrl}/admin`});
});

test('renders page header', () => {
  renderWithRouter(<App/>, { route: `/${artist.nameUrl}/admin`});
  const headerElement = screen.getByText(/mary smith/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders page subheader', () => {
  renderWithRouter(<App/>, { route: `/${artist.nameUrl}/admin`});
  const subheaderElement = screen.getByText(/admin/i);
  expect(subheaderElement).toBeInTheDocument();
});
