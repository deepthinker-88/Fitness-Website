import React from "react";
import { useNavigate } from "react-router-dom";

export default function SignInLink() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/user-profile");
  };

  return (
    <a href="/sign-in" onClick={handleClick}>
      Sign In
    </a>
  );
}
