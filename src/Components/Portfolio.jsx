/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "City Book Centre",
    description:
      "This project is done to manage a Book Store. This project will aid the shop owners to manage their book stores. ",
    url: "https://github.com/saqlainrai/City-Book-Centre.git",
  },
  {
    title: "Astro Assault",
    description:
      "Astro Assault is a classic space shooting game that will take you on a journey through the cosmos. In this console-based, text-based adventure, you play as a daring space pilot tasked with defending the galaxy from an alien invasion.",
    url: "https://github.com/saqlainrai/AstroAssault",
  },
  {
    title: "Pharma Distribution System",
    description:
      "This project aim to streamline the flow of medicine distribution system, and aid the medical complexes to receive the medicine on time.",
    url: "https://gitlab.com/dsa-lab/finalproject.git",
  },
  {
    title: "Store Management System",
    description:
      "This project was designed to manage the records of a general stores. This was a DB project and including the designing the database and querying the useful data from database.",
    url: "https://gitlab.com/saqlainrai/dbfinalpid-3.git",
  },
];

const Projects = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Projects</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
