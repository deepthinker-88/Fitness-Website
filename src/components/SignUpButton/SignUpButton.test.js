import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import SignUpButton from "./SignUpButton";
import { BrowserRouter } from "react-router-dom";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

test("Once user clicks on Sign Up Button it navigates them to Sign Up Page", () => {
  render(
    <BrowserRouter>
      <SignUpButton />
    </BrowserRouter>
  );

  const button = screen.getByRole("button", { name: /sign up/i });
  user.click(button);
  expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
  expect(mockedUsedNavigate).toHaveBeenCalledWith("/sign-up");
});
