import React from 'react'
import Head from 'next/head'
import { Box, Heading, Text, Accordion, AccordionItem, AccordionIcon, AccordionButton, AccordionPanel, Flex, Icon } from "@chakra-ui/react"
import { RiArrowDownLine } from 'react-icons/ri'
import { AiFillMinusCircle } from 'react-icons/ai'
export default function request() {
    return (
        <>
            <Head>
                <title>FAQ | Klasshour</title>
                <link rel="icon" href="../img/home_logo.png" />
            </Head>
            <Box className="mycontainer" m="auto" my="90" className="content">
                <Box mb="10">
                    <Box>
                        <Heading as="h1" size="lg" isTruncated>
                            Frequently Asked Questions
                        </Heading>
                        <Text fontSize="lg">We are here to help, see some of our customer FAQs below.</Text>
                        <Accordion allowToggle mt="10">
                            <AccordionItem>
                                
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
                            <AccordionItem>
                                
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
                            <AccordionItem>
                               
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
                            <AccordionItem>
                               
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
                            <AccordionItem>
                               
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
                            <AccordionItem>
                                
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
                            <AccordionItem>
                                
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
