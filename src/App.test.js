import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the landing page', () => {
  render(<App />);
  const textElements = screen.getAllByText(/Functional Fitness/i);
  const value = 'Functional Fitness';
  expect(textElements.some(el => el.textContent.includes(value))).toBe(true);
});

test('Sign Up appears and is visible on the same page',() => {
  render(<App />)
  const signUpButton = screen.getByRole('button',{name:/sign up/i})
  expect(signUpButton).toBeVisible();
  expect(signUpButton).toBeInTheDocument();
});


test('Sign In appears and is visible on the page', () => {
  render(<App />)
  const signInButton = screen.getByRole('button',{name:/sign in/i});
  expect(signInButton).toBeVisible();
  expect(signInButton).toBeInTheDocument();
});

