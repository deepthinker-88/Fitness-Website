import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Signup from "./SignUpPage";
import BackToHomePageButton from "../BackToHomePageButton/BackToHomePageButton";
const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

test("Displays placeholder and updates First Name input field with user-provided text", () => {
  render(
    <BrowserRouter>
      <Signup />
    </BrowserRouter>
  );
  const element = screen.getByPlaceholderText(/enter first name/i);
  expect(element).toBeInTheDocument();
  user.click(element);
  user.type(element, "example");
  expect(element.value).toBe("example");
});

test("Displays placeholder and updates Last Name input field with user-provided text", () => {
  render(
    <BrowserRouter>
      <Signup />
    </BrowserRouter>
  );

  const element = screen.getByPlaceholderText(/enter last name/i);
  user.click(element);
  user.type(element, "last name");
  expect(element.value).toBe("last name");
});

test("Displays placeholder and updates Enter Email input field with user-provided text", () => {
  render(
    <BrowserRouter>
      <Signup />
    </BrowserRouter>
  );
  const element = screen.getByPlaceholderText(/enter email/i);
  user.click(element);
  user.type(element, "test@mail.com");
  expect(element.value).toBe("test@mail.com");
});

test("Displays placeholder and updates Enter Password input field with user-provided text", () => {
  render(
    <BrowserRouter>
      <Signup />
    </BrowserRouter>
  );

  const element = screen.getByPlaceholderText(/enter password/i);
  user.click(element);
  user.type(element, "password123");
  expect(element.value).toBe("password123");
});

test("Displays placeholder and updates Confirm Password input field with user-provided text", () => {
  render(
    <BrowserRouter>
      <Signup />
    </BrowserRouter>
  );

  const element = screen.getByPlaceholderText(/confirm password/i);
  user.click(element);
  user.type(element, "password123");
  expect(element.value).toBe("password123");
});

test("Once user clicks on Back to Home Page Button on Sign Up Page it navigates user back to the homepage", () => {
  render(
    <BrowserRouter>
      <BackToHomePageButton />
    </BrowserRouter>
  );

  const button = screen.getByRole("button", {
    name: /go back to homepage/i,
  });
  user.click(button);
  expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
  expect(mockedUsedNavigate).toHaveBeenCalledWith("/");
});
