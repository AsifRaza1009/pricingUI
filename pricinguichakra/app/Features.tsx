import { Box, HStack, Icon, Stack, StackProps, Text } from "@chakra-ui/react";
import React from "react";
import { Icon1, Icon2, Icon3 } from "./Checkmarkicon";

interface FeatureProps extends StackProps {
  icon: React.ElementType;
}

export const Feature = (props: FeatureProps) => {
  const { children, icon, ...rest } = props;
  return (
    <HStack spacing='5' {...rest} align='flex-start'>
      <Icon as={icon} boxSize={["8", "8", "8", "12"]} flexShrink='0'></Icon>
      <Text textAlign='left' fontSize='lg' fontWeight='bold'>
        {children}
      </Text>
    </HStack>
  );
};

export default function Features() {
  return (
    <Box maxW='900px' margin='auto' pt='60px' pb='8px' as='section'>
      <Stack
        px='12px'
        spacing='6'
        direction={["column", "column", "column", "row"]}
        margin='auto'
        w={["auto", "480px", "480", "auto"]}
      >

<Feature icon={Icon1}>30 days money back Guarantee</Feature>
<Feature icon={Icon2}>No setup fees
100% hassle-free</Feature>
<Feature icon={Icon3}>No monthly subscription
Pay once and for all</Feature>


      </Stack>
    </Box>
  );
}
