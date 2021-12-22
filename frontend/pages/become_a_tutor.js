import React from 'react'
import Head from 'next/head'
import { Box, Container, Flex, Heading, Text, Stack, Button, Center } from "@chakra-ui/react"
import { AiOutlineArrowRight } from 'react-icons/ai'
import Carousel from 'nuka-carousel';
import Image from 'next/image'
export default function Become_a_tutor() {

    return (
        <>
            <Head>
                <title>Become A Tutor | Klasshour</title>
                <link rel="icon" href="../img/home_logo.png" />
            </Head>
            <Box bg='#1a202c' h='300'  color='white'>

                <Container maxW='5xl'>
                    <Box>


                        <Flex pt='20' justifyContent='space-between' alignItems='center'>
                            <Heading isTruncated>
                                Become A Tutor.
                            </Heading>
                            <Text fontSize="sm" fontWeight='light' >Offer your students the best you can.</Text>
                        </Flex>
                        <Button mt='5' bg="#161B45"
                            variant='outline'
                            rightIcon={<AiOutlineArrowRight />}
                            color="white" _hover={{ opacity: "0.9" }}
                            _active={{
                                bg: " #211221",

                            }}
                            size="sm">Sign me up</Button>

                    </Box>
                </Container>

            </Box>
            <Box pt='20' className="mycontainer" m="auto" className="content" >
                <Stack pr='20'>
                    <>


                        {/* <Box>
                            <Flex justifyContent='space-around' borderTop='1px solid lightgrey' alignItems='center' m='10' width='100%' h='150px'>

                                <Box>
                                <img src='' alt='Image' width='200px'/>
                                   
                                </Box>
                                <Box maxW='250px' textAlign='left'>
                                    <Text fontWeight='medium' fontSize='xl'>Teach online</Text>
                                    <Text>Get through to your students anytime anywhere </Text>
                                </Box>

                            </Flex>
                        </Box> */}
                        <Box>
                            <Flex justifyContent='space-around' alignItems='center' m='10' width='100%' h='150px'>
                                <Box maxW='250px' textAlign='left'>
                                    <Text fontWeight='medium' fontSize='xl'>Get started for free</Text>
                                    <Text fontSize='md'>Signing up to being a tutor in Klasshour is free</Text>
                                </Box>
                                <Box>
                                    <img href="../img/logo.svg" alt='Get started'></img>
                                   
                                </Box>


                            </Flex>
                        </Box>

                        <Box>
                            <Flex justifyContent='space-around' borderTop='1px solid lightgrey' alignItems='center' m='10' width='100%' h='150px'  >
                                <Box>
                                {/* <Image src="../img/illustration/Get_paid.svg" alt='management system' height='300' width='700px' /> */}
                                 
                                </Box>
                                <Box maxW='250px' textAlign='left'>
                                    <Text fontWeight='medium' fontSize='xl'>Teach Anywhere Anytime</Text>
                                    <Text>Get through to your students online. </Text>
                                </Box>
                            </Flex>
                        </Box>
                        <Box>
                            <Flex justifyContent='space-around' borderTop='1px solid lightgrey' alignItems='center' width='100%' m='10' h='150px' >
                                <Box maxW='250px'>
                                    <Text fontWeight='medium' fontSize='xl'>State your price</Text>
                                    <Text>Get through to your students online. </Text>
                                </Box>
                                <Box>
                                    <img href="../img/Education.png"></img>
                                    Image
                                </Box>

                            </Flex>
                        </Box>
                        <Box>
                            <Flex justifyContent='space-around' borderTop='1px solid lightgrey' alignItems='center' width='100%' m='10' h='150px'  >

                                <Box>
                                    <img href="../img/Education.png"></img>
                                    Image
                                </Box>
                                <Box maxW='250px' textAlign='left'>
                                    <Text fontWeight='medium' fontSize='xl'>Get pain with ease</Text>
                                    <Text>Get through to your students online. </Text>
                                </Box>
                            </Flex>
                        </Box>
                        <Box>
                            <Flex justifyContent='space-around' borderTop='1px solid lightgrey' alignItems='center' width='100%' m='10' h='150px' >
                                <Box maxW='250px'>
                                    <Text fontWeight='medium' fontSize='xl'>Get reviews</Text>
                                    <Text>Get through to your students online. </Text>
                                </Box>
                                <Box>
                                    <img href="../img/Education.png"></img>
                                    Image
                                </Box>

                            </Flex>
                        </Box>

                    </>
                </Stack>


            </Box>


            <Box bg='gray.100'>
                <Text textAlign='center' fontWeight='bold' fontSize='4xl'>What tutors say</Text>
                <Carousel getControlsContainerStyles={(key) => {
                    switch (key) {
                        case 'TopRight':
                            return {
                                backgroundColor: "red",
                            };
                        default:
                        // will apply all other keys

                    }
                }} slidesToShow={'2.0'}
                    autoplay={true}>

                    <Box p='9' w='100%' h='450px'>
                        <Flex>
                            <Box boxSize='32' m='2' border='1px solid black'></Box>
                            <Text p='9' textAlign='left' fontSize='xs' >PRESHAYLA, PHYSICS TUTOR, LOUGHBOROUGH</Text>
                        </Flex>
                        <Text p='5' mt='14' fontSize='sm'>
                            The fact everything's online is
                            perfect for me, as I travel between
                            home and uni a lot so could never
                            commit to a regular job - not to
                            mention the skills I’ve developed
                            that I can put on my CV. More
                            than anything though, it’s so
                            rewarding - it makes me so proud
                            to know I am making an actual difference.

                        </Text>

                    </Box>
                    <Box p='9' w='100%' h='450px'>
                        <Flex>
                            <Box boxSize='32' m='2' border='1px solid black'></Box>
                            <Text p='5' textAlign='left' fontSize='xs' >VICKI, ENGLISH TUTOR, YORK</Text>
                        </Flex>
                        <Text p='5' mt='14' fontSize='sm'>
                            MyTutor has given me an opportunity
                            to tutor a number of different subjects,
                            both privately and through the Schools
                            programme. For me, it is a great part
                            time job as it's flexible and ideal
                            alongside studying at uni.
                        </Text>

                    </Box>


                    <Box p='9' w='100%' h='450px'>
                        <Flex>
                            <Box boxSize='32' m='2' border='1px solid black'></Box>
                            <Text p='5' textAlign='left' fontSize='xs' >ALANA, MATHS TUTOR, LEEDS</Text>
                        </Flex>
                        <Text p='5' mt='14' fontSize='sm'>
                            I’ve worked for MyTutor for 3 and a
                            half years and the platform has gone
                            from strength to strength. What impresses
                            me the most is the quality of the online
                            classroom.
                        </Text>

                    </Box>
                    <Box p='9' w='100%' h='450px'>
                        <Flex>
                            <Box boxSize='32' m='2' border='1px solid black'></Box>
                            <Text p='5' textAlign='left' fontSize='xs' >KATIE, FRENCH TUTOR, BATH</Text>
                        </Flex>
                        <Text p='5' mt='14' fontSize='sm' >
                            MyTutor has given me and new lease of life, allowing me to do the job that I love.

                        </Text>

                    </Box>

                </Carousel>
            </Box>
        </>

    )
}
