import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";


export default function SignUpButton() {
  const navigate = useNavigate();
    console.log("Sign Up button has been clicked");
  
  const goToSignUpPage = () =>{
    navigate("/sign-up");
    
  
  }
  ;

  
  
  return (
    <button onClick={goToSignUpPage}className="sign-up-button">
      Sign Up
    </button>
    
  );

}
