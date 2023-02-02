import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function Header() {
  return (
    <Box
      textAlign={["left", "left", "left", "center"]}
      color={["gray.50"]}
      bg='purple.600'
      pt={["60px", "60px", "60px", "90px"]}
      pb={["176px", "176px", "176px", "198px"]}
      px="8"

    >
      <Heading fontSize={["3xl","3xl","3xl","5xl"]} fontWeight={["extrabold"]} >Simple pricing for your business</Heading>
      <Text fontSize={["lg","lg","lg","2xl"]} fontWeight={["medioum"]} pt={["5","5","5","4"]}>
        Plans that are carefully crafted to suit your business.
      </Text>
    </Box>
  );
}
