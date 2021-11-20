import React from "react";

import "./hero.css";
import me from "../../img/mk4.jpeg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <div className="hero-left-wrapper">
          <h2 className="hero-intro">Hello, My name is</h2>
          <h1 className="hero-name">Mohammed Summers</h1>

          <div className="hero-title">
            <div className="hero-title-wrapper">
              <div className="hero-title-item">React Developer</div>
              <div className="hero-title-item">UI/UX Designer</div>
              <div className="hero-title-item">Content Creator</div>
            </div>
          </div>

          <p className="hero-desc">
            I'm a passionate Frontend React Developer using modern web
            technologies to design and build web based applications and focusing
            onnsolviong problems for different niches and different industries.
          </p>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-bg"></div>
        <img src={me} alt="mohammed" className="hero-img" />
      </div>
    </div>
  );
};

export default Hero;
