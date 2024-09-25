import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackToHomePageButton from "../BackToHomePageButton/BackToHomePageButton";
import axios from "axios";
const profileUrl = process.env.REACT_APP_PROFILE_PAGE_ENDPOINT;

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const savedUserDetails = {
      email,
      password,
    };

  try {
    const response = await axios.post(profileUrl, savedUserDetails);
    if (response.status === 200) {
      alert("You have signed in successfully");
      navigate("/user-profile");
    } else {
      alert(`Login failed: ${response.data.message}`);
    }
  } catch (error) {
    if (error.response && error.response.status === 401) {
      alert("Incorrect email or password");
    } else {
      alert("An error occurred. Please try again later.");
    }
    console.error("Error during login:", error);
  }
  }  

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Please enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="username"
        />

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="current-password"
        />
        <button className="sign-in-button-sign-in-page">Sign In</button>
      </form>
      <BackToHomePageButton />
    </div>
  );
}
