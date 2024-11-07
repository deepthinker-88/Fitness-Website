import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import SignInLink from "./SignInLink";
import { BrowserRouter } from "react-router-dom";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

test("Once user clicks on Sign In Link it navigates them to User Profile Page", () => {
  render(
    <BrowserRouter>
      <SignInLink />
    </BrowserRouter>
  );

  const signInLink = screen.getByRole("link", { name: /sign in/i });
  user.click(signInLink);
  expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
  expect(mockedUsedNavigate).toHaveBeenCalledWith("/user-profile");
});
