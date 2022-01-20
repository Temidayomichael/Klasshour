import React from 'react'
import { Box, Container, Flex, Heading, Text, Stack, Button, Center, VStack, Input, HStack, FormLabel, Divider, Textarea } from "@chakra-ui/react"
import { AiOutlineArrowRight } from 'react-icons/ai'
export default function support() {
    return (
        <Box w={['8xl', '8xl', '9xl', '9xl', '100%']} bg='#f7fafc'>
            <Container maxW='6xl'>
                <Box pt={['56', '40', '40', '20', '20', '20']} textAlign={['center', '', 'center', 'center', 'left']} h={['auto', '25rem', '30rem', '20rem', '', '15rem']}>
                    <Heading fontSize={['9xl', '8xl', '8xl', '6xl', '5xl']} color='#161B45'>Contact us</Heading>

                    <Text mt={['20', '2']} color='black' fontSize={['7xl', '5xl', '6xl', '4xl', 'xl']} fontWeight='sm'>
                        We always here to responed to you
                    </Text>
                </Box>
            </Container>
            <Divider mt='10' borderColor='gray.400' />
            <Flex alignItems='center' w='7xl' justifyContent='space-around' flexDirection={['column', 'row']} pb='20' h='auto' >
                <VStack w='96' spacing={['40', '10']} justifyContent='center' mt={['40', '20']}>
                    <Box>
                        <Text fontWeight='bold' w={['4xl', '', '72', '', '40']} fontSize={['8xl', '', '5xl', '', '2xl']}>Get in touch</Text>
                    </Box>

                    <Box w={['4xl', '', '96', '', '48']} mt={['20', '20']}>
                        <FormLabel fontWeight='medium' fontSize={['8xl', '', '4xl', '', 'sm']}>Phone:</FormLabel>
                        <Text fontSize={['7xl', '', '4xl', '', 'xl']}>+234 xxx xxx xxxx</Text>
                    </Box>

                    <Box  w={['4xl', '', '96', '', 'auto']}>
                        <FormLabel fontWeight='medium' fontSize={['8xl', '', '4xl', '', 'sm']}>Email:</FormLabel>
                        <Text fontSize={['7xl', '', '4xl', '', 'xl']}>Klasshour@gmail.com</Text>
                    </Box>
                    <Box w={['4xl', '', '96', '', 'auto']}>
                        <FormLabel fontWeight='medium' fontSize={['8xl', '', '4xl', '', 'sm']}>Address:</FormLabel>
                        <Text fontSize={['7xl', '', '4xl', '', 'xl']}>72, obial road. london</Text>
                    </Box>
                </VStack>
                <Box mt={['60', '20']} p={['20', '5']} borderRadius='sm' border={['2px solid #e2e8f0', '1px solid #e2e8f0']} w={['5xl', 'auto']}>
                    <Flex justifyContent={['', 'space-between']} flexDirection={['column', 'row']}>
                        <Box>
                            <FormLabel fontSize={['8xl', '5xl', '4xl', '', '16']}>First name:</FormLabel>
                            <Input mr='5'color='gray.400' fontSize={['6xl', 'sm']} w={['4xl', 'xl', '80', '44', '44']} h={['28', '', '16', '', '8']}  size='sm' />
                        </Box>
                        <Box>
                            <FormLabel fontSize={['8xl', '5xl', '4xl', '', '16']}>Last name:</FormLabel>
                            <Input w={['4xl', 'xl', '80', '44', '44']} h={['28', '', '16', '', '8']} fontSize={['6xl', 'sm']} color='gray.400' size='sm' />
                        </Box>
                    </Flex>
                    <Box>
                        <FormLabel fontSize={['8xl', '', '4xl', '', '16']}>Email:</FormLabel>
                        <Input type='email' fontSize={['6xl', '', '', '', 'sm']} color='gray.400' w={['4xl', '5xl', '2xl', '96', '96']} h={['28', '', '20', '', '8']} size='sm' />
                    </Box>
                    <Box>
                        <FormLabel fontSize={['8xl', '', '4xl', '', '16']}>Phone number:</FormLabel>
                        <Input type='phone' fontSize={['6xl', 'sm']} color='gray.400' w={['4xl', '', '2xl', '96', '96']} h={['28', '', '16', '', '8']} size='sm' />
                    </Box>
                    <FormLabel fontSize={['8xl', '', '4xl', '', '16']} htmlFor='message'>Message</FormLabel>
                    <Textarea minH='28' color='gray.400' fontSize={['6xl', 'sm']} id='message' />
                    <Button w={['80', '28']} mt={['20', '10']} p={['16', '5']} bg='#161b45' fontSize={['8xl', '', '3xl', '', 'sm']} color='white'>Send</Button>
                </Box>
            </Flex>

        </Box>
    )
}