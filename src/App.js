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
import HealthyLivingPage from "./components/HealthyLivingPage/HealthyLivingPage"
import WorkOutsPage from "./components/WorkOutsPage/WorkOutsPage";
import UserProfile from "./components/UserProfilePage/UserProfilePage";

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
                  <WorkOutProgrammesButton />
                  <WorkOutButton />
                  <HealthyButton />
                </div>
              </div>
            }
          />

          <Route path="/sign-up" element={<Signup />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/workout-programmes" element={<WorkOutProgrammesPage />}/>
          <Route path="/healthy-living" element={<HealthyLivingPage />}/>
          <Route path ="/workouts" element={<WorkOutsPage />}/>
          <Route path="/user-profile" element={<UserProfile />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
