import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import "../components/Nav.css"

const Header = () => {
  return (
    <HStack className='Nav' p={"4"} boxShadow='lg' bg={"white"} position={"-webkit-sticky"}>
      <Button variant={"unstyled"} color={"rgb(1,99,132)"}>
        <Link to={"/"}>Home</Link>
      </Button>
      <Button variant={"unstyled"} color={"rgb(1,99,132)"}>
        <Link to={"/coins"}>Coins</Link>
        </Button>
        <Button variant={"unstyled"} color={"rgb(1,99,132)"}>
        <Link to={"/exchanges"}>Exchanges</Link>
        </Button>
        
    </HStack>
  )
}

export default Header