import { useState } from "react";
import React from "react";
import "./WorkoutApi.css";
export default function ConnectToWorkOutApi() {
  const [bodyPartText, setBodyPartText] = useState("");
  const[connectedToApi,setConnectedToApi] = useState(false);

  const fetchBodyWorkouts = async () => {
    if(!bodyPartText.trim()){
      return
    }
    else{
      setConnectedToApi(true);
    }
    const data = await fetch("https://wger.de/api/v2/muscle/");
    const resMuscles = await data.json();
    const musclesJson = await resMuscles.results;
    const bodyParts = musclesJson.map((body) => ({
      id: body.id,
      name: body.name,
      name_en: body.name_en,
    }));
    const matchedBodyPart = bodyParts.find(
      (muscle) => muscle.name_en === bodyPartText
    );
    const bodyPartId = matchedBodyPart.id;
    const resp = await fetch(
      `https://wger.de/api/v2/exerciseinfo/?language=2&muscles=${bodyPartId}`
    );
    const bodyData = await resp.json();
    
  };

  return (
    <>
      <section className="workout-api-text">
        <h2>Not happy with our stock workouts???</h2>
        <h3>
          Click Enter button below to connect to our own Api to build your own
          workouts
        </h3>
      </section>
      <section className="body-text">
        <p>Enter the body part that you want an exercise for?</p>
        <input
          type="text"
          value={bodyPartText}
          onChange={(e) => setBodyPartText(e.target.value)}
        ></input>
        <button onClick={fetchBodyWorkouts}>Enter</button>

        <section></section>
      </section>
    </>
  );
}
