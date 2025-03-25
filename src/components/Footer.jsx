import { Link } from "react-router-dom";
import React, {useEffect, useState} from "react";
import {fetchSocialLinks, urlFor} from "../libs/sanityClient.js";

const Footer = () => {
    const [socialLinks, setSocialLinks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const getData = async () => {
        try {
          const data = await fetchSocialLinks();

          const sorted = data.sort(
              (a, b) => new Date(a._createdAt).getTime() - new Date(b._createdAt).getTime()
          );

          setSocialLinks(sorted)
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
    <footer className="footer font-poppins">
      <hr className="border-slate-200" />

      <div className="footer-container">
        <p>
          © 2025 <strong>Jaime Nguyen</strong>. All rights reserved.
        </p>

        <div className="flex gap-3 justify-center items-center">
          {socialLinks.map(({ name, iconUrl, link }) => (
            <Link key={name} to={link} target={link === "/contact" ? "_self" : "_blank"}>
              <img
                src={urlFor(iconUrl).url()}
                alt={name}
                className="w-6 h-6 object-contain"
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
