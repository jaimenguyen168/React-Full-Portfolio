import React from "react";
import { projects } from "../constants/index.js";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import CTA from "../components/CTA.jsx";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Projects
        </span>
      </h1>

      <p className="text-slate-500 mt-2 leading-relaxed text-justify">
        Over the past year, I’ve worked on a variety of projects, some of which
        (Locally and BeatBuddy) are original and hold special significance to
        me, others were inspired by tutorials. Although these tutorial-based
        projects share similar concepts, I’ve modified them significantly—using
        different technologies, improving readability, enhancing scalability,
        and addressing bugs or edge cases. These changes reflect my focus on
        creating clean, maintainable, and robust solutions. If you’d like to
        learn more about my approach, feel free to explore the details!
      </p>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map(
          ({ name, iconUrl, theme, description, link, tech, website }) => (
            <div className="lg:w-[400px] w-full" key={name}>
              <div className="block-container w-12 h-12">
                <div className={`btn-back rounded-xl ${theme}`} />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={iconUrl}
                    alt="project icon"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>

              <div className="mt-5 flex flex-col">
                {website ? (
                  <Link
                    to={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-green-400 underline"
                  >
                    <h4 className="text-2xl font-poppins font-semibold">
                      {name}
                    </h4>
                  </Link>
                ) : (
                  <h4 className="text-2xl font-poppins font-semibold">
                    {name}
                  </h4>
                )}
                <p className="mt-2 text-slate-500">{description}</p>
                <p className="mt-2 font-light text-xs">{tech}</p>
                <div className="mt-5 flex items-center gap-2 font-poppins">
                  <Link
                    to={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600"
                  >
                    Repository
                  </Link>
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 object-contain"
                  />
                </div>
              </div>
            </div>
          ),
        )}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};
export default Projects;
