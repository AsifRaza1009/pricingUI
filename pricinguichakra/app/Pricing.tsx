import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Stack,
  StackProps,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Checkmarkicon } from "./Checkmarkicon";

export const ListItem = (props: StackProps) => {
  const { children, ...rest } = props;
  return (
    <HStack as='li' spacing='5' {...rest} align='flex-start'>
      <Icon as={Checkmarkicon} w='22px' h='22px' flexShrink='0'></Icon>
      <Text textAlign='left'>{children}</Text>
    </HStack>
  );
};
export default function Pricing() {
  return (
    <Box as='section' px='6'>
      <Box
        maxW='994px'
        margin='auto'
        mt='-40'
        borderRadius='xl'
        overflow='hidden'
        textAlign='center'
        boxShadow='0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'
      >
        <Flex direction={["column", "column", "column", "row"]}>
          <Box bg='#e5e3eb' color='black' p={["28px", "60px"]}>
            <Text fontWeight='bold' fontSize='xl'>
              Premium PRO
            </Text>
            <Heading fontSize={["5xl", "5xl", "5xl", "6xl"]} mt='4'>
              $329
            </Heading>
            <Text fontSize='lg' fontWeight='medium' mt='2'>
              billed just once
            </Text>
            <Button
              bg='purple.500'
              size='lg'
              color='white'
              w={["auto", "250px"]}
              mt='4'
            >
              Get Started
            </Button>
          </Box>

          <Box p={["32px", "32px", "60px"]} fontSize='lg' bg='white'>
            <Text textAlign='left'>
              Access these features when you get this pricing package for your
              business.
            </Text>
            <Stack as='ul' spacing='5' pt='6'>
              <ListItem>International calling and messaging API</ListItem>
              <ListItem>Additional phone numbers</ListItem>
              <ListItem>Automated messages via Zapier</ListItem>
              <ListItem>24/7 support and consulting</ListItem>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
