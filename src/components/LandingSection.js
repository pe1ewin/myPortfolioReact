import React from "react";
import { Avatar, Heading, VStack, useDisclosure } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { TypeAnimation } from 'react-type-animation';

const greeting = "Pelewin";
const bio = "A junior frontend developer";
const skill_list = "Skills:";
const skill1 = "React.js";
const skill2 = "Python";
const skill3 = "Bootstrap 5";
const skill4 = "HTML";
const skill5 = "CSS";
const skill6 = "Java Script";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#9d99bc"
  >
    <VStack>
    <Avatar size="2xl" src='https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTkyajJzcmtxNmRkNDJraWJtZHp0YTgxeHBueDZycHYzdGN5Y25ubyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/HscDLzkO8EOTmgkhQP/giphy.gif'></Avatar>
    <Heading>{greeting}</Heading>
    <Heading>{bio}</Heading>
    <Heading>{skill_list}</Heading>
    <Heading>
      <TypeAnimation
        sequence={[
          skill1,
          1000,
          skill2,
          1000,
          skill3,
          1000,
          skill4,
          1000,
          skill5,
          1000,
          skill6,
          1000,
        ]}
        speed={20}
        style={{ fontSize: '2em' }}
        repeat={Infinity}
      />
    </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
