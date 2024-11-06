import React from "react";
import { useNavigate } from "react-router-dom";

export default function SignUpLink() {
  const navigate = useNavigate();

  const goToSignUpPage = () => {
    navigate("/sign-up");
  };
  return (
    <a href = "/sign-up" onClick={goToSignUpPage}>
      Sign Up
    
    </a>
  );
}
