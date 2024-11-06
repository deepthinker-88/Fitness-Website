import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import user from '@testing-library/user-event';
import WorkOutsLink from './WorkOutsLink'
const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));


test('User gets directed to Workouts Page when clicking on Workouts Link',()=> {
    render(<BrowserRouter>
    <WorkOutsLink />
    </BrowserRouter>)

    const workOutsLink = screen.getByRole('link',{name:/workouts/i});
    user.click(workOutsLink)
    expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/workouts');
})


