import React from 'react'
import Head from 'next/head'
import { Box, Heading, Text, Accordion, Container, Button, AccordionItem, AccordionIcon, AccordionButton, VStack, AccordionPanel, Flex, Icon, Center } from "@chakra-ui/react"
import { RiArrowDownLine } from 'react-icons/ri'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Carousel from 'nuka-carousel';
export default function request() {
    return (
        <>
            <Head>
                <title>FAQ | Klasshour</title>
                <link rel="icon" href="../img/home_logo.png" />
            </Head>
            <Flex >
                <Box bg='#1a202c' h='300' w='100vw' color='white'>

                    <Container maxW='5xl'>
                        <Box>


                            <Flex pt='20' justifyContent='space-between' alignItems='center'>
                                <Flex flexDirection='column'>
                                    <Text fontSize='sm' fontWeight='light'>Ask questions, improves your learning</Text>
                                    <Heading isTruncated pt='2'>
                                        Frequently Asked Questions
                                    </Heading>
                                </Flex>
                                <Text fontWeight='light'>We are here to help, see some of<br /> our customer FAQs below.</Text>


                            </Flex>
                        </Box>
                    </Container>

                </Box>
                {/* <Box h='500' w='45%'>
                    <img src='/img/illustrations/tutor.png' alt='Tutor' />
                </Box> */}
            </Flex>
           

            <Box className="mycontainer" m="auto" my="90" className="content">
                <Box mb="10">
                    <Box>

                        <Accordion allowToggle mt="10">
                            <AccordionItem p='5'>

                                <h2>
                                    <AccordionButton _focus={{
                                        border: "0"
                                    }}>
                                        <Box w="90%" d='flex' >

                                            <Text pl='10' fontSize='lg' fontWeight='medium'>
                                                How do i signup to Klasshour?
                                            </Text>
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel d='flex' alignItems='center' pb={4} >

                                    <Text pl='10'>
                                        You can signup to Klasshour by clicking on the register button.
                                    </Text>
                                </AccordionPanel>

                            </AccordionItem>
                            <AccordionItem p='5'>

                                <h2>
                                    <AccordionButton _focus={{
                                        border: "0"
                                    }}>
                                        <Box w="90%" d='flex' >

                                            <Text pl='10' fontSize='lg' fontWeight='medium'>
                                                How do i signup to Klasshour?
                                            </Text>
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel d='flex' alignItems='center' pb={4} >


                                    <Text pl='10'>
                                        You can signup to Klasshour by clicking on the register button.
                                    </Text>
                                </AccordionPanel>


                            </AccordionItem>
                            <AccordionItem p='5'>

                                <h2>
                                    <AccordionButton _focus={{
                                        border: "0"
                                    }}>
                                        <Box w="90%" d='flex' >

                                            <Text pl='10' fontSize='lg' fontWeight='medium'>
                                                How do i signup to Klasshour?
                                            </Text>
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel d='flex' alignItems='center' pb={4} >


                                    <Text pl='10'>
                                        You can signup to Klasshour by clicking on the register button.
                                    </Text>
                                </AccordionPanel>


                            </AccordionItem>
                            <AccordionItem p='5'>

                                <h2>
                                    <AccordionButton _focus={{
                                        border: "0"
                                    }}>
                                        <Box w="90%" d='flex' >

                                            <Text pl='10' fontSize='lg' fontWeight='medium'>
                                                How do i signup to Klasshour?
                                            </Text>
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel d='flex' alignItems='center' pb={4} >


                                    <Text pl='10'>
                                        You can signup to Klasshour by clicking on the register button.
                                    </Text>
                                </AccordionPanel>


                            </AccordionItem>
                            <AccordionItem p='5'>

                                <h2>
                                    <AccordionButton _focus={{
                                        border: "0"
                                    }}>
                                        <Box w="90%" d='flex' >

                                            <Text pl='10' fontSize='lg' fontWeight='medium'>
                                                How do i signup to Klasshour?
                                            </Text>
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel d='flex' alignItems='center' pb={4} >


                                    <Text pl='10'>
                                        You can signup to Klasshour by clicking on the register button.
                                    </Text>
                                </AccordionPanel>


                            </AccordionItem>
                        </Accordion>

                    </Box>

                </Box>
            </Box>
        </>
    )
}
