import React from "react";
import {ScaleFade , Heading, Image, Link, SimpleGrid, Text, VStack, Center, Button } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import landingBreadCat from "../images/breadCat.png"
import ScrollDownImg from "../images/arrow.png"
const LandingBreadCat = () => {

    const handleClick = (anchor) => () => {
        const id = `${anchor}`;
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      };
    return (
        <>
        <FullScreenSection
            justifyContent="center"
            alignItems="center"
            isDarkBackground
            backgroundColor="#9d99bc">
            <Heading fontSize="5xl">
            <ScaleFade in={window} initialScale={0.9} delay={0.7}>ХЛЕБОКОТ</ScaleFade >
            </Heading>
            <ScaleFade in={window} initialScale={0.9} delay={1}><Text fontSize="2xl">Scroll Down</Text></ScaleFade >
            <ScaleFade in={window} initialScale={0.9} delay={1.5}><a onClick={handleClick("MainInfo")} href="#MainInfo"><Image src={ScrollDownImg} width={0.1} margin="auto" paddingTop={3}></Image></a></ScaleFade >
        </FullScreenSection>
        <FullScreenSection
        id="MainInfo">
        <SimpleGrid
        columns={1}
        justifyItems="center"
        >
        <VStack>
            <Text
            paddingY={8}
            textAlign="center" 
            fontSize="x-large"
            >
                Небольшой сайт, сделанный на классическом HTML и CSS, а также Bootstrap 5.<br/>
                <br/>
                Автор дизайн-проекта и анимации — <Link target="_blank" textDecorationStyle="dashed" textDecorationLine="underline" href="https://www.instagram.com/evin.designn">Ева Маркова</Link><br/>
                <br/>
                Сайт представляет собой курс для кота,<br/>
                который любил воровать хлеб и<br/>
                решил научить этому других котов.<br/>
                <br/>
                Код этого сайта доступен на моем <Link target="_blank" textDecorationStyle="dashed" textDecorationLine="underline" href="https://github.com/pe1ewin/breadcat">Github</Link><br/>
                
            </Text>
        </VStack>
        <Image 
        paddingY={8}
        src={landingBreadCat}
        alt="landingBreadCat"
        width="70%"
        />
        </SimpleGrid>
        </FullScreenSection>
        </>
    );
}
export default LandingBreadCat;