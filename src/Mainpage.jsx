import React from "react";
import { Box, Button, Container, Heading, Image } from "@chakra-ui/react";
import { Center, Square, Circle } from "@chakra-ui/react";
import pp1 from "./assets/pp1.jpg";
import { pp2 } from "./assets/pp2.jpg";
import { pp3 } from "./assets/pp3.jpg";
import { Link } from "react-router-dom";
const Mainpage = () => {
  return (
    <Center
      w="100vw"
      h="100vh"
      bgGradient={[
        "linear(to-tr, teal.300, yellow.400)",
        "linear(to-t, blue.200, teal.500)",
        "linear(to-b, orange.100, purple.300)",
      ]}
    >
      <Box
        w="900px"
        h="500px"
        borderRadius="20px"
        bgColor={"whiteAlpha.600"}
        display={"flex"}
        flexDirection={"column"}
      >
        <Heading marginX="auto" marginY="20px">
          Important Note!
        </Heading>
        <Image
          borderRadius="full"
          boxSize="250px"
          src={pp1}
          alt="Dan Abramov"
          marginX="auto"
          marginY="30px"
        />
        <Link to="/main2">
          <Button
            w={"50%"}
            marginX={"220"}
            colorScheme={"purple"}
            alignContent={"center"}
          >
            Please Go Ahead if you are same as this user!
          </Button>
        </Link>
      </Box>
    </Center>
  );
};

export default Mainpage;
