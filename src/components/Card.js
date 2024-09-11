import { Heading, HStack, Image, Text, VStack, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, link }) => {
  
  return (
  <VStack bg='#eee' border="2px" borderColor="black" borderRadius='20px' align='initial'>
    <Image borderRadius='15px' border="1px" borderColor="black" src={imageSrc}/>
    <Heading paddingLeft='2' as='h4' size='md' color='black'>{title}</Heading>
    <Text paddingLeft='2' py='2' color='black'>{description}</Text>
    <Text paddingLeft='2' color='black' fontSize='sm' paddingBottom='3' fontWeight='600'>
      <Link href={link} target="_blank">See more <FontAwesomeIcon icon={faArrowRight} size="1x" /></Link>
    </Text>
  </VStack>
);
};

export default Card;
