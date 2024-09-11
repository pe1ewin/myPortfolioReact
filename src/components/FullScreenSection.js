import * as React from "react";
import { VStack } from "@chakra-ui/react";

const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <VStack
      backgroundColor="#9d99bc"
      color={isDarkBackground ? "white" : "black"}
    >
      <VStack w="100%" minHeight="100vh" {...boxProps}>
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
