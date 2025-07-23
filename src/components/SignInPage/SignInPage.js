import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackToHomePageButton from "../BackToHomePageButton/BackToHomePageButton";
import Footer from "../Footer/Footer"
import "./SignInPage.css";

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e,token) => {
    e.preventDefault();
    try {
      const savedUserDetails = {
        email,
        password,
      };

      const response = await fetch(process.env.REACT_APP_API_SIGNIN,{
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(savedUserDetails),
      });
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("authToken",data.token)
        alert("You have signed in successfully");
        localStorage.setItem("userEmail", email);

        navigate("/user-profile");
        return data
      } else {
        alert("Incorrect details");
      }
    } catch (error) {
      alert("Incorrect details");
      return ("Error", error);
    }
  };
  return (
    <div className="sign-in-page">
      <header className="navbar-sign-in-page">
        <BackToHomePageButton />
      </header>
      <main className="form--main">
      <form className="form--input"onSubmit={handleLogin}>
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
      </main>
      <Footer />
    </div>
  );
}
