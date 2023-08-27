import {  Box, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box bgColor={"rgb(1,99,132)"} color={"whiteAlpha.900"} px={"16"} py={["16","8"]}>
        <Stack direction={["column","row"]}  alignItems={"center"}>
            <VStack width={"full"} alignItems={["center","flex-start"]}>
                <Text fontWeight={"bold"} >
                    About Us
                </Text>
                <Text fontSize={"sm"} letterSpacing={"widest"} textAlign={["center","left"]}>We are Best Crypto trading app We provide our Services at very Resonable Price</Text>
            </VStack>
        </Stack>
    </Box>
  )
}

export default Footer