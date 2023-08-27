import React from "react";
import { HStack, Stack, Text, Heading, VStack } from "@chakra-ui/react";
import News from "./News";

const Home = () => {
  
  return (
    <Stack
      w={"full"}
      display={"flex"}
      flexDirection={["column", "row"]}
      bgColor={"whiteAlpha.900"}
      h={["full","74vh"]}
    >
      <VStack
        width={["100%", "70%"]}
        bg={"whiteAlpha.200"}
        height={"100%"}
        pl={["10px", "60px"]}
        pt={["0", "40px"]}
      >
        <Stack w={"full"}>
          <Heading
            fontSize={["6xl", "9xl"]}
            color={"rgb(1,99,132)"}
            fontFamily={"'Qwitcher Grypen', cursive"}
          >
            CryptoGraphy
          </Heading> 
          <Text fontSize={["16px"]} color={"black"} fontFamily={"'Ubuntu', sans-serif"}>
            A cryptocurrency is a digital currency, which is an alternative form
            of payment created using encryption algorithms. The use of
            encryption technologies means that cryptocurrencies function both as
            a currency and as a virtual accounting system. To use
            cryptocurrencies, you need a cryptocurrency wallet. These wallets
            can be software that is a cloud-based service or is stored on your
            computer or on your mobile device. The wallets are the tool through
            which you store your encryption keys that confirm your identity and
            link to your cryptocurrency. What are the risks to using
            cryptocurrency? Cryptocurrencies are still relatively new, and the
            market for these digital currencies is very volatile. Since
            cryptocurrencies don't need banks or any other third party to
            regulate them; they tend to be uninsured and are hard to convert
            into a form of tangible currency (such as US dollars or euros.) In
            addition, since cryptocurrencies are technology-based intangible
            assets, they can be hacked like any other intangible technology
            asset. Finally, since you store your cryptocurrencies in a digital
            wallet, if you lose your wallet (or access to it or to wallet
            backups), you have lost your entire cryptocurrency investment.
          </Text>
        </Stack>
      </VStack>
      <HStack width={["full", "50%"]}>
        <News />
      </HStack>
    </Stack>
  );
};

export default Home;
