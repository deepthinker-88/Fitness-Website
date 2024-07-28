import React from "react";
import { BrowserRouter, Routes, Route,Link, useNavigate } from "react-router-dom";
import { useState } from "react";


export default function SignInButton() {

  const navigate = useNavigate()


  const handleClick = () => {
    navigate("/sign-in");
    console.log("Sign In Button has been clicked");
    
  };

  return (
    
    //<div className="sign-in-button">
      <button className="sign-in-button" onClick={handleClick}>
        Sign In
      </button>
    //</div>
  );
}
