import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import CTA from "../components/CTA.jsx";
import {fetchProjectsWithSkills, urlFor} from "../libs/sanityClient.js";
import { arrow } from "../assets/icons";
import Loading from "../components/Loading.js";

const Projects = () => {
  const [myProjects, setMyProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchProjectsWithSkills();

        const sorted = data.sort(
          (a, b) => new Date(a._createdAt).getTime() - new Date(b._createdAt).getTime()
        );

        console.log(sorted);

        setMyProjects(sorted)
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getData()
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (loading) return <Loading />;
  if (error) return <div>Error loading projects: {error}</div>;

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
        {myProjects.map(
          ({ name, iconUrl, theme, description, link, tech, website }) => (
            <div className="lg:w-[400px] w-full" key={name}>
              <div className="block-container w-12 h-12">
                <div className={`btn-back rounded-xl ${theme}`} />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={urlFor(iconUrl).url()}
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
                      {"@ "}{ name}
                    </h4>
                  </Link>
                ) : (
                  <h4 className="text-2xl font-poppins font-semibold">
                    {"📱"}{name}
                  </h4>
                )}
                <p className="mt-2 text-slate-500">{description}</p>
                <div className="flex flex-row items-center">
                  {tech.map((skill, index) => (
                    <span key={index} className="flex items-center">
                      <a
                        href={skill.path}
                        className="mt-2 font-light text-sm hover:text-blue-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {skill.name}
                      </a>
                      {index < tech.length - 1 && <span className="mx-1 mt-2">•</span>}
                    </span>
                  ))}
                </div>
                <div className="mt-3 -ml-2 flex items-center gap-2 font-poppins hover:bg-slate-200 py-1 px-2 rounded-lg">
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
