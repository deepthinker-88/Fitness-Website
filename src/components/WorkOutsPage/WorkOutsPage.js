import React from "react";
import { useState } from "react";
import "./WorkOutsPage.css";
import BackToHomePageButton from "../BackToHomePageButton/BackToHomePageButton";
import upper from "../../images/upper.png";
import lowerBody from "../../images/lower_body.png";
import fullBody from "../../images/fullBody.png";

export default function WorkOutsPage(props) {
  const [showUpperBodyWorkout, setShowUpperBodyWorkout] = useState(false);
  const [showLowerBodyWorkout, setShowLowerBodyWorkout] = useState(false);
  const [showFullBodyWorkout, setShowFullBodyWorkout] = useState(false);

  const handleGetUpperBodyWorkout = () => {
    setShowUpperBodyWorkout(true);
    setTimeout(() => {
      setShowUpperBodyWorkout(false);
    }, 5000);
  };

  const handleGetLowerBodyWorkout = () => {
    setShowLowerBodyWorkout(true);
    setTimeout(() => {
      setShowLowerBodyWorkout(false);
    }, 5000);
  };

  const handleGetFullBodyWorkout = () => {
    setShowFullBodyWorkout(true);
    setTimeout(() => {
      setShowFullBodyWorkout(false);
    }, 5000);
  };

  return (
    <div className="content">
      <header className="navbar-workouts-page">
        <BackToHomePageButton />
      </header>
      <div className="container">
        <h1 className="text">{props.title}</h1>
        <h2 className="text">
          Click on one of our Workouts to see some of our most popular exercises
        </h2>

        <p className="workout-text">Upper Body Workouts</p>
        <div>
          <button onClick={handleGetUpperBodyWorkout}>
            <img className="img" src={upper} alt="Upper Body Workout" />
          </button>
        </div>
        {showUpperBodyWorkout && (
          <section>
            <p className="workout-text">3 sets of 12 Barbell Bench Press</p>
            <p className="workout-text">3 sets of 12 Incline Dumbell Press</p>
            <p className="workout-text">3 sets of 12 Cable Crossover </p>
          </section>
        )}
      </div>
      <br></br>
      <div className="container">
        <br></br>
        <br></br>
        <p className="workout-text"> Lower Body Workouts </p>
        <div>
          <button onClick={handleGetLowerBodyWorkout}>
            <img className="img" src={lowerBody} alt="Lower Body Workout" />
          </button>
        </div>
        {showLowerBodyWorkout && (
          <section>
            <p className="workout-text"> 3 sets of 12 --- Squats</p>
            <p className="workout-text">
              {" "}
              3 sets of 12 ---Bulgarian Split Squat
            </p>
            <p className="workout-text"> 3 sets of 12 --- Romanian Deadlift</p>
          </section>
        )}

        {showLowerBodyWorkout && <p></p>}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="container">
        <p className="workout-text"> Full Body Workouts</p>
        <div>
          <button onClick={handleGetFullBodyWorkout}>
            <img className="img" src={fullBody} alt="full body workouts" />
          </button>
        </div>
        {showFullBodyWorkout && (
          <p className="workout-text">20 Minute HIIT Dumbell Workout</p>
        )}
        {showFullBodyWorkout && (
          <p className="workout-text"> 3 sets of 12 --- Deadlift</p>
        )}
        {showFullBodyWorkout && (
          <p className="workout-text">
            {" "}
            Kettlebell Swings --- 30 seconds (15 seconds rest) --- Repeat 10
            times
          </p>
        )}
      </div>
      <br></br>
    </div>
  );
}
