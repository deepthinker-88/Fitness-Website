import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the landing page', () => {
  render(<App />);
  const textElements = screen.getAllByText(/Functional Fitness/i);
  const value = 'Functional Fitness';
  expect(textElements.some(el => el.textContent.includes(value))).toBe(true);
});

test('Sign Up Link appears and is visible on the same page',() => {
  render(<App />)
  const signUpLink = screen.getByRole('link',{name:/sign up/i})
  expect(signUpLink).toBeVisible();
  expect(signUpLink).toBeInTheDocument();
});


test('Sign In Link appears and is visible on the page', () => {
  render(<App />)
  const signInLink = screen.getByRole('link',{name:/sign in/i});
  expect(signInLink).toBeVisible();
  expect(signInLink).toBeInTheDocument();
});

test('Workout Programmes Link and is visible on the page',() => {
  render(<App />)
  const workoutProgrammesLink = screen.getByRole('link',{name:/workout programmes/i})
  expect(workoutProgrammesLink).toBeVisible();
  expect(workoutProgrammesLink).toBeInTheDocument();
});

test('Workouts Link appears and is visible on the page', () => {
  render(<App />)
  const workoutsLink = screen.getByRole('link',{name:/workouts/i})
  expect(workoutsLink).toBeVisible();
  expect(workoutsLink).toBeInTheDocument();
});

test('Healthy Living Link appears and is visible on the page',()=>{
  render(<App />)
  const healthyLivingLink = screen.getByRole('link',{name:/healthy living/i})
  expect(healthyLivingLink).toBeVisible();
  expect(healthyLivingLink).toBeInTheDocument();
});
