import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import "./styles.scss";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  return (
    <section id="home" className="home">
      <div className="home_text-wrapper">
        <h1>
          Hello, I'm Shalini Tiwari
          <br />
          FRONTEND DEVELOPER
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translateY(0px)",
        }}
      >
        <div className="home_contact-buttons">
          {/* Hire Me Button */}
          <button onClick={handleNavigateToContactMePage}>Hire Me</button>

          {/* Download Resume Button */}
          <a
            href="/path-to-your-resume.pdf"
            download="Shalini_Tiwari_Resume.pdf"
            className="download-resume-btn"
          >
            Download Resume
          </a>
        </div>
      </Animate>
      {/* Social Icons Section */}
      <div className="home_social-icons">
        <a
          href="https://www.linkedin.com/in/shalini-tiwari-466566239/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          href="https://github.com/shalinitiwarindia"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href="https://wa.me/8668276420"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <FontAwesomeIcon icon={faWhatsapp} size="2x" />
        </a>
      </div>
    </section>
  );
};

export default Home;
