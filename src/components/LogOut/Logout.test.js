import {render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";


import { BrowserRouter } from "react-router-dom";
import LogoutToHomePageButton from "./Logout";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockedUsedNavigate,
  }));

test( "Once user clicks on Logout Button from user profile page, it takes user back to homepage" ,() => {
    render(
        <BrowserRouter >
        < LogoutToHomePageButton />
        
        </BrowserRouter>
    )
    const logOutLink = screen.getByRole("link",{name:/logout/i})
   
    userEvent.click(logOutLink);
    expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/");


}) 





  