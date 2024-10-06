import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackToHomePageButton from "../BackToHomePageButton/BackToHomePageButton";
import NavBar from "../NavBar/NavBar";
export default function Signup() {
  const navigate = useNavigate();
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const userDetails = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        confirmPassword,
      };
      const response = await fetch("http://localhost:3005/sign-up", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      });
      if (response.ok) {
        const data = await response.json();
        alert("You have successfully signed up");
        navigate("/sign-in");
        return data;
      } else {
        const dataError = await response.json();
        alert("An error occured on sign up");
        return `${dataError}`;
      }
    } catch (error) {
      alert("An error occurred");
    }
  };

  return (
    <div>
      <NavBar />
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
          minLength={5}
          maxLength={10}
        />
        <input
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          autoComplete="new-password"
        />

        <button className="sign-up-button-sign-up-page" type="submit">
          Signup
        </button>
      </form>
      <BackToHomePageButton />
    </div>
  );
}
