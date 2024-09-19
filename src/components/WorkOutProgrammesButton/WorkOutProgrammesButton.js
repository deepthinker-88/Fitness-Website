import React from "react";
import { useNavigate } from "react-router-dom";

export default function WorkOutProgrammesButton() {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("Programme button has been clicked");
  };

  const goToWorkoutProgrammesButton = () => {
    navigate("/workout-programmes");
  };

  return (
    <div>
      <button
        className="button-container"
        onClick={() => {
          handleClick();
          goToWorkoutProgrammesButton();
        }}
      >
        Workout Programmes
      </button>
    </div>
  );
}
