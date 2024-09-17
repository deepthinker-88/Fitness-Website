import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BackToHomePageButton from "../BackToHomePageButton/BackToHomePageButton";
const apiUrl = process.env.REACT_APP_API_URL;

export default function Signup() {
  const navigate = useNavigate();
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const userDetails = {
        firstname,
        lastname,
        email,
        password,
        confirmPassword,
      };

      const response = await axios.post(apiUrl, userDetails);
      if (response.status === 201) {
        alert("You have successfully signed up");
        navigate("/sign-in");
      }
    } catch (error) {
      console.log(
        `Error saving user details to database: ${error.response.data}`
      );
    }
  };

  return (
    <div>
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          placeholder="Enter first name"
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter last name"
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="username"
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="password"
        />
        <input
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          autoComplete="new-password"
        />
        error && <p style={{ color: "red" }}>{error}</p>
        <button className="sign-up-button-sign-up-page" type="submit">
          Signup
        </button>
      </form>
      <BackToHomePageButton />
    </div>
  );
}
