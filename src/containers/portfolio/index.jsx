// import React from "react";
// import { BsInfoCircleFill } from "react-icons/bs";
// import PageHeaderContent from "../../components/pageHeaderContent";
// const Portfolio = () => {
//   return (
//     <section id="portfolio" className="portfolio">
//       <PageHeaderContent
//         headerText="My Portfolio"
//         icon={<BsInfoCircleFill size={40} />}
//       />
//     </section>
//   );
// };
// export default Portfolio;

import React from "react";
import { BsFolderFill } from "react-icons/bs";
import VerticalTimeline from "react-vertical-timeline-component/dist-modules/VerticalTimeline";
import VerticalTimelineElement from "react-vertical-timeline-component/dist-modules/VerticalTimelineElement";
import "react-vertical-timeline-component/style.min.css";
import PageHeaderContent from "../../components/pageHeaderContent";
import "./styles.scss";

const Portfolio = () => {
  // Inline project data
  const projects = [
    {
      title: "Weather App",
      subTitle: "React, OpenWeatherMap API",
      description:
        "A weather forecasting app displaying current and 7-day forecasts with real-time updates.",
      date: "2023",
      link: "https://github.com/username/weather-app",
    },
    {
      title: "Shopping Website",
      subTitle: "HTML, CSS, JavaScript",
      description:
        "A fully responsive e-commerce website with cart functionality and sorting/filtering features.",
      date: "2023",
      link: "https://github.com/username/shopping-website",
    },
    {
      title: "YouTube Clone",
      subTitle: "React, YouTube API",
      description:
        "A video streaming platform with search functionality, video playback, and responsive design.",
      date: "2024",
      link: "https://github.com/username/youtube-clone",
    },
    {
      title: "Todo App",
      subTitle: "React, Redux, JSON-Server",
      description:
        "A task management app with features like add, edit, delete, and toggle task status.",
      date: "2024",
      link: "https://github.com/username/todo-app",
    },
    {
      title: "Timer & Stopwatch",
      subTitle: "React",
      description:
        "A Google Timer and Stopwatch clone with start, stop, reset, and manual input functionalities.",
      date: "2024",
      link: "https://github.com/username/timer-stopwatch",
    },
  ];

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsFolderFill size={40} />}
      />
      <div className="timeline">
        <h3 className="timeline_portfolio_header-text">Projects</h3>
        <VerticalTimeline
          layout={"1-column"}
          lineColor="var(--blue-theme-main-color)"
        >
          {projects.map((project, i) => (
            <VerticalTimelineElement
              key={i}
              className="timeline_portfolio_vertical-timeline-element"
              contentStyle={{
                background: "none",
                color: "var(--blue-theme-sub-text-color)",
                border: "1.5px solid var(--blue-theme-main-color)",
              }}
              date={project.date}
              icon={<BsFolderFill />}
              iconStyle={{
                background: "#181818",
                color: "var(--blue-theme-sub-text-color)",
              }}
            >
              <div className="Vertical-timeline-element-title-wrapper">
                <h3>{project.title}</h3>
                <h4>{project.subTitle}</h4>
              </div>
              <p className="Vertical-timeline-element-title-wrapper-description">
                {project.description}
              </p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-link"
                >
                  View Project
                </a>
              )}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Portfolio;
