import React from "react";
import { useNavigate } from "react-router-dom";

export default function HealthyButton() {
  const navigate = useNavigate();
  const handleClicked = () => {
    console.log("Healthy Button has been clicked!");
  };

  const goToHealthyLivingPage = () => {
    navigate("/healthy_living");
  };
  return (
    <div>
      <button
        className="button-container"
        onClick={() => {
          goToHealthyLivingPage();
          handleClicked();
        }}
      >
        Healthy Living
      </button>
    </div>
  );
}
