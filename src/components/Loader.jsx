import { Box, Spinner, VStack } from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
  return (
    <VStack height={"90vh"} justifyContent={"center"}>
      <Box transform={"scale(3)"}>
      <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="rgb(1,99,132)"
          color="rgb(1,99,132,0.5)"
          size="lg"
        />
      </Box>
    </VStack>
  )
}

export default Loader