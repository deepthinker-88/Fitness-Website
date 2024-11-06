import React from "react";
import "./WorkOutProgrammesPage.css";
import BackToHomePageButton from "../BackToHomePageButton/BackToHomePageButton";
import upperBody from "../../images/upper_body.png";
import performance from "../../images/sports_performance.png";
import fullBody from "../../images/full_body.png";
import { useState } from "react";
export default function WorkOutProgrammesPage(props) {
  const [showStrengthAndMuscleProgrammes, setShowStrengthAndMuscleProgrammes] = useState(false);
  const [showPerformanceProgrammes, setShowPerformanceProgrammes] = useState(false);
  const [showWeightLossProgrammes, setShowWeightLossProgrammes] =useState(false);

  const handleGetStrengthAndMuscleProgrammes = () => {
    setShowStrengthAndMuscleProgrammes(true);
    setTimeout(() => {
      setShowStrengthAndMuscleProgrammes(false);
    }, 6000);
  };

  const handleGetPerformanceProgrammes = () => {
    setShowPerformanceProgrammes(true);
    setTimeout(() => {
      setShowPerformanceProgrammes(false);
    }, 6000);
  };

  const handleGetWeightLossProgammes = () => {
    setShowWeightLossProgrammes(true);
    setTimeout(() => {
      setShowWeightLossProgrammes(false);
    }, 6000);
  };
  return (
    <div className="content">
      <header className="navbar-workoutprogrammes-page">
        <BackToHomePageButton />
      </header>
      <h1 className="font">{props.title}</h1>
      <br></br>
      <h2 className="workout-text">
        click below to see some of our popular workout programmes
      </h2>
      <br></br>
      <p className="workout-text">Strength & Muscle Programmes</p>
      <button onClick={handleGetStrengthAndMuscleProgrammes}>
      <div>
        <img className="img" src={upperBody} alt="Upper Body" />
        </div>
      </button>
      {showStrengthAndMuscleProgrammes && (
        <section>
          <p className="workout-text">Target your abs & core in 28 days</p>
          <p className="workout-text"> Chest and Back Workout for Mass</p>
          <p className="workout-text">Biceps & Triceps Workouts for Bigger Arms
          </p>
        </section>
      )}
      <br></br>
      <br></br>
      <br></br>

      <p className="workout-text">Sports & Performance Programmes</p>
      <div>
      <button onClick={handleGetPerformanceProgrammes}>
        <img className="img" src={performance} alt="Lower Body" />
      </button>
      </div>
      {showPerformanceProgrammes && (
        <section>
          <p className="workout-text"> Kettlebell Workouts</p>
          <p className="workout-text">Cardio Conditioning</p>
          <p className="workout-text">Battle Rope Exercises</p>
        </section>
      )}
      <br></br>
      <br></br>
      <br></br>
      <p className="workout-text">Weight Loss Programmes</p>
      <div>
      <button onClick={handleGetWeightLossProgammes}>
        <img className="img" src={fullBody} alt=" Full Body Workout" />
      </button>
      </div>
      {showWeightLossProgrammes && (
        <section>
          <p className="workout-text">High-intensity Interval Training HIIT</p>
          <p className="workout-text">Burpees</p>
          <p className="workout-text">Deadlifts</p>
        </section>
      )}
    </div>
  );
}
