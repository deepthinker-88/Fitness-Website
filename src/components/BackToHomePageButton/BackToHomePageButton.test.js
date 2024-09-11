import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import BackToHomePageButton from "./BackToHomePageButton";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

test("Once user clicks on Back to Home Page Buttonm it navigates user back to the homepage", () => {
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
  expect(mockedUsedNavigate).toHaveBeenCalledWith("/");;
});
