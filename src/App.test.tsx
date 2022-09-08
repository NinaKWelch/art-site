import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithRouter } from './utils/testUtils';
import App from './App';

const artist = {
  id: 2,
  firstName: 'mary',
  lastName: 'smith',
  nameUrl: 'mary-smith',
}

const artistWithPortfolio = {
  id: 1,
  firstName: 'john',
  lastName: 'doe',
  nameUrl: 'john-doe',
  portfolio: [
    {
      id: 100,
      category: {
        id: 10,
        name: 'painting',
      },
      name: 'painting 1000',
      image: 'painting 1000 img',
      description: 'painting 1000 description',
    },
    {
      id: 200,
      category: {
        id: 20,
        name: 'drawing',
      },
      name: 'drawing 2000',
      image: 'drawing 2000 img',
      description: 'drawing 2000 description',
    },
  ]
}

test('artist page displays artist name as header', () => {
  renderWithRouter(<App />, { route: `/${artist.nameUrl}` });

  const headerElement = screen.getByText(/mary smith/i);
  expect(headerElement).toBeInTheDocument();
});

test('artist admin page displays artist name as header', () => {
  renderWithRouter(<App />, { route: `/${artist.nameUrl}/admin` });

  const headerElement = screen.getByText(/mary smith/i);
  expect(headerElement).toBeInTheDocument();
});

test('if artist has no portfolio, artist portfolio page displays an error page', () => {
  renderWithRouter(<App />, { route: `/${artist.nameUrl}/portfolio` });

  const headerElement = screen.getByText(/not found/i);
  expect(headerElement).toBeInTheDocument();
});

test('if artist has a portfolio, artist portfolio page displays artist name as header', () => {
  renderWithRouter(<App />, { route: `/${artistWithPortfolio.nameUrl}/portfolio` });

  const headerElement = screen.getByText(/john doe/i);
  expect(headerElement).toBeInTheDocument();
});

test('if artist has no portfolio, artist portfolio page category displays an error page', () => {
  renderWithRouter(<App />, { route: `/${artist.nameUrl}/portfolio/painting` });

  const headerElement = screen.getByText(/not found/i);
  expect(headerElement).toBeInTheDocument();
});

test('if artist has a portfolio, artist portfolio page category displays artist name as header', () => {
  renderWithRouter(<App />, { route: `/${artistWithPortfolio.nameUrl}/portfolio/${artistWithPortfolio.portfolio[0].category.name}` });

  const headerElement = screen.getByText(/john doe/i);
  expect(headerElement).toBeInTheDocument();
});

test('non-existent artist page displays an error page', () => {
  renderWithRouter(<App />, { route: '/non-route' });

  expect(screen.getByText(/not found/i)).toBeInTheDocument();
})

test('non-existent artist portfolio page displays an error page', () => {
  renderWithRouter(<App />, { route: '/non-route/portfolio' });

  expect(screen.getByText(/not found/i)).toBeInTheDocument();
})
