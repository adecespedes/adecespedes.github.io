import React from "react";
import "../App.css";
import { Button } from "./Button";
import { Carousel } from "./Carousel";
import "./HeroSection.css";
import Navbar from "./Navbar";

function HeroSection() {
  const images = [
    {
      id: 1,
      image: "/images/HERO_BANNER.png",
    },
    {
      id: 2,
      image: "/images/SPOT_EMPRESARIAL.png",
    },
  ];

  return (
    <>
      <div className="hero-container">
        <img className="hero-img" src="/images/HERO_BANNER.png" />

        <Navbar />
        {/* <Carousel images={images} /> */}
      </div>
      <div className="hero-contain">
        <h1>
          Totat molut voluptati tectur odi sunt ex expliquod que plate
          remporerio
        </h1>
        <p>
          Eptatur minveni squamet harcipsa que eatemos aut et poribus idebis
          eatis simporro comnitate nisquaestiis{" "}
        </p>
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            APRENDE GANANDO
          </Button>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
