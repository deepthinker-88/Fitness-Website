import react from "react";
import { useState } from "react";

function UserProfileWorkout(props) {
  return (
  <h2>You have selected {props.day} to do a {props.workout} and to do a {props.workout_type}</h2>
  );
}
export default UserProfileWorkout;
