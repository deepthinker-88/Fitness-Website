import React, { useState } from "react";
import BackToHomePageButton from "../BackToHomePageButton/BackToHomePageButton";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
    console.log("You have signed in");
  };
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
