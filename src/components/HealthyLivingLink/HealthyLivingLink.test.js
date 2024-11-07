import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import HealthyLivingPageLink from "./HealthyLivingLink";
import { BrowserRouter } from "react-router-dom";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

test("Once user clicks on Healthy Living Link it navigates them to Healthy Living Page", () => {
  render(
    <BrowserRouter>
      <HealthyLivingPageLink />
    </BrowserRouter>
  );

  const healthyLivingPageLink = screen.getByRole("link", { name: /healthy-living/i });
  user.click(healthyLivingPageLink);
  expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
  expect(mockedUsedNavigate).toHaveBeenCalledWith("/healthy-living");
});
