import React from "react";
import "./HealthyLivingPage.css";
import healthySalmonPasta from "../../images/FoodImages/healthySalmonPasta.png";
import chickenStirFry from "../../images/FoodImages/healthyChickenStirFry.png";
import burritoBowl from "../../images/FoodImages/burritoBowl.png";
import BackToHomePageButton from "../BackToHomePageButton/BackToHomePageButton";
import "./HealthyLivingPage.css";

export default function HealthyLivingPage(props) {
  const images = [healthySalmonPasta, chickenStirFry, burritoBowl];
  const recipes=['Salmon Pasta','Chicken Stir Fry','Burrito Bowl']
  
  return (
    <div className="content">
      <header className="navbar-healthy-living-page">
        <BackToHomePageButton />
      </header>
      <h1 className="font">{props.title}</h1>

      <ul className="ul">
        {images.map((item,index) => (
          <li>
            <img src={item} alt="Food Items" />
            <p className="font">{recipes[index]}</p> 
           
          </li>
        ))}
      </ul>
      <br></br>
      <h2 className="font">Maintaing a healthy lifestyle</h2>
      <br></br>
      <p className='font'>Consume less calories than you eat</p>
      <br></br>
      <p className="font">Exercise three times a week</p>
      <br></br>
      <p className="font">Look after your mental health</p>

    </div>
  );
}

