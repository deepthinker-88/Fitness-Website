import React from "react";
import "./BackToHomePageButton.css";
import { useNavigate } from "react-router-dom";

export default function BackToHomePageButton() {
  const navigate = useNavigate();
  const handleGoBackToHomePageLink = () => {
    navigate("/");
  };
  return (
    <li className="back-to-homepage" onClick={handleGoBackToHomePageLink}>
      <a href="/">back to homepage</a>{" "}
    </li>
  );
}
