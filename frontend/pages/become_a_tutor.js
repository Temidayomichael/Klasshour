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
		<Box w={['8xl', '8xl', '8xl', '9xl', '100%']} bg='#f7fafc'>

			<Head >
				<title >Become A Tutor | Klasshour</title>
				<link rel='icon' href='../img/home_logo.png' />
			</Head>
			<Container  maxW={['6xl', '6xl', '8xl', '6xl', '6xl']}>
				<Box pt={['80', '40', '40', '20', '20', '20']} textAlign={['center', '', 'center', 'center', 'left']} h={['auto', '25rem', '30rem', '20rem', '', '15rem']}>
					<Heading size='3xl' color='#161B45' fontSize={['9xl', '8xl', '9xl', '7xl', '5xl', '5xl']}>Become A Tutor.</Heading>

					<Text mt={['20', '3']} color='black' fontWeight='sm' fontSize={['7xl', '5xl', '6xl', '4xl', 'xl']}>
						Offer your students the best you can.
					</Text>
				</Box>
			</Container>
			<Divider mt='10' borderColor='gray.400' />
			<Stack pb='12'>

				<Center minH='500px'>
					<Container maxW={['6xl', '7xl', '7xl', '6xl', '6xl', '6xl']}>
						<Flex
							flexDirection={['column-reverse', 'row']}
							justifyContent='space-between'
							align='center'>

							<Box maxW={['6xl', '7xl', '6xl', '', '6xl', '250px']} textAlign={['center', 'left']} mb={['96', '0']}>
								<Text fontWeight='medium' fontSize={['8xl', '7xl', '6xl', '5xl', '3xl', '3xl']}>
									Get started for free
								</Text>
								<Text fontSize={['7xl', '5xl', '5xl', '4xl', 'xl', 'md']}>
									Signing up to being a tutor in Klasshour is free
								</Text>
							</Box>
							<Box>
								<Image

									src='../img/illustrations/get_started.svg'
									alt='Get started'
									h={['6xl', '7xl', '8xl', '2xl', 'sm']}
									w={['6xl', '4xl', '4xl', 'lg', 'lg',]} />
							</Box>
						</Flex>
					</Container>
				</Center>
				<Center minH='500px' bg='#ebf8ff'>
					<Container maxW={['6xl', '7xl', '7xl', '6xl', '6xl', '6xl']}>
						<Flex
							flexDirection={['column', 'row']}
							justifyContent='space-between'
							align='center'>
							<Box>
								<Image
									src='./img/illustrations/Teach_anywhere.svg'
									alt='Teach_anywhere'
									h={['6xl', '7xl', '8xl', '2xl', 'sm']}
									w={['6xl', '4xl', 'xl', 'lg', 'lg']} />
							</Box>
							<Box maxW={['6xl', '7xl', '6xl', '', '6xl', '250px']} textAlign={['center', 'left']} mb={['96', '0']}>
								<Text fontWeight='medium' fontSize={['8xl', '7xl', '6xl', '5xl', '3xl', '3xl']}>
									Teach Anywhere Anytime
								</Text>
								<Text fontSize={['7xl', '5xl', '5xl', '4xl', 'xl', 'sm']}>
									Get through to your students online.
								</Text>
							</Box>
						</Flex>
					</Container>
				</Center>
				<Center minH='500px'>
					<Container maxW={['6xl', '7xl', '7xl', '6xl', '6xl', '6xl']}>
						<Flex
							flexDirection={['column-reverse', 'row']}
							justifyContent='space-between'
							align='center'>
							<Box maxW={['6xl', '7xl', '6xl', '', '6xl', '250px']} textAlign={['center', 'left']} mb={['96', '0']}>
								<Text fontWeight='medium' fontSize={['8xl', '7xl', '6xl', '5xl', '3xl', '3xl']}>
									State your price
								</Text>
								<Text fontSize={['7xl', '5xl', '5xl', '4xl', 'xl', 'sm']}>
									Get through to your students online.
								</Text>
							</Box>
							<Box>
								<Image
									src='../img/illustrations/Get_paid.svg'
									alt='Get_paid'
									h={['6xl', '7xl', '8xl', '2xl', 'sm']}
									w={['3xl', '3xl', 'xl', 'sm', 'sm']} />
							</Box>
						</Flex>
					</Container>
				</Center>


				<Center minH='500px' bg='#ebf8ff'>
					<Container maxW={['6xl', '7xl', '7xl', '6xl', '6xl', '6xl']}>
						<Flex
							flexDirection={['column', 'row']}
							justifyContent='space-between'
							align='center'>
							<Box>
								<Image
									src='../img/illustrations/payment.svg'
									alt='payment'
									h={['6xl', '7xl', '8xl', '2xl', 'sm']}
									w={['6xl', '4xl', 'xl', 'lg', 'lg']} />
							</Box>
							<Box maxW={['6xl', '7xl', '6xl', '', '6xl', '250px']} textAlign={['center', 'left']} mb={['96', '0']}>
								<Text fontWeight='medium' fontSize={['8xl', '7xl', '6xl', '5xl', '3xl', '3xl']}>
									Teach Anywhere Anytime
								</Text>
								<Text fontSize={['7xl', '5xl', '5xl', '4xl', 'xl', 'sm']}>
									Get through to your students online.
								</Text>
							</Box>
						</Flex>
					</Container>
				</Center>

				<Center minH='500px'>
					<Container maxW={['6xl', '7xl', '7xl', '6xl', '6xl', '6xl']}>
						<Flex
							flexDirection={['column-reverse', 'row']}
							justifyContent='space-between'
							align='center'>
							<Box maxW={['6xl', '7xl', '6xl', '', '6xl', '250px']} textAlign={['center', 'left']} mb={['96', '0']}>
								<Text fontWeight='medium' fontSize={['8xl', '7xl', '6xl', '5xl', '3xl', '3xl']}>
									Get reviews
								</Text>
								<Text fontSize={['7xl', '5xl', '5xl', '4xl', 'xl', 'sm']}>
									Get through to your students online.
								</Text>
							</Box>
							<Box>
								<Image
									src='../img/illustrations/review.svg'
									alt='review'
									h={['6xl', '7xl', '8xl', '2xl', 'sm']}
									w={['6xl', '4xl', 'xl', 'lg', 'lg']} />
							</Box>
						</Flex>
					</Container>
				</Center>

			</Stack>


		</Box>
	)
}
