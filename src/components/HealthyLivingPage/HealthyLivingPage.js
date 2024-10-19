import React from "react";
import './HealthyLivingPage.css';
import healthySalmonPasta from "../../images/FoodImages/healthySalmonPasta.png";
import chickenStirFry from "../../images/FoodImages/healthyChickenStirFry.png";
import burritoBowl from "../../images/FoodImages/burritoBowl.png"
import BackToHomePageButton from "../BackToHomePageButton/BackToHomePageButton";
import "./HealthyLivingPage.css";

export default function HealthyLivingPage(props) {

  return (
  <div className="content">
    <header className="navbar-healthy-living-page">
    <BackToHomePageButton />
    </header>
    
  <h1 class = 'font'>{props.name}</h1>
  <img className="healthy-images" src={healthySalmonPasta} alt ="salmon food"/>
  <img className="healthy-images"  src = {chickenStirFry} alt = "chicken food"/>
  <img className="healthy-images"  src={burritoBowl} alt = "burrito bowl food"/>
  
  <h1 class="font">{props.title}</h1>
  <ul class="font">
    <li><strong>Consume less calories than you eat</strong></li>
    <br></br>
    <li><strong>Exercise three times a week</strong></li>
    <br></br>
    <li><strong>Look after your mental health</strong></li>
    <br></br>
  </ul>
  </div>
  )}


