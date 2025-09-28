import { useState } from "react";
import React from "react";
import "./WorkoutApi.css";
export default function ConnectToWorkOutApi() {
  const [bodyPartText, setBodyPartText] = useState("");
  const [connectedToApi, setConnectedToApi] = useState(false);
  const [selectedMuscle, setSelectedMuscle] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [showMuscleExercise,setShowMuscleExercise] = useState("");
  const[showMuscleDescription,setShowMuscleDescription]=useState("");

  const fetchBodyWorkouts = async () => {
    if (!bodyPartText.trim()) {
      return;
    } else {
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
    const bodyName = matchedBodyPart.name_en;

    const resp = await fetch(
      `https://wger.de/api/v2/exerciseinfo/?language=2&muscles=${bodyPartId}`
    );

    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 5000);

    const userTypedMuscleJson = await resp.json();
    setSelectedMuscle(bodyName);
    if(bodyName === "Abs"){
      const {name:absExerciseName} = userTypedMuscleJson.results[2].translations[1];
      const {description:absExerciseDescription} = userTypedMuscleJson.results[2].translations[1];
      setShowMuscleExercise(absExerciseName);
      setShowMuscleDescription(absExerciseDescription)
    }
    else if(bodyName === "Shoulders"){
      const muscleExercise = userTypedMuscleJson.results[17].translations[2];
      
      const {name:exerciseName} = muscleExercise;
      const{description:exerciseDescription} = muscleExercise;
      setShowMuscleExercise(exerciseName);
      setShowMuscleDescription(exerciseDescription)
      

    }

    else if(bodyName ==="Biceps"){
      const muscleExercise = userTypedMuscleJson.results[0].translations[0];
      const{name:exerciseName} = muscleExercise;
      const{description:exerciseDescription} = muscleExercise;
      setShowMuscleExercise(exerciseName);
      setShowMuscleDescription(exerciseDescription)

    }

    else if(bodyName === "Hamstrings"){
      const muscleExercise = userTypedMuscleJson.results[9].translations[0];
      const {name:exerciseName} = muscleExercise;
      
    }

    else{
       const muscleExercise = userTypedMuscleJson.results[0].translations[0];
      const{name:exerciseName} = muscleExercise;
      const{description:exerciseDescription} = muscleExercise;
      setShowMuscleExercise(exerciseName);
      setShowMuscleDescription(exerciseDescription)

    }
    
      
    
    }
    
    
  

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

        <section>
          {showMessage && connectedToApi && (
            <h1 className="show-message"> {showMessage && <p>Connected To Fitness API ...</p>}</h1>
          )}
          {selectedMuscle && <h3>PrimaryMuscle:{selectedMuscle}</h3>}
          {showMuscleExercise && <p> {showMuscleExercise}</p>}
          {showMuscleDescription && <p>{showMuscleDescription}</p>}
        </section>
      </section>
    </>
  );
}
