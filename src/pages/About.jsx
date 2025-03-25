import React, { useState, useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CTA from "../components/CTA.jsx";
import {fetchExperience, fetchSkills, urlFor} from "../libs/sanityClient.js";

const About = () => {
  const [mySkills, setMySkills] = useState([]);
  const [myExperience, setMyExperience] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const [skillsData, experienceData] = await Promise.all([
          fetchSkills(),
          fetchExperience(),
        ]);

        const sortedSkills = skillsData.sort(
            (a, b) => new Date(a._createdAt).getTime() - new Date(b._createdAt).getTime()
        );

        const sortedExperiences = experienceData.sort(
            (a, b) => new Date(a._createdAt).getTime() - new Date(b._createdAt).getTime()
        );

        setMySkills(sortedSkills);
        setMyExperience(sortedExperiences);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getData()
        .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (loading) return <div>Loading skills...</div>;
  if (error) return <div>Error loading skills: {error}</div>;

  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          {" "}
          Jaime
        </span>{" "}
        👋
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p className="text-justify">
          As a soon-to-be Computer Science graduate with a passion for building
          seamless and engaging mobile and web applications, I love focusing on
          the details—crafting intuitive user interfaces and optimizing their
          experience—while building scalable and maintainable projects. As a
          self-learner, I’m always exploring new technologies and refining my
          skills to build applications that are not only functional but also
          enjoyable to use. I'm eager to collaborate, grow, and contribute to a
          team where I can apply my knowledge while continuously learning from
          experienced professionals.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {mySkills.map(({ image, name, path }) => (
            <div
              className="block-container w-20 h-20"
              key={name}
              onClick={() => window.open(path, "_blank")}
            >
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={urlFor(image).url()}
                  alt={name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I’ve developed strong problem-solving and communication skills
            through my roles as a Lab Consultant and Tutor. My experience also
            includes building app projects that demonstrate my technical
            abilities. For more details, feel free to check out my{" "}
            <a href="/projects">
              <span className="text-blue-400 font-semibold">portfolio!</span>
            </a>
          </p>
        </div>
      </div>

      <div className="mt-12 flex">
        <VerticalTimeline>
          {myExperience.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              date={exp.date}
              iconStyle={{ background: exp.iconBg }}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={urlFor(exp.icon).url()}
                    alt={exp.company_name}
                    className="w-[60%] h-[60%] object-contain"
                  />
                </div>
              }
              contentStyle={{
                borderBottom: "8px",
                borderStyle: "solid",
                borderBottomColor: exp.borderBg,
                boxShadow: "none",
              }}
            >
              <div>
                <h3 className="text-black text-xl font-poppins font-semibold">
                  {exp.title}
                </h3>
                <p
                  className="text-black-500 font-medium text-base"
                  style={{ margin: 0 }}
                >
                  {exp.company_name}
                </p>
              </div>

              <ul className="my-5 list-disc ml-5 space-y-2">
                {exp.points.map((point, index) => (
                  <li
                    key={`experience-point-${index}`}
                    className="text-black-500/50 font-normal pl-1 text-sm"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};
export default About;
