import React from "react";
import {useNavigate} from "react-router-dom";


export default function SignUpButton() {
  const navigate = useNavigate();
  
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
