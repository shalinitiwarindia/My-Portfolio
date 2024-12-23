import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import PageHeaderContent from "../../components/pageHeaderContent";
import "./styles.scss";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";
const personalDetails = [
  {
    label: "Name",
    value: "Shalini Tiwari",
  },
  {
    label: "Age",
    value: "21",
  },
  {
    label: "Address",
    value: "Mumbai,Maharashtra",
  },
  {
    label: "Email",
    value: "shalinitiwarindia@gmail.com",
  },
  {
    label: "Contact No",
    value: "8668276420",
  },
];

const jobSummary =
  "Hi, I’m Shalini Tiwari, a passionate and detail-oriented frontend developer with a strong foundation in HTML, CSS, JavaScript, and React. I specialize in creating visually appealing, user-friendly, and responsive web applications.I’ve worked on several projects, including building a weather app, a shopping website, and a YouTube clone, where I honed my skills in responsive design, state management, and API integration. I thrive on turning complex ideas into functional and beautiful designs.As a fresher, I’m eager to contribute my skills to a dynamic team and grow as a developer. I’m particularly interested in crafting seamless user experiences and staying updated with the latest web technologies.When I’m not coding, I enjoy exploring design trends, solving coding challenges, and teaching students, which helps sharpen my problem-solving and communication skills.Let’s connect to build something amazing together!";
const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="about_content">
        <div className="about_content_personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateY(-900px)",
            }}
            end={{
              transform: "translateY(0px)",
            }}
          >
            <h3>Front End Developer</h3>
            <p>{jobSummary}</p>
          </Animate>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateY(500px)",
            }}
            end={{
              transform: "translateY(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about_content_servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateY(-900px)",
            }}
            end={{
              transform: "translateY(0px)",
            }}
          >
            <div className="about_content_servicesWrapper_innerContent">
              <div>
                <FaDev size={60} color="var(--blue-theme-main-color)" />
              </div>
              <div>
                <DiAndroid size={60} color="var(--blue-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var(--blue-theme-main-color)" />
              </div>
              <div>
                <DiApple size={60} color="var(--blue-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;
