import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: pelewin@proton.me",
  },
  {
    icon: faGithub,
    url: "https://github.com/pe1ewin",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/gpelevvin/",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const headerSection = useRef(0);
  const [scrollUp, setScrollUp] = useState(0);
  useEffect(() =>{
    function scrollPage() {
      let activePos = window.pageYOffset;
      if (activePos > scrollUp) {
        headerSection.current.style.transform = 'translateY(-200px)';
      } else {
        headerSection.current.style.transform = 'translateY(0px)';
      }
      setScrollUp(activePos <= 0 ? 0 : activePos);
      }
      window.addEventListener("scroll", scrollPage);
      return () => window.removeEventListener("scroll", scrollPage);

  }, [scrollUp]);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".5s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={headerSection}
    >  
      <Box color="white" w="100%" margin="0 auto">
        <HStack
          px={5}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing="6">
              {
                socials.map( (social, index) => (<a href={social?.url} key={index}><FontAwesomeIcon icon={social.icon} size="2x" /></a>))
              }
            </HStack>
          </nav>
          <nav>
            <HStack fontSize="md" spacing={6}>
              <a onClick={handleClick('projects')} href='/#projects'>Projects</a>
              <a onClick={handleClick('contactme')} href='/#contact-me'>Contact me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
