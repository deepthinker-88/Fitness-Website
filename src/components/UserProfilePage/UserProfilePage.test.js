import react from 'react';
import {screen,render} from  "@testing-library/react";
import {user} from "@testing-library/user-event";
import { BrowserRouter } from 'react-router-dom';
import UserProfile from './UserProfilePage'

test('Once user is signed in, that their username is displayed',()=> {
    render(<BrowserRouter>
    <UserProfile />
    </BrowserRouter>)

 
})
