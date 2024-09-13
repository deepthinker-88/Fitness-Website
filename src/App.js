import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./styles.css";
import SignInButton from "./components/SignInButton/SignInButton";
import fitness from "./images/fitness.jpg";
import WorkOutButton from "./components/WorkOutButton/WorkOutButton";
import WorkoutProgrammesButton from "./components/WorkoutProgrammesButton/WorkoutProgrammesButton";
import HealthyButton from "./components/HealthyLivingButton/HealthyLivingButton";
import SignUpButton from "./components/SignUpButton/SignUpButton";
import SignIn from "./components/SignInPage/SignInPage";
import Signup from "./components/SignUpPage/SignUpPage";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <img className="image-dimensions" src={fitness} alt="fitness" />
                <h1 className="center-title"> Functional Fitness</h1>
                <h2 className="text-colour">
                  Welcome to The Functional Fitness website. Let's get started
                  to get you in shape
                </h2>
                <SignInButton />
                <SignUpButton />

                <div className="button-container">
                  <WorkoutProgrammesButton />
                  <WorkOutButton />
                  <HealthyButton />
                </div>
              </div>
            }
          />

          <Route path="/sign-up" element={<Signup />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
