import React from "react";
import "./Footer.css";
import instagram from "../../images/instagram.png";
import linkedin from "../../images/linkedin.png";
import x from "../../images/x.png";

export default function Footer() {
  return (
    <footer className="footer">
      <h3>Connect With Us</h3>
      <img className="logo1" src={instagram} alt="Instagram" />
      <img className="logo2" src={linkedin} alt="Linkedin" />
      <img className="logo3" src={x} alt="X" />
      <br></br>
      <br></br>
      <a href="mailto:functionalfitness@mail.com">Email Us</a>
    </footer>
  );
}
