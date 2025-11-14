
import React, { useState, useEffect, useRef } from "react";
import { BackgroundGradient } from "../Work/BackgroundGradient";
import "./ClientWork.scss";



export default function ClientWork() {
  const projects = [
    {
      name: "Eternal",
      description: "Find where you belong",
      poster: "/extra/eternal.png",
      video: "/extra/eternal.mp4",
      url: "https://ethereal-landing-forge.vercel.app/",
    },
    {
      name: "Stillness",
      description: "Peace is where you live",
      poster: "/extra/stillness.png",
      video: "/extra/stillness.mp4",
      url: "https://stillness-intro-page.vercel.app/",
    },
    {
      name: "Forest",
      description: "peace is where you live",
      poster: "/extra/forest.png",
      video: "/extra/forest.mp4",
      url: "https://mist-whispers-landing.vercel.app/",
    },
    {
      name: "WhisperTrends",
      description: "Get actionable trend briefs from X, TikTok, and Reddit—with ready-to-publish content ideas—before topics go viral.",
      poster: "/extra/trends.png",
      video: "/extra/trends.mp4",
      url: "https://whisper-trend-page.vercel.app/",
    },
    {
      name: "Spark",
      description: "Find spark within you.",
      poster: "/extra/spark.png",
      video: "/extra/spark.mp4",
      url: "https://ugh-club-hero-zen.vercel.app/",
    },
    {
      name: "SpacePeace",
      description: "Connecting world together",
      poster: "/extra/spacepeace.png",
      video: "/extra/spacepeace.mp4",
      url: "https://cinematic-ai-zenith.vercel.app/",
    },
    {
      name: "Noir",
      description: "Making a statement from fashion",
      poster: "/extra/noir.png",
      video: "/extra/noir.mp4",
      url: "https://noir-editorial-vision.vercel.app/",
    },
    {
      name: "Peace",
      description: "Travell where peace is",
      poster: "/extra/place.png",
      video: "",
      url: "https://tranquil-scene-builder.vercel.app/",
    },
    // Future client work projects can be added here
  ];

  const getInitialVisibleProjects = () => {
    return window.innerWidth <= 768 ? 2 : projects.length;
  };

  const [visibleProjects, setVisibleProjects] = useState(getInitialVisibleProjects());
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const videoRefs = useRef([]);

  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth <= 768;
      if (newIsMobile !== isMobile) {
        setIsMobile(newIsMobile);
        setVisibleProjects(newIsMobile ? 2 : projects.length);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile, projects.length]);

  const handleShowMore = () => {
    setVisibleProjects(projects.length);
  };

  const handleMouseEnter = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].playbackRate = 2;
      videoRefs.current[index].play();
    }
  };

  const handleMouseLeave = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].pause();
      videoRefs.current[index].currentTime = 0;
      videoRefs.current[index].load();
    }
  };

  return (
    <div className="work-container">
      <div className="work-grid">
        {projects.slice(0, visibleProjects).map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="work-card-link"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <BackgroundGradient className="work-card-gradient-wrapper">
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={project.video}
                poster={project.poster}
                muted
                loop
                playsInline
                preload="auto"
                className="work-image" // Reusing the same class for styling consistency
              />
              <div className="work-content-wrapper">
                <p className="work-title">{project.name}</p>
                <p className="work-description">{project.description}</p>
                <button className="work-button">
                  <span>View Project </span>
                  <span className="work-button-price">
                    <span className="green-dot"></span>Live
                  </span>
                </button>
              </div>
            </BackgroundGradient>
          </a>
        ))}
      </div>
      {isMobile && visibleProjects < projects.length && (
        <button onClick={handleShowMore} className="show-more-button">
          Show More
        </button>
      )}
    </div>
  );
}
