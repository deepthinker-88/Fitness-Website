import React from "react";
import { useNavigate } from "react-router-dom";

export default function WorkOutsLink() {
  const navigate = useNavigate();

  const handleGoToWorkoutsPage = () => {
    navigate("/workouts");
  };

  return (
      < a href="/workouts"
        onClick={handleGoToWorkoutsPage}
      >
        Workouts
      </a>
    
  );
}
