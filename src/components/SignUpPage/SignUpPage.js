import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackToHomePageButton from "../BackToHomePageButton/BackToHomePageButton";
export default function Signup() {
  const navigate = useNavigate();
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    console.log("Signup email:", email, "password:", password);
    console.log("You have signed up");
  };

  const goToLoginPage = () => {
    navigate("/sign-in");
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
        />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Confirm password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          className="sign-up-button-sign-up-page"
          type="submit"
          onClick={() => {
            handleSignUp();
            goToLoginPage();
          }}
        >
          Signup
        </button>
      </form>
      <BackToHomePageButton></BackToHomePageButton>
    </div>
  );
}
