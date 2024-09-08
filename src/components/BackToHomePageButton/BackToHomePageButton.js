import React from "react";
import { useNavigate } from "react-router-dom";

export default function BackToHomePageButton() {
  const navigate = useNavigate();

  const backToHomePage = () => {
    navigate("/");
  };
  return (
    <button onClick={backToHomePage} className="back-to-home-button">
      Go Back To HomePage
    </button>
  );
}
