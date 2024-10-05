import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./styles.css";
import SignInButton from "./components/SignInButton/SignInButton";
import fitness from "./images/fitness.jpg";
import WorkOutButton from "./components/WorkOutButton/WorkOutButton";
import WorkOutProgrammesButton from "./components/WorkOutProgrammesButton/WorkOutProgrammesButton";
import HealthyButton from "./components/HealthyLivingButton/HealthyLivingButton";
import SignUpButton from "./components/SignUpButton/SignUpButton";
import SignIn from "./components/SignInPage/SignInPage";
import Signup from "./components/SignUpPage/SignUpPage";
import WorkOutProgrammesPage from "./components/WorkOutProgrammesPage/WorkOutProgrammesPage";
import HealthyLivingPage from "./components/HealthyLivingPage/HealthyLivingPage";
import WorkOutsPage from "./components/WorkOutsPage/WorkOutsPage";
import UserProfile from "./components/UserProfilePage/UserProfilePage";
import Navbar from "./components/NavBar/NavBar";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <SignInButton />
                <SignUpButton />
                <Navbar />

                <img className="image-dimensions" src={fitness} alt="fitness" />
                <h1 className="center-title"> Functional Fitness</h1>
                <h2 className="text-colour">
                  Welcome to The Functional Fitness website. Let's get started
                  to get you in shape
                </h2>

                <div className="button-container">
                  <WorkOutProgrammesButton />
                  <WorkOutButton />
                  <HealthyButton />
                </div>
              </div>
            }
          />

          <Route path="/sign-up" element={<Signup />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route
            path="/workout-programmes"
            element={<WorkOutProgrammesPage title="Workout Programmes" />}
            
          />
          <Route
            path="/healthy-living"
            element={
              <HealthyLivingPage className ="text-colour"
                title="Maintaining a Healthy Lifestyle"
                name="Healthy Living Recipes"
              />
            }
          />
          <Route
            path="/workouts"
            element={<WorkOutsPage title="Workouts" />}
          />
          <Route
            path="/user-profile"
            element={<UserProfile title="Welcome to your UserProfile Page" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
