import React from 'react'
import Head from 'next/head'
import {
	Box,
	Container,
	Flex,
	Heading,
	Text,
	Stack,
	Divider,
	Center,
	Image
} from '@chakra-ui/react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Carousel from 'nuka-carousel'
export default function Become_a_tutor() {
	return (
		<>
		
				<Head>
					<title>Become A Tutor | Klasshour</title>
					<link rel='icon' href='../img/home_logo.png' />
				</Head>
				<Container maxW='6xl'>
				<Box pt='20'>
					<Heading size='3xl'>Become A Tutor.</Heading>

					<Text mt='2' fontSize='sm' fontWeight='sm'>
						Offer your students the best you can.
					</Text>
				</Box>
				</Container>
				<Divider mt='10' />
				<Stack pb='12'>
				
					<Center minH='500px'>
					<Container maxW='6xl'>
						<Flex w='100%' justifyContent='space-between' alignItems='center'>
							<Box maxW='250px' textAlign='left'>
								<Text fontWeight='medium' fontSize='xl'>
									Get started for free
								</Text>
								<Text fontSize='md'>
									Signing up to being a tutor in Klasshour is free
								</Text>
							</Box>
							<Box>
								<img
									src='../img/illustrations/get_started.svg'
									alt='Get started'
									height={50}
									width={350}></img>
							</Box>
						</Flex>
						</Container>
					</Center>
						<Center minH='500px' bg='#ebf8ff'>
						<Container maxW='6xl'>
						<Flex w='100%' justifyContent='space-between' alignItems='center'>
							<Box>
								<img
									src='./img/illustrations/Teach_anywhere.svg'
									alt='Teach_anywhere'
									height={50}
									width={350}></img>
							</Box>
							<Box maxW='250px' textAlign='left'>
								<Text fontWeight='medium' fontSize='xl'>
								Teach Anywhere Anytime
								</Text>
								<Text fontSize='md'>
								Get through to your students online. 
								</Text>
							</Box>
						</Flex>
						</Container>
					</Center>
					<Center minH='500px'>
					<Container maxW='6xl'>
						<Flex w='100%' justifyContent='space-between' alignItems='center'>
							<Box maxW='250px' textAlign='left'>
								<Text fontWeight='medium' fontSize='xl'>
								State your price
								</Text>
								<Text fontSize='md'>
								Get through to your students online.
								</Text>
							</Box>
							<Box>
								<img
									src='../img/illustrations/Get_paid.svg'
									alt='Get_paid'
									height={50}
									width={280}></img>
							</Box>
						</Flex>
						</Container>
					</Center>
					
				
					<Center minH='500px' bg='#ebf8ff'>
					<Container maxW='6xl'>
						<Flex w='100%' justifyContent='space-between' alignItems='center'>
							<Box>
								<img
										src='../img/illustrations/payment.svg'
										alt='payment'
									height={50}
									width={350}></img>
							</Box>
							<Box maxW='250px' textAlign='left'>
								<Text fontWeight='medium' fontSize='xl'>
								Teach Anywhere Anytime
								</Text>
								<Text fontSize='md'>
								Get through to your students online. 
								</Text>
							</Box>
						</Flex>
						</Container>
					</Center>
		
					<Center minH='500px'>
					<Container maxW='6xl'>
						<Flex w='100%' justifyContent='space-between' alignItems='center'>
							<Box maxW='250px' textAlign='left'>
								<Text fontWeight='medium' fontSize='xl'>
								Get reviews
								</Text>
								<Text fontSize='md'>
								Get through to your students online.
								</Text>
							</Box>
							<Box>
								<img
									src='../img/illustrations/review.svg'
									alt='review'
									height={50}
									width={350}></img>
							</Box>
						</Flex>
						</Container>
					</Center>
				
				</Stack>
			
	
		</>
	)
}
