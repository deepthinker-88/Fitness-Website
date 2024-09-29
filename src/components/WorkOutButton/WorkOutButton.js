import React from "react";
import { useNavigate } from "react-router-dom";

export default function WorkOutButton() {
  const navigate = useNavigate();

  const goToWorkoutsPage = () => {
    navigate("/workouts");
  };

  return (
    <div>
      <button
        className="button-container"
        onClick={goToWorkoutsPage}
      >
        Workouts
      </button>
    </div>
  );
}
