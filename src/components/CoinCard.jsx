import React from 'react'
import { Link } from 'react-router-dom';
import {
  HStack,
    Heading,
    Image,
} from "@chakra-ui/react";



const CoinCard = ({ id, img, symbol}) => {
    

    return (<Link to={`coins/${id}`}>
      <HStack
        w={"52"}
        shadow={"lg"}
        p={"8"}
        borderRadius={"lg"}
        transition={"all 0.3s"}
        m={"4"}
        cursor={"pointer"}
        css={{
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      >
        <Image
          src={img}
          w={"10"}
          h={"10"}
          objectFit={"contain"}
          alt={"Exchange"}
        />
        <Heading size={"md"} noOfLines={1}>
          {symbol}
        </Heading>

        
      </HStack>
    </Link>)
};

export default CoinCard