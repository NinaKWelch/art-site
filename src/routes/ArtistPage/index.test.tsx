import React from 'react';
import { /*render,*/ screen } from '@testing-library/react';
import { renderWithRouter } from '../../utils/testUtils';
import App from '../../App';
//import ArtistPage from './index';

test('renders page header', () => {
  renderWithRouter(<App/>, { route: '/john-doe'});
  const headerElement = screen.getByText(/john doe/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders page subheader', () => {
  renderWithRouter(<App/>, { route: '/john-doe'});
  const subHeaderElement = screen.getByText(/bio/i);
  expect(subHeaderElement).toBeInTheDocument();
});