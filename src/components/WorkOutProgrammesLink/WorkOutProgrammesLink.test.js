import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import user from '@testing-library/user-event';
import WorkOutProgrammesLink from './WorkOutProgrammesLink'
const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));


test('User gets directed to WorkoutProgrammes Page when clicking on Workout Programmes Button',()=> {
    render(<BrowserRouter>
    <WorkOutProgrammesLink />
    </BrowserRouter>)

    const workOutProgrammesLink = screen.getByRole('link',{name:/workout programmes/i});
    user.click(workOutProgrammesLink)
    expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/workout-programmes');
})
