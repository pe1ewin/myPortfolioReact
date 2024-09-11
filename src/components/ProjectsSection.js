import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import Card from "./Card";
let screenWidth = window.innerWidth;
let columnCount = 2;
if (screenWidth > 1280) {
  columnCount = 2
} else {
  columnCount = 1
};

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
      <SimpleGrid columns={columnCount} gap={10}>
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            link={project.link}
          />
        ))}
      </SimpleGrid>
    </FullScreenSection>
  );
};

export default ProjectsSection;
