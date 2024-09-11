import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Signup from "./SignUpPage";

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
