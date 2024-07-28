import React from "react";

export default function WorkOutButton() {
  const handleClick = () => {
    console.log("Workout button has been clicked");
  };

  return (
    <div className="button-container">
      <button className="button-container" onClick={handleClick}>
        Workouts
      </button>
    </div>
  );
}
