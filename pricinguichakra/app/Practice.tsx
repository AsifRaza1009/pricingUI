import { Button, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export default function practice() {
  return (
    <div>
        <h1 style={{color : "blue"}}>Hello World from h1</h1> 
    
    <Heading fontSize={25}>This is a heading from chakra</Heading>
    <Heading fontSize={20} color ="red" bg={"green"} pt="5px" pb ="5px" mt ="5px" border= "2px solid red" borderRadius="250px ">
      This is a heading from chakra</Heading>
      <Text> hello world from chakra</Text>
      <br />
      <Button>Update</Button></div>
  )
}
