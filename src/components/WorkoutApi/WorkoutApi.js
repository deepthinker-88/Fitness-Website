import { useState } from "react";
import React from "react";
import "./WorkoutApi.css";
export default function ConnectToWorkOutApi() {
  const [bodyPartText, setBodyPartText] = useState("");
  const bodyParts = [
    "abdominals",
    "adductors",
    "biceps",
    "calves",
    "chest",
    "forearms",
    "glutes",
    "hamstrings",
    "lats",
    "lower_back",
    "middle_back",
    "neck",
    "quadriceps",
    "traps",
    "triceps",
  ];

  const handleConnectToApi = async (e) => {
    for (let bodyPart of bodyParts) {
      if (bodyPartText === bodyPart) {
        const url = `https://api.api-ninjas.com/v1/exercises?muscle=${bodyPartText}`;
        const options = {
          headers: {
            "X-API-KEY": "tXLcol1ypySPUjamh4rsFw==g9Lj4LHJiEUJqqD8",
            "content-type": "application/json",
          },
        };

        try {
          const response = await fetch(url, options);

          const data = await response.json();
          console.log(data)
        } catch (error) {
          console.log(`Error: ${error.status}`);
        }
      }
    }
  };

  return (
    <>
      <section className="workout-api-text">
        <h2>Not happy with our stock workouts???</h2>
        <h3>
          Click below to connect to our own Api to build your own workouts
        </h3>
        <button>Click to connect to our own workouts Api</button>
      </section>
      <section className="body-text">
        <p>Enter the body part that you want an exercise for?</p>
        <input
          type="text"
          value={bodyPartText}
          onChange={(e) => setBodyPartText(e.target.value)}
        ></input>
        <button onClick={handleConnectToApi}>Enter</button>
        <section></section>
      </section>
    </>
  );
}
