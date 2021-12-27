import React from 'react'
import { Box, Container, Flex, Heading, Text, Stack, Button, Center, VStack, Input, HStack, FormLabel, Divider, Textarea } from "@chakra-ui/react"
import { AiOutlineArrowRight } from 'react-icons/ai'
export default function support() {
    return (
        <Box>
          	<Container maxW='6xl'>
				<Box pt='20'>
					<Heading size='3xl'>Contact us</Heading>

					<Text mt='2' fontSize='sm' fontWeight='sm'>
                    We always here to responed to you
					</Text>
				</Box>
				</Container>
				<Divider mt='10' />
            <Flex justifyContent='space-around' pb='20' h='auto' >
                <VStack spacing='10' justifyContent='center' mt='20'>
                    <Box>
                        <Text fontWeight='bold' fontSize='2xl'>Get in touch</Text>
                    </Box>

                    <Box w='40'>
                        <FormLabel fontWeight='medium' fontSize='sm'>Phone</FormLabel>
                        <Text>+234 xxx xxx xxxx</Text>
                    </Box>

                    <Box w='40'>
                        <FormLabel fontWeight='medium' fontSize='sm'>Email</FormLabel>
                        <Text>Klasshour@gmail.com</Text>
                    </Box>
                    <Box w='40'>
                        <FormLabel fontWeight='medium' fontSize='sm'>Address</FormLabel>
                        <Text>72, obial road. london</Text>
                    </Box>
                </VStack>
                <Box mt='20' p='5' borderRadius='sm' border='1px solid #e2e8f0'>
                    <HStack>
                        <Box>
                            <FormLabel>First name:</FormLabel>
                            <Input color='gray.300' size='sm' />
                        </Box>
                        <Box>
                            <FormLabel>Last name:</FormLabel>
                            <Input color='gray.300' size='sm' />
                        </Box>
                    </HStack>
                    <Box>
                        <FormLabel>Email:</FormLabel>
                        <Input type='email' color='gray.300' size='sm' />
                    </Box>
                    <Box>
                        <FormLabel>Phone number:</FormLabel>
                        <Input type='number' color='gray.300' size='sm' />
                    </Box>
                    <FormLabel htmlFor='message'>Message</FormLabel>
                <Textarea maxH='20' id='message' />
                <Button w='28' bg='#161b45' color='white'>Send</Button>
                </Box>
            </Flex>
        </Box>
    )
}
