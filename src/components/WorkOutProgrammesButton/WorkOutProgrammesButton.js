import React from "react";
import { useNavigate } from "react-router-dom";

export default function WorkOutProgrammesLink() {
  const navigate = useNavigate();

  const handleGoToWorkoutProgrammes = () => {
    navigate("/workout-programmes");
  };

  return (
    <a href="/workout-programmes" onClick={handleGoToWorkoutProgrammes}>
      Workout Programmes
    </a>
  );
}
