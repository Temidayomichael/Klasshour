import React from 'react'
import Head from 'next/head'
import { Box, Container, Flex, Heading, Text, Stack, Button, Center } from "@chakra-ui/react"
import { AiOutlineArrowRight } from 'react-icons/ai'
export default function request() {
    return (
        <>
             <Head>
                <title>Search | Klasshour</title>
                <link rel="icon" href="../img/home_logo.png" />
            </Head>
            <Flex>
                <Box mb="10" bg='#1a202c' h='350' w='55%' color='white'>
                    <Center pt='40' pr='20'>
                        <Container>

                        <Heading  size="2xl" isTruncated textAlign='left'>
                            Become A Tutor.
                        </Heading>
                        <Text fontSize="3xl" w='2xl'  fontWeight='bold'  >Offer your students the best you can.</Text>
                        
                        <Button mt='5' bg="#1a202c"
                            variant='outline'
                            rightIcon={<AiOutlineArrowRight />}
                            color="white" _hover={{ opacity: "0.9" }}
                            _active={{
                                bg: " #211221",

                            }}
                            size="sm">Apply now</Button>
                    
                        </Container>
                        
                    </Center>
                  

                </Box>
                {/* <Box h='500' w='45%'>
                    <img src='/img/illustrations/tutor.png' alt='Tutor' />
                </Box> */}
            </Flex>
                <Box bg="tomato" w="100%" p={4} color="white">
                        Search
                </Box>
            </>
    )
}
