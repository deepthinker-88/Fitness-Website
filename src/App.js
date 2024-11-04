import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./styles.css";
import fitness from "./images/fitness.jpg";
import SignIn from "./components/SignInPage/SignInPage";
import Signup from "./components/SignUpPage/SignUpPage";
import WorkOutProgrammesPage from "./components/WorkOutProgrammesPage/WorkOutProgrammesPage";
import HealthyLivingPage from "./components/HealthyLivingPage/HealthyLivingPage";
import WorkOutsPage from "./components/WorkOutsPage/WorkOutsPage";
import UserProfile from "./components/UserProfilePage/UserProfilePage";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ToShowNavbar from "./components/ShowNavBar/ShowNavBar";

function App() {
  return (
    <div className="background-colour">
      <Router>
        <ToShowNavbar>
          <NavBar />
        </ToShowNavbar>

        <Routes>
          <Route
            path="/"
            element={
              <main className="content">
                <img className="fitness-image" src={fitness} alt="fitness" />
                <h1 className="main-title">Functional Fitness</h1>
                <h2 className="text-colour">
                  Welcome to The Functional Fitness website. Let's get started
                  to get you in shape
                </h2>
              </main>
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
              <HealthyLivingPage
                className="font-style"
                title="Healthy foods for a healthy lifestyle"
                name="Healthy Living Recipes"
              />
            }
          />
          <Route path="/workouts" element={<WorkOutsPage title="Workouts" />} />
          <Route
            path="/user-profile"
            element={
              <UserProfile
                title="Welcome to your HomeProfile Page"
                day="Select Your Workout Day"
                workout="Select Your Workout"
                workout_type = "Select Your Type Of workout"
              />
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
