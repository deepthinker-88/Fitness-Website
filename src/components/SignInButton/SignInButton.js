import React from "react";
import { useNavigate } from "react-router-dom";

export default function SignInButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/sign-in");
    console.log("Sign In Button has been clicked");
  };

  return (
    <button className="sign-in-button" onClick={handleClick}>
      Sign In
    </button>
  );
}
