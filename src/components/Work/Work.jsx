import React, { useState, useEffect } from "react";
import { BackgroundGradient } from "./BackgroundGradient";
import "./Work.scss";

export default function Work() {
  const projects = [
     {
      name: "Remake K27",
      description: "Remaking the award-winning K27",
      image: "/images/k27.png",
      url: "https://k72-mu.vercel.app//",
    },
    {
      name: "MicroBazzar",
      description: "Feature-rich e-commerce platform using a Microservices architecture",
      image: "/images/microbazzar.png",
      url: "https://github.com/priyanshu-samal/microBazaar",
    },
    {
      name: "Destiny",
      description: "AI-powered travel planner that creates personalized itineraries with maps, photos, and trip management.",
      image: "/images/Destiny.png",
      url: "https://destiny-delta.vercel.app/",
    },
     {
      name: "SpotiyOnTerminal",
      description: "Built a Rust CLI that controls Spotify 🎶, playlists right from the terminal",
      image: "/images/rust.png",
      url: "https://github.com/priyanshu-samal/spotifytermrust",
    },
    {
      name: "BuildMvpFast",
      description: "WE build MVP for Founders.",
      image: "/images/BuildMvpFast.png",
      url: "https://mvp-genesis-launchpad.vercel.app/",
    },
    {
      name: "SnitchRedesign",
      description: "Redesigned platform UI for hackathon submissions, improving clarity and usability.",
      image: "/images/SnitchRebrand.png",
      url: "https://hackathonsnitch.vercel.app/",
    },
    {
      name: "Wordsmith",
      description: "AI SaaS tool for generating content like blogs, posts, and threads in seconds.",
      image: "/images/Wordsmith.png",
      url: "https://wordsmith-gilt.vercel.app/",
    },
    {
      name: "Hissab",
      description: "Expense and billing tracker for managing personal and shared finances.",
      image: "/images/Hissab.png",
      url: "https://hissab.vercel.app/sign-in",
    },
    {
      name: "PeriskopeChat",
      description: "Real-time chat app with filters, group chat, and member assignments.",
      image: "/images/Periskope.png",
      url: "https://periskopechat.vercel.app/login",
    },
     {
      name: "Easynotes",
      description: "PDF Color Inverter for Students.",
      image: "/images/Easynotes.png",
      url: "https://www.easynotes.space/",
    },
  ];

  const getInitialVisibleProjects = () => {
    return window.innerWidth <= 768 ? 2 : projects.length;
  };

  const [visibleProjects, setVisibleProjects] = useState(getInitialVisibleProjects());
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setVisibleProjects(projects.length); // Show all projects on desktop/tablet
      } else {
        // If switching to mobile, and all projects are currently visible, reset to initial mobile view
        if (visibleProjects === projects.length) {
          setVisibleProjects(2);
        }
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [projects.length, visibleProjects]); // Added visibleProjects to dependency array

  const handleShowMore = () => {
    setVisibleProjects(projects.length);
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
          >
            <BackgroundGradient className="work-card-gradient-wrapper">
              <img
                src={project.image}
                alt={project.name}
                height="400"
                width="400"
                className="work-image"
              />
              <div className="work-content-wrapper">
                <p className="work-title">{project.name}</p>
                <p className="work-description">{project.description}</p>
                <button className="work-button">
                  <span>View Project </span>
                  <span className="work-button-price">Live</span>
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
