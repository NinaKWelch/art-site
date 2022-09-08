import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { renderWithRouter } from '../../utils/testUtils';
import App from '../../App';

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

test('renders page header', () => {
  renderWithRouter(<App/>, { route: `/${artistWithPortfolio.nameUrl}/portfolio`});
  const headerElement = screen.getByText(/john doe/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders page subheader', () => {
  renderWithRouter(<App/>, { route: `/${artistWithPortfolio.nameUrl}/portfolio`});
  const subheaderElement = screen.getByText(/portfolio/i);
  expect(subheaderElement).toBeInTheDocument();
});

test('navigation renders portfolio category if present', () => {
  renderWithRouter(<App/>, { route: `/${artistWithPortfolio.nameUrl}/portfolio`});
  const category = artistWithPortfolio.portfolio[0].category.name
  const link = screen.getByText(category)
  userEvent.click(link)
  setTimeout(() => {
    expect(screen.getByText(category)).toBeInTheDocument()
  }, 2000)
});