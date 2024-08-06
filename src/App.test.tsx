import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const element = screen.getByText(/A completely decentralised platform for bidding coming soon/i);
  expect(element).toBeInTheDocument();
});
