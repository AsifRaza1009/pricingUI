"use client"

import { Button, ChakraProvider, Heading, Text } from '@chakra-ui/react'
import Features from './Features'
import Header from './Header'
import Pricing from './Pricing'

export default function Home() {
  return (
    <ChakraProvider>
  <Header />
   <Pricing /> 
   <Features />
  </ChakraProvider> 
  )
}
