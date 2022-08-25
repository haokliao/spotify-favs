import React from 'react';
import { render, screen } from '@testing-library/react';
import SpotFavs from './SpotFavs';

test('renders learn react link', () => {
  render(<SpotFavs />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
