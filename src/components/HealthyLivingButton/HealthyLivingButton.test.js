import { screen, render } from "@testing-library/react";
import HealthyLivingButton from "./HealthyLivingButton";
import user from '@testing-library/user-event'
import { BrowserRouter } from "react-router-dom";
const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockedUsedNavigate,
  }));

test("Once user clicks on the healthy living button, it navigates user to health living page", () => {
  render(
    <BrowserRouter>
      <HealthyLivingButton />
    </BrowserRouter>
  );
  const button = screen.getByRole('button',{name:/healthy living/i});
  user.click(button);
  expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
  expect(mockedUsedNavigate).toHaveBeenCalledWith('/healthy_living')
});
