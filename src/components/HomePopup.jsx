import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons/index.js";

const InfoBox = ({ text, link, buttonTitle }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {buttonTitle}
      <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I'm
      <span className="font-semibold mx-2 text-white">Jaime Nguyen</span>
      👋
      <br />
      Aspiring Software Engineer from Philadelphia
    </h1>
  ),
  2: (
    <InfoBox
      text="A motivated CS student skilled in software development, constantly learning and growing in the tech field."
      link="/about"
      buttonTitle="About Me"
    />
  ),
  3: (
    <InfoBox
      text="Developed multiple mobile and web apps through self-learning. Visit my projects to see how I apply coding skills to grow as a developer!"
      link="/projects"
      buttonTitle="Visit My Portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Looking for a passionate developer to bring your ideas to life? Let's collaborate and build something amazing together!"
      link="/contact"
      buttonTitle="Contact Me"
    />
  ),
};

const HomePopup = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};
export default HomePopup;
