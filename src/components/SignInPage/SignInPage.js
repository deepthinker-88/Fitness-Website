import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackToHomePageButton from "../BackToHomePageButton/BackToHomePageButton";
import "./SignInPage.css";
export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const savedUserDetails = {
        email,
        password,
      };

      const response = await fetch("http://localhost:3005/sign-in", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(savedUserDetails),
      });
      if (response.ok) {
        const data = await response.json();
        alert("You have signed in successfully");
        navigate("/user-profile");
        return data;
      } else {
        alert("Incorrect email or password");
      }
    } catch (error) {
      alert("Incorrect email or password");
      console.log("Error", error);
    }
  };
  return (
    <div>
      <header className="navbar-sign-in-page">
        <BackToHomePageButton />
      </header>

      <form onSubmit={handleLogin}>
        <input
          className="e-mail-input"
          type="email"
          placeholder="Please enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="username"
        />

        <input
          className="password-input"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="current-password"
        />
        <button className="sign-in-button ">Sign In</button>
      </form>
    </div>
  );
}
