import React from "react";
import { Box, Button, Container, Image } from "@chakra-ui/react";
import { Center, Square, Circle } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Homepage = () => {
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
      <Container
        w="450px"
        h="500px"
        borderRadius="20px"
        bgColor={"whiteAlpha.600"}
      >
        <Image
          marginTop="30px"
          borderRadius="20px"
          src="https://img.freepik.com/free-vector/flat-golden-circle-balloons-birthday-background_52683-34659.jpg?size=626&ext=jpg"
          h={"390px"}
        />
        <Link to="/main">
          <Button
            marginTop={"15px"}
            colorScheme={"purple"}
            alignContent={"center"}
            alignItems={"center"}
            width={"100%"}
          >
            Click Here!
          </Button>
        </Link>
      </Container>
    </Center>
  );
};

export default Homepage;
