import { render, screen } from '@testing-library/react';
import App from './App';

test('Should show text Functional Fitness on homepage', () => {
  render(<App />);
  const textElements = screen.getAllByText(/Functional Fitness/i);
  const value = 'Functional Fitness';
  expect(textElements.some(el => el.textContent.includes(value))).toBe(true);
});
