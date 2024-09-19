import React from "react";
import { useNavigate } from "react-router-dom";

export default function HealthyButton() {
  const navigate = useNavigate();
  const handleClicked = () => {
  };

  const goToHealthyLivingPage = () => {
    navigate("/healthy-living");
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
