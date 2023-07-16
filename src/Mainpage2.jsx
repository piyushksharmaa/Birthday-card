import React from "react";
import { Box, Button, Container, Heading, Image, Text } from "@chakra-ui/react";
import { Center, Square, Circle } from "@chakra-ui/react";
import pp1 from "./assets/pp1.jpg";
import { pp2 } from "./assets/pp2.jpg";
import { pp3 } from "./assets/pp3.jpg";
import { Link } from "react-router-dom";
const Mainpage2 = () => {
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
        <Box
          w="800px"
          h="450px"
          m="auto"
          borderRadius="20px"
          bgColor={"whiteAlpha.800"}
        >
          <Text marginY={"25px"} marginX={"30px"}>
            Happy Birthday Sachin!❤️❤️ Janamdin ki bhut bhut mubarak ho.....🎉🎉
            Aurrr btaao How's birthday going?? <br />
            Tumhe lgaa hogaa main tumhaara birthday bhul gyaa lekin aisaa ho
            sktaa hai bhalaa....😉 Bhut dino se tumse baat nhi hui toh sochaa
            kuch khaas kiyaa jaaye aaj
            <br /> Thodaa time lg gyaa issi me firr...🥲 <br />
            Wo sab chhodo yeh btaao kaise ho?? Sab badhiyaa naa? Aaj toh
            Birthday hai party sharty horhi hogi hainaa
            <br />
            Merko bhi momos khaane hai😪😤
            <br />
            Jab udhar aaunga toh party krrenge... Theek?
            <br />
            Abhi I know tum bhi tayaari krrhe ho lekin koi nhi ek baar dono ka
            achhi achhi jagah hojaaye uske baad ghumne chalenge😂🙂
            <br />
            Aurr mehnat krrte rho... Mehnat kabhi waste nhi jaati🫂
            <br /> Baaki Janamdin ki bhut saari badhaai ho aurr humeshaa khush
            rho ek dum mast❤️
            <br />
            Kabhi bhi koi baat pareshaan krre toh mujhe zarur btaana bhale hi
            usse solve naa krr paau lekin saath zarur rhunga... Okay?
            <br /> In the end.... Happy Birthday Sachin❤️.... Bhagwan se yehi
            duaa hai ki tumhaari saari wishes puri ho aurr tum humeshaa khush
            rho😉🫂
          </Text>
        </Box>
      </Box>
    </Center>
  );
};

export default Mainpage2;
