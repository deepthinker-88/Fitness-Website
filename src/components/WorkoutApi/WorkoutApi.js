import { useState } from "react";
import React from "react";
import "./WorkoutApi.css";
export default function ConnectToWorkOutApi() {
  const [bodyPartText, setBodyPartText] = useState("");
  const [connectedToApi, setConnectedToApi] = useState(false);
  const [selectedMuscle, setSelectedMuscle] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [showMuscleExercise, setShowMuscleExercise] = useState("");
  const [showMuscleDescription, setShowMuscleDescription] = useState("");
  const [highlight, setHighlight] = useState(false);
  const [showSaveButton, setShowSaveButton] = useState(false);
  const [viewSavedWorkouts, setViewSavedWorkouts] = useState([]);
  const [saveWorkoutMessage, setSaveWorkoutMessage] = useState("");
  const [viewSavedWorkoutButton, setViewSavedWorkoutButton] = useState(false);
  const availableBodyParts = [
    "Shoulders",
    "Biceps",
    "Hamstrings",
    "Calves",
    "Glutes",
    "Lats",
    "Chest",
    "Quads",
    "Abs",
    "Triceps",
  ];

  const fetchBodyWorkouts = async () => {
    if (!bodyPartText.trim()) {
      return;
    } else {
      setConnectedToApi(true);
    }

    const response = await fetch("https://wger.de/api/v2/muscle/");

    if (response.status === 200) {
      const resMuscles = await response.json();
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
      setShowSaveButton(true);
      if (bodyName === "Abs") {
        const { name: absExerciseName } =
          userTypedMuscleJson.results[2].translations[1];
        const { description: absExerciseDescription } =
          userTypedMuscleJson.results[2].translations[1];
        setShowMuscleExercise(absExerciseName);
        setShowMuscleDescription(absExerciseDescription);
      } else if (bodyName === "Shoulders") {
        const muscleExercise = userTypedMuscleJson.results[17].translations[2];

        const { name: exerciseName } = muscleExercise;
        const { description: exerciseDescription } = muscleExercise;
        setShowMuscleExercise(exerciseName);
        setShowMuscleDescription(exerciseDescription);
      } else if (bodyName === "Biceps") {
        const muscleExercise = userTypedMuscleJson.results[0].translations[0];
        const { name: exerciseName } = muscleExercise;
        const { description: exerciseDescription } = muscleExercise;
        setShowMuscleExercise(exerciseName);
        setShowMuscleDescription(exerciseDescription);
      } else if (bodyName === "Hamstrings") {
        const muscleExercise = userTypedMuscleJson.results[9].translations[0];
        const { name: exerciseName } = muscleExercise;
        const { description: exerciseDescription } = muscleExercise;
        setShowMuscleExercise(exerciseName);
        setShowMuscleDescription(exerciseDescription);
      } else if (bodyName === "Calves") {
        const muscleExercise = userTypedMuscleJson.results[1].translations[0];
        const { name: exerciseName } = muscleExercise;
        const { description: exerciseDescription } = muscleExercise;
        setShowMuscleExercise(exerciseName);
        setShowMuscleDescription(exerciseDescription);
      } else if (bodyName === "Lats") {
        const muscleExercise = userTypedMuscleJson.results[13].translations[2];
        const { name: exerciseName } = muscleExercise;
        setShowMuscleExercise(exerciseName);
        setShowMuscleDescription(
          <p>
            On an assisted pull-up machine, set the weight so it offsets part of
            your bodyweight, then grip the handles (wide for lats, close for
            arms and lats). Place your knees on the pad, start with arms fully
            extended, chest lifted, and core tight. Pull yourself up by driving
            elbows down and squeezing your back until your chin nears the bar,
            then lower slowly with control.
          </p>
        );
      } else if (bodyName === "Glutes") {
        const muscleExercise = userTypedMuscleJson.results[12].translations[1];
        const { name: exerciseName } = muscleExercise;
        const { description: exerciseDescription } = muscleExercise;
        setShowMuscleExercise(exerciseName);
        setShowMuscleDescription(exerciseDescription);
      } else if (bodyName === "Quads") {
        const muscleExercise = userTypedMuscleJson.results[1].translations[2];
        console.log(muscleExercise);
        const { name: exerciseName } = muscleExercise;
        setShowMuscleExercise(exerciseName);
        setShowMuscleDescription(
          <p>
            Sit on the machine with your back against the pad and one leg hooked
            under the roller. Keep your other foot flat on the floor for
            stability. Extend your working leg upward until it’s straight,
            focusing on contracting your quadriceps, then lower back down slowly
            with control. This isolates each leg to build quad strength evenly
            and improve balance
          </p>
        );
      } else {
        const muscleExercise = userTypedMuscleJson.results[0].translations[0];
        const { name: exerciseName } = muscleExercise;
        const { description: exerciseDescription } = muscleExercise;
        setShowMuscleExercise(exerciseName);
        setShowMuscleDescription(exerciseDescription);
      }
    }
  };

  const handleFetchedDataStyling = () => {
    if (bodyPartText) {
      setHighlight(true);
    }
  };

  const handleViewedSaveWorkouts = () => {
    setViewSavedWorkouts((prev) => [
      ...prev,
      selectedMuscle,
      showMuscleExercise,
      showMuscleDescription,
    ]);
  };

  const handleSavedWorkouts = () => {
    setTimeout(() => {
      setShowSaveButton(false);
      setSaveWorkoutMessage("Workout Saved");
    }, 2000);
    setTimeout(() => {
      setShowSaveButton(true);
      setSaveWorkoutMessage(false);
      setShowSaveButton(true);
      setViewSavedWorkoutButton("View Saved Workouts");
    }, 4000);
  };

  const handleDeleteWorkout = (selectedMuscle) => {
    const updatedWorkouts = viewSavedWorkouts.filter(
      (workout) => workout !== selectedMuscle
    );
    setViewSavedWorkouts(updatedWorkouts);
    if (updatedWorkouts.length === 0) {
      setViewSavedWorkoutButton(false);
    }
  };

  return (
    <>
      <section className="workout-api-text">
        <h2>Not happy with our stock workouts???</h2>
        <h3>
          Click Enter button below to connect to Workout Api to view some of our
          most popular workouts
        </h3>

        <section className="body-text">
          <p>Enter the body part that you want an exercise for?</p>

          <p>Available options are: </p>
          {availableBodyParts.map((value, index) => {
            return (
              <ul>
                <li className="rendered-body-list" key={index}>
                  {value}
                </li>
              </ul>
            );
          })}

          <input
            type="text"
            value={bodyPartText}
            onChange={(e) => setBodyPartText(e.target.value)}
          ></input>
          <button
            onClick={() => {
              fetchBodyWorkouts();
              handleFetchedDataStyling();
            }}
          >
            Search
          </button>

          <section className="exercises-main">
            {showMessage && connectedToApi && (
              <h1 className="show-message"> Connected To Fitness API 😃</h1>
            )}
            {highlight && (
              <section className="exercise-info">
                <article className={highlight ? "highlight" : ""}>
                  {selectedMuscle && <h3>PrimaryMuscle: {selectedMuscle}</h3>}
                  {showMuscleExercise && <p> {showMuscleExercise}</p>}
                  {showMuscleDescription && <p>{showMuscleDescription}</p>}
                </article>
              </section>
            )}
            {showSaveButton && (
              <button onClick={handleSavedWorkouts}>Save Workout</button>
            )}
            <p>{saveWorkoutMessage}</p>
            {viewSavedWorkoutButton && (
              <>
                <button onClick={handleViewedSaveWorkouts}>
                  View Saved Workouts
                </button>
                <section className="mapped-list">
                  {viewSavedWorkouts.map((workout, index) => {
                    return (
                      <ul key={index} className="workout-items">
                        <li>{workout}</li>
                        <button onClick={() => handleDeleteWorkout(workout)}>
                          Delete
                        </button>
                      </ul>
                    );
                  })}
                </section>
              </>
            )}
          </section>
        </section>
      </section>
    </>
  );
}
