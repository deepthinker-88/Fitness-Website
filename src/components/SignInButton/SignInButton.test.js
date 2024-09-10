import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import SignInButton from "./SignInButton";
import { BrowserRouter } from "react-router-dom";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

test("Once user clicks on Sign In Button it navigates them to Sign In Page", () => {
  render(
    <BrowserRouter>
      <SignInButton />
    </BrowserRouter>
  );

  const signInButton = screen.getByRole("button", { name: /sign in/i });
  user.click(signInButton);
  expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
  expect(mockedUsedNavigate).toHaveBeenCalledWith("/sign-in");
});
