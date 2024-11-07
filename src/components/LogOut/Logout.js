import React from "react";
import "./Logout.css";
import  { useNavigate } from "react-router-dom";

export default function LogoutToHomePageButton() {
  const navigate = useNavigate()

  const handleLogOut = () => {
    navigate("/")
  }
return (
  
    <li className="logout" onClick={handleLogOut}>
      <a href="/">Logout</a>{" "}
    </li>
  
);
}
