import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import SignUpLink from "./SignUpLink";
import { BrowserRouter } from "react-router-dom";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

test("Once user clicks on Sign Up Link it navigates them to Sign Up Page", () => {
  render(
    <BrowserRouter>
      <SignUpLink />
    </BrowserRouter>
  );

  const signUpLink = screen.getByRole("link", { name: /sign up/i });
  user.click(signUpLink);
  expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
  expect(mockedUsedNavigate).toHaveBeenCalledWith("/sign-up");
});
