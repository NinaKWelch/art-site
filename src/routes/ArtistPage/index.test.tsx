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

test('renders page header', () => {
  renderWithRouter(<App/>, { route: `/${artist.nameUrl}`});
  const headerElement = screen.getByText(/mary smith/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders page subheader', () => {
  renderWithRouter(<App/>, { route: `/${artist.nameUrl}`});
  const subheaderElement = screen.getByText(/bio/i);
  expect(subheaderElement).toBeInTheDocument();
});