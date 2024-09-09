import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the landing page', () => {
  render(<App />);
  const textElements = screen.getAllByText(/Functional Fitness/i);
  const value = 'Functional Fitness';
  expect(textElements.some(el => el.textContent.includes(value))).toBe(true);
});

test('Sign Up Button appears and is visible on the same page',() => {
  render(<App />)
  const signUpButton = screen.getByRole('button',{name:/sign up/i})
  expect(signUpButton).toBeVisible();
  expect(signUpButton).toBeInTheDocument();
});


test('Sign In Button appears and is visible on the page', () => {
  render(<App />)
  const signInButton = screen.getByRole('button',{name:/sign in/i});
  expect(signInButton).toBeVisible();
  expect(signInButton).toBeInTheDocument();
});

test('Workout Programmes Button appears and is visible on the page',() => {
  render(<App />)
  const workoutProgrammesButton = screen.getByRole('button',{name:/workout programmes/i})
  expect(workoutProgrammesButton).toBeVisible();
  expect(workoutProgrammesButton).toBeInTheDocument();
});

test('Workouts Button appears and is visible on the page', () => {
  render(<App />)
  const workoutButton = screen.getByRole('button',{name:/workouts/i})
  expect(workoutButton).toBeVisible();
  expect(workoutButton).toBeInTheDocument();
});

test('Healthy Living Button appears and is visible on the page',()=>{
  render(<App />)
  const healthyLivingButton = screen.getByRole('button',{name:/healthy living/i})
  expect(healthyLivingButton).toBeVisible();
  expect(healthyLivingButton).toBeInTheDocument();
});
