import React from "react";
import { useState } from "react";
import "./HealthyLivingPage.css";
import healthySalmonPasta from "../../images/FoodImages/healthySalmonPasta.png";
import chickenStirFry from "../../images/FoodImages/healthyChickenStirFry.png";
import burritoBowl from "../../images/FoodImages/burritoBowl.png";
import smileyFace from "../../images/HealthyMindsetImages/smileyFace.png";
import mindfulImage from "../../images/HealthyMindsetImages/mindful.png";
import sleep from "../../images/HealthyMindsetImages/sleep.png";
import BackToHomePageButton from "../BackToHomePageButton/BackToHomePageButton";
import "./HealthyLivingPage.css";
import Footer from "../Footer/Footer";

export default function HealthyLivingPage({ title }) {
  const images = [healthySalmonPasta, chickenStirFry, burritoBowl];
  const recipes = ["Salmon Pasta", "Chicken Stir Fry", "Burrito Bowl"];
  const [emojiIsFlipped, setEmojiIsFlipped] = useState(true);
  const [emojiCardChange, setEmojiCardChange] = useState(false);
  const [mindfulIsFlipped, setMindfulIsFlipped] = useState(true);
  const [mindfulCardChange, setMindfulCardChange] = useState(false);
  const [sleepIsFlipped, setSleepIsFlipped] = useState(true);
  const [sleepCardChange, setSleepCardChange] = useState(false);

  const handleSmileyChange = () => {
    setTimeout(() => {
      setEmojiIsFlipped(false);
      setEmojiCardChange(true);
    }, 2000);
    setTimeout(() => {
      setEmojiIsFlipped(true);
      setEmojiCardChange(false);
    }, 4000);
  };

  const handleMindfulChange = () => {
    setTimeout(() => {
      setMindfulIsFlipped(false);
      setMindfulCardChange(true);
    }, 2000);
    setTimeout(() => {
      setMindfulIsFlipped(true);
      setMindfulCardChange(false);
    }, 4000);
  };

  const handleSleepChange = () => {
    setTimeout(() => {
      setSleepIsFlipped(false);
      setSleepCardChange(true);
    }, 2000);
    setTimeout(() => {
      setSleepIsFlipped(true);
      setSleepCardChange(false);
    }, 4000);
  };

  return (
    <div className="healthy-overview">
      <header className="navbar-healthy-living-page">
        <BackToHomePageButton />
      </header>
      <section className="food-images">
        <h1 className="healthy-living-title">{title}</h1>
        <h2 className="healthy-living-title"> Typical Healthy Meals</h2>
        <ul className="food-list-items">
          {images.map((image, index) => (
            <React.Fragment key={index}>
              <li className="recipe-item" key={index}>
                <img
                  className="food-image"
                  alt="food-image"
                  src={image}
                  height="150"
                />
                <div className="recipe-text">{recipes[index]}</div>
                <p>Click on Image For More Info</p>
              </li>
            </React.Fragment>
          ))}
        </ul>
      </section>
      <section className="healthy-mindset">
        <h2>Maintaining a healthy Mindset</h2>
        <section className="mental-health-images">
          {emojiIsFlipped && (
            <img
              onClick={handleSmileyChange}
              className="image1"
              src={smileyFace}
              alt="smileyImage"
              height="250"
            />
          )}
          {emojiCardChange && (
            <>
              <section className="health-text">
                <p>Looking after Your Mental Health is key</p>
                <p>Having a Growth Mindset is important</p>
                <p>Think Positively</p>
              </section>
            </>
          )}

          {mindfulIsFlipped && (
            <>
              <img
                onClick={handleMindfulChange}
                className="image2"
                src={mindfulImage}
                alt="mindfulImage"
                height="250"
              />
            </>
          )}

          {mindfulCardChange && <p>Stay in the present moment</p>}

          {sleepIsFlipped && (
            <img
              onClick={handleSleepChange}
              className="image3"
              src={sleep}
              alt="sleepImage"
              height="180"
            />
          )}

          {sleepCardChange && <p>Get 7-9 hours of sleep per night</p>}
        </section>
      </section>
      <section className="healthy-living">
        <h2 className="healthy-living-title">
          Maintaining a healthy lifestyle
        </h2>
        <br></br>
        <p className="font">Consume less calories than you eat</p>
        <a
          className="font"
          href="https://www.calculator.net/calorie-calculator.html"
        >
          Calorie Calculator
        </a>
        <br></br>
        <p className="font">Exercise three times a week</p>
        <a
          className="font"
          href="https://www.healthline.com/nutrition/10-benefits-of-exercise"
        >
          Benefits of Exercise
        </a>
        <br></br>
        <p className="font">Look after your mental health</p>
        <a
          className="font"
          href="https://www.mentalhealth.org.uk/explore-mental-health/a-z-topics/physical-activity-and-mental-health"
        >
          Mental Health and Exercise
        </a>
        <br></br>
        <p className="font">Drink plenty of water</p>
        <a
          className="font"
          href="https://www.healthline.com/nutrition/7-health-benefits-of-water"
        >
          Benefits of Drinking Water
        </a>
        <br></br>
      </section>
      <Footer />
    </div>
  );
}
