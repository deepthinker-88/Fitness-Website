import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import SignIn from "./SignInPage";
import { BrowserRouter } from "react-router-dom";

test("Displays palceholder and updates first name and email field", () => {
  render(
    <BrowserRouter>
      <SignIn />
    </BrowserRouter>
  );

  const email_element = screen.getByPlaceholderText(/please enter email/i);
  user.click(email_element);
  user.type(email_element, "email");

  const password_element = screen.getByPlaceholderText(/enter your password/i);
  user.click(password_element);
  user.type(password_element, "password");

  expect(email_element.value).toBe("email");
  expect(password_element.value).toBe("password");
});
