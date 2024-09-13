import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import WorkoutButton from "./WorkOutButton";
import { BrowserRouter } from "react-router-dom";
const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

test("Workouts Button is visible on the screen and naviagtes user to workouts landing page", () => {
  render(
    <BrowserRouter>
      <WorkoutButton />
    </BrowserRouter>
  );
  const button = screen.getByRole("button", { name: /workouts/i });
  user.click(button);
  expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
  expect(mockedUsedNavigate).toHaveBeenCalledWith("/workouts");
});
