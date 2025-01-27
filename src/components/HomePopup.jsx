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
      <span className="font-semibold mx-2 text-white">Jaime</span>
      👋
      <br />A Software Engineer from USA 🇺🇸
    </h1>
  ),
  2: (
    <InfoBox
      text="Worked with many companies and picked up many skills along the way"
      link="/about"
      buttonTitle="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="Led multiple projects from scratch over the years. Curious to learn more?"
      link="/projects"
      buttonTitle="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for a dev? I'm just a few keystrokes away"
      link="/contact"
      buttonTitle="Let's talk"
    />
  ),
};

const HomePopup = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};
export default HomePopup;
