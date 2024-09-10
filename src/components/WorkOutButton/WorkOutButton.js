import React from "react";
import { useNavigate } from "react-router-dom";

export default function WorkOutButton() {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("Workout button has been clicked");
  };

  const goToWorkoutPage = () =>{
    navigate('/workout-programmes')
  }

  return (
    <div className="button-container">
      <button className="button-container" onClick={handleClick}>
        Workouts
      </button>
    </div>
  );
}
