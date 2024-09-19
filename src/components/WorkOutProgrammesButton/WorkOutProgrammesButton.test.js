import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import user from '@testing-library/user-event';
import WorkOutProgrammesButton from './WorkOutProgrammesButton'
const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));


test('User gets directed to WorkoutProgrammes Page when clicking on Workout Programmes Button',()=> {
    render(<BrowserRouter>
    <WorkOutProgrammesButton />
    </BrowserRouter>)

    const button = screen.getByRole('button',{name:/workout programmes/i});
    user.click(button)
    expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/workout-programmes');
})
