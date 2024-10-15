import React from "react";
import "./UserProfilePage.css";
import BackToHomePageButton from "../BackToHomePageButton/BackToHomePageButton";

export default function UserProfile(props) {
  return (
    <div>
      <header className="navbar-user-profile-page">
        <BackToHomePageButton />
      </header>

      <h1>{props.title}</h1>
    </div>
  );
}
