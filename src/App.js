import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./styles.css";
import SignIn from "./components/SignInPage/SignInPage";
import Signup from "./components/SignUpPage/SignUpPage";
import WorkOutProgrammesPage from "./components/WorkOutProgrammesPage/WorkOutProgrammesPage";
import HealthyLivingPage from "./components/HealthyLivingPage/HealthyLivingPage";
import WorkOutsPage from "./components/WorkOutsPage/WorkOutsPage";
import UserProfile from "./components/UserProfilePage/UserProfilePage";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ToShowNavbar from "./components/ShowNavBar/ShowNavBar";
import Home from "./components/Home/Home";
import ShowCustomWorkouts from "./components/CustomWorkoutPage/CustomWorkoutPage";

function App() {
  return (
    <div>
      <nav>
        <Router>
          <ToShowNavbar>{<NavBar />}</ToShowNavbar>

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <Footer />
                </>
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
            <Route
              path="/workouts"
              element={<WorkOutsPage title="Workouts" />}
            />
            <Route
              path="/user-profile"
              element={
                <UserProfile
                  title="Welcome to your UserProfile Page"
                  day="Select Your Workout Day"
                  workout="Select Your Workout"
                  workout_type="Select Your Type Of workout"
                />
              }
            />
            <Route
              path="user-profile/custom-workout"
              element={<ShowCustomWorkouts />}
            />
          </Routes>
        </Router>
      </nav>
    </div>
  );
}

export default App;
