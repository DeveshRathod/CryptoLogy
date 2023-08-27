import { Box, Spinner, VStack } from "@chakra-ui/react";
import React from "react";

const Loader2 = () => {
  return (
    <VStack >
      <Box transform={"scale(4)"}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="rgb(1,99,132)"
          size="lg"
        />
      </Box>
    </VStack>
  );
};

export default Loader2;
