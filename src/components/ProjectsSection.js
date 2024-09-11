import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";
const projects = [
  {
    title: "BreadCat",
    description:
      "A simple site about cat that have their own course: How to thiev a bread? Built on bootstrap 5. Design layout by Eva Markova",
    getImageSrc: () => require("../images/breadCatPage.png"),
    link: "/breadcat",
  },
  {
    title: "Ninja Game on Python",
    description:
      "Simple game on python",
    getImageSrc: () => require("../images/ninja_game.png"),
    link:"#",
  },
  {
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    getImageSrc: () => require(""),
    link:"#",
  },
  {
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    getImageSrc: () => require(""),
    link:"#",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#9d99bc"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            link={project.link}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
