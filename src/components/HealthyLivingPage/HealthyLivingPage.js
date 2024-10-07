import React from "react";
import NavBar from "../NavBar/NavBar";
import healthySalmonPasta from "../../images/FoodImages/healthySalmonPasta.png";
import chickenStirFry from "../../images/FoodImages/healthyChickenStirFry.png";
import burritoBowl from "../../images/FoodImages/burritoBowl.png"
import BackToHomePageButton from "../BackToHomePageButton/BackToHomePageButton";
import "./HealthyLivingPage.css"

export default function HealthyLivingPage(props) {

  return (
  <div>
    <NavBar/>
    <BackToHomePageButton className="back-button-healthy-living-page" />
    
  <h1>{props.name}</h1>
  <img className="healthy-images" src={healthySalmonPasta} alt ="salmon food"/>
  <img className="healthy-images"  src = {chickenStirFry} alt = "chicken food"/>
  <img className="healthy-images"  src={burritoBowl} alt = "burrito bowl food"/>
  
  <h1>{props.title}</h1>
  <ul>
    <li><strong>Consume less calories than you eat</strong></li>
    <li><strong>Exercise three times a week</strong></li>
    <li><strong>Look after your mental health</strong></li>
  </ul>
  </div>
  )}


