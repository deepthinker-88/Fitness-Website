import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the landing page', () => {
  render(<App />);
  const textElements = screen.getAllByText(/Functional Fitness/i);
  const value = 'Functional Fitness';
  expect(textElements.some(el => el.textContent.includes(value))).toBe(true);
});
