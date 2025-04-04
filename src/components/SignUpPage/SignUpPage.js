import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackToHomePageButton from "../BackToHomePageButton/BackToHomePageButton";
import Footer from "../Footer/Footer"
import "./SignUpPage.css";
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
        confirmPassword:confirmPassword,
      };
      const response = await fetch(process.env.REACT_APP_API_SIGNUP, {
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
    <div className= "sign-up-page">
      <header className="navbar-sign-up-page">
        <BackToHomePageButton />
      </header>
      <main className="form--main">
      <form className="form--input"onSubmit={handleSignUp}>
        <input
          className="first-name-input"
          type="text"
          placeholder="Enter first name"
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          className="last-name-input"
          type="text"
          placeholder="Enter last name"
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
        />

        <input
          className="email-input"
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="username"
        />
        <input
          className="password-input"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="password"
          minLength={5}
          maxLength={15}
        />
        <input
          className="confirm-password-input"
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          autoComplete="new-password"
          minLength={5}
          maxLength={15}
        />

        <button className="sign-up-button" type="submit">
          Sign up
        </button>
      </form>
      </main>
      <Footer />
    </div>
  );
}
