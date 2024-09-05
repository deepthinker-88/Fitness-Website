import React from 'react';
import { useNavigate } from "react-router-dom";


export default function ConfirmedSignUp() {
    const navigate = useNavigate();

    const goToLoginPage=()=>{
        navigate('/sign-in')
    }
    return (
        <div>
            <h2 className='text-colour'>You have signed up please login to access your account</h2>
            <button className='sign-in-button'onClick={goToLoginPage}>Login</button>
        </div>
        
    )
}

