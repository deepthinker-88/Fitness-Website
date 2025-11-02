import React from "react";
import "./UserProfilePage.css";
import { useState, useEffect } from "react";
import LogoutToHomePageButton from "../LogOut/Logout";
import UserProfileWorkout from "../UserProfileWorkOutPage/UserProfileWorkout";
import { useNavigate } from "react-router-dom";
import ProfilePictureUpload from "../ProfilePictureUpload/ProfilePictureUpload";
import Recipes from "../Recipes/Recipes"
import Footer from "../Footer/Footer"
import ConnectToWorkOutApi from "../WorkoutApi/WorkoutApi";



export default function UserProfile(props) {
  const [userEmail, setUserEmail] = useState("");
  const [currentSelection, setCurrentSelection] = useState({
    day: "",
    workout: "",
    workout_type: "",
  });
  const [isAuthenticated,setIsAuthenticated] = useState(false);
  const navigate = useNavigate();


  const [savedSelections, setSavedSelections] = useState([]);
  const [showWorkoutPlans, setShowWorkoutPlans] = useState(false);

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (email) {
      setUserEmail(email);
    }
  }, []);

  useEffect(() => {
    const pageAuthenticated = localStorage.getItem("authToken");
    if(pageAuthenticated){
      setIsAuthenticated(true)
    }else{
      setIsAuthenticated(false)
      navigate('/')

    }
  },[navigate]);

  const handleDayChange = (event) => {
    setCurrentSelection((prev) => ({ ...prev, day: event.target.value }));
  };

  const handleWorkoutChange = (event) => {
    setCurrentSelection((prev) => ({ ...prev, workout: event.target.value }));
  };

  const handleTypeOfWorkoutChange = (event) => {
    setCurrentSelection((prev) => ({
      ...prev,
      workout_type: event.target.value,
    }));
  };


  const saveSelection = () => {
    if (
      currentSelection.day &&
      currentSelection.workout &&
      currentSelection.workout_type
    ) {
      setSavedSelections((prev) => [...prev, currentSelection]);
      setCurrentSelection({ day: "", workout: "", workout_type: "" });
      setShowWorkoutPlans(true);
    }
  };
  const startNewSelection = () => {
    setCurrentSelection({ day: "", workout: "", workout_type: "" });
  };

  return (
    <div className="page">
      <header className="navbar-user-profile-page">
        <LogoutToHomePageButton />
      </header>
      <h1 className="workout-text">
        {props.title} {userEmail}
      </h1>
      <ProfilePictureUpload />
      <h2 className="workout-text">Let's start by building your custom workout plan!!</h2>

      <h3 className="workout-text">{props.day}</h3>
      <section>
      <select value={currentSelection.day} onChange={handleDayChange}>
        <option value=""></option>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
        <option value="Saturday">Saturday</option>
        <option value="Sunday">Sunday</option>
      </select>
      </section>

      <h3 className="workout-text">{props.workout}</h3>
      <section>
      <select value={currentSelection.workout} onChange={handleWorkoutChange}>
        <option value=""></option>
        <option value="Upper body Workout">Upper Body Workout</option>
        <option value="Lower body Workout">Lower Body Workout</option>
        <option value="Full Body Workout">Full Body Workout</option>
        <option value="Cardio Workout">Cardio Workout</option>
      </select>
      </section>

      <h3 className="workout-text">{props.workout_type}</h3>
      <section>
      <select
        value={currentSelection.workout_type}
        onChange={handleTypeOfWorkoutChange}
      >
        <option value=""> </option>
        <option value="Barbell Bench Press">Barbell Bench Press </option>
        <option value="Dumbell Bicep Curls">Dumbell Bicep Curls</option>
        <option value="20 mins Kettlebell Swing Workout">
          20 Mins Kettlebell Swing Workouts
        </option>
        <option value="20 Minute HIIT Workout">20 Minute HIIT Workout</option>
        <option value="Deadlifts">Deadlifts</option>
        <option value="Squats">Squats</option>
        <option value="Treadmill Runnng">Treadmill Running</option>
      </select>
      </section>
      <div>
        <br></br>
        <br></br>
      <button className="workout-text" onClick={saveSelection}>Save Workout Plan</button>
      </div>
      <div>
      <button className="workout-text"onClick=
      
      {startNewSelection}>Start New Selection</button>
      </div>
      {showWorkoutPlans && (
        <div className="saved-selections">
          <h3 className="workout-text"> Here is your Weekly Workout Plan:</h3>
          {savedSelections.map((selection, index) => (
            <UserProfileWorkout
              key={index}
              day={selection.day}
              workout={selection.workout}
              workout_type={selection.workout_type}
             
            />
          ))}
        </div>
      )}
      <ConnectToWorkOutApi />
      <div className="recipe-food--finder">
        <Recipes />
      </div>
       <Footer /> 
      </div>
      
     );
}
