import React from "react";
import FullScreenSection from "./FullScreenSection";
import ninjaMainPic from "../images/ninjaMain.png"
import { Image, HStack, Fade, SimpleGrid, GridItem, Text} from "@chakra-ui/react";
import ninja1 from "../images/ninja1.png";
import ninja2 from "../images/ninja2.png";
import ninja3 from "../images/ninja3.png";
import ninja4 from "../images/ninja4.png";
import ninja5 from "../images/ninja5.png";
import ImageSlider from "./ImageSlider";
let screenWidth = window.innerWidth;
let columnCount = 2;
if (screenWidth > 1280) {
    columnCount = 2
  } else {
    columnCount = 1
  };
const NinjaImages = [ninja1, ninja2, ninja3, ninja4, ninja5]
const LandingNinja = () => {
    return (
        <>
        <FullScreenSection>
        <HStack justifyContent="center" alignContent="center" margin={0}>
        <SimpleGrid paddingX="1rem" columns={columnCount}>
        <GridItem style={{minWidth: "90%", paddingTop: "5rem"}}><Fade delay={0.7} in={window}><Image borderRadius={25} src={ninjaMainPic}></Image></Fade></GridItem>
        <GridItem paddingX="1rem" style={{ paddingTop: "5rem", textAlign: "center"}}><Fade delay={0.7} in={window}>
            <Text paddingY={3} fontSize="x-large">Путь ниндзя: Тайна древнего храма</Text>
            <Text paddingY={3} fontSize="x-large">Это компьютерная игра, написанная на Python с использованием библиотеки Pygame</Text>
            <Text paddingY={3}fontSize="x-large">Игра представляет собой простой 2D файтинг и лёгкую сюжетную линию, на данный момент только один сюжетный уровень и один уровень файтинга.</Text>
            </Fade></GridItem>
        </SimpleGrid>
        </HStack>
        <HStack paddingY="2rem">
        <Fade delay={0.7} in={window}><ImageSlider ImageUrls={NinjaImages} /></Fade>
        </HStack>
        </FullScreenSection>
        </>
    );
}

export default LandingNinja;