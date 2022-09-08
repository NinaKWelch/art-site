import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { renderWithRouter } from '../../utils/testUtils'
import { categories } from '../../utils/mockUtils'
import PortfolioPage from './index';

test('renders page header', () => {
  renderWithRouter(<PortfolioPage />);
  const headerElement = screen.getByText(/portfolio/i);
  expect(headerElement).toBeInTheDocument();
});

test('navigation renders section content', () => {
  renderWithRouter(<PortfolioPage />);
  const section = categories[0].name
  const link = screen.getByText(section)
  userEvent.click(link)
  setTimeout(() => {
    expect(screen.getByText(section)).toBeInTheDocument()
  }, 2000)
});