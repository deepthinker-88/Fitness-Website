import React from "react";
import "./HealthyLivingPage.css";
import healthySalmonPasta from "../../images/FoodImages/healthySalmonPasta.png";
import chickenStirFry from "../../images/FoodImages/healthyChickenStirFry.png";
import burritoBowl from "../../images/FoodImages/burritoBowl.png";
import BackToHomePageButton from "../BackToHomePageButton/BackToHomePageButton";
import "./HealthyLivingPage.css";
import Footer from "../Footer/Footer";

export default function HealthyLivingPage({ title }) {
  const images = [healthySalmonPasta, chickenStirFry, burritoBowl];
  const recipes = ["Salmon Pasta", "Chicken Stir Fry", "Burrito Bowl"];

  return (
    <div className="healthy-overview">
      <header className="navbar-healthy-living-page">
        <BackToHomePageButton />
      </header>
      <section className="food-images">
        <h1 className="healthy-living-title">{title}</h1>
        <ul className="food-list-items">
          {images.map((image, index) => (
            <React.Fragment key={index}>
              <li>
                <img
                  className="food-image"
                  alt="food-image"
                  src={image}
                  height="150"
                />
              </li>
              <p className="font">{recipes[index]}</p>
            </React.Fragment>
          ))}
        </ul>
      </section>
      <section className="healthy-living">
        <h2 className="healthy-living-title">Maintaing a healthy lifestyle</h2>
        <br></br>
        <p className="font">Consume less calories than you eat</p>
        <br></br>
        <p className="font">Exercise three times a week</p>
        <br></br>
        <p className="font">Look after your mental health</p>
        <br></br>
        <p className="font">Drink plenty of water</p>
        <br></br>
        <p className="font">Limit processesd foods and sugar</p>
        <br></br>
        <p className="font">Limit alcohol intake</p>
      </section>
      <Footer />
    </div>
  );
}
