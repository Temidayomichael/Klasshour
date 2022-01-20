import { Box, Button, Flex, Heading, Text, Container, Divider, HStack, VStack, Center, Image } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

export default function AboutUs() {
	return (
		<Box w={['8xl', '8xl', '9xl', '9xl', '100%']} bg='#f7fafc'>
			<Container maxW={['6xl', '6xl', '8xl', '6xl', '6xl']}>
				<Box pt={['40', '20']} pb={['20', '20']} textAlign={['center', '', 'center', 'center', 'left']} h={['auto', '25rem', '30rem', '20rem', '', '15rem']}>
					<Heading color='#161B45' fontSize={['8xl', '8xl', '8xl', '6xl', '5xl']}>About us</Heading>

					<Text mt={['20', '3']} color='black' fontWeight='sm' fontSize={['7xl', '5xl', '6xl', '4xl', 'xl']}>
						Our mission is to make sure the best services is rendered.
					</Text>
				</Box>
			</Container>
			<Divider mt='10' borderColor='gray.400' />
			<Box pt='20'>
				<Center >
					<Heading pt='10' size='lg' fontSize={['8xl', '6xl', '7xl', '', '4xl']} color='#1a202c'>Meet our team</Heading>
				</Center>

				<Center>
					<VStack maxW='6xl' spacing='20' py='20' >

						<Box d='flex' flexDirection={['column', 'row']} alignItems='center' spacing='24'>
							<Box border='1px solid black' borderColor='#ebeff5' h='auto' m='5' w={['4xl', '72']}>	<Image
								src='./img/man5.jpg'
								alt='Teach_anywhere'
								height={['5xl', 'sm']}
								width={['4xl', 'xl']} />
								<Box p='3'>
									<Text fontWeight='medium' fontSize={['8xl', '5xl', '4xl', '', 'xl']}>Kelvin smith</Text>
									<Text fontWeight='medium' fontSize={['7xl', '4xl', '4xl', '', 'sm']} color='#718096'>CEO</Text>
								</Box>

							</Box>
							<Box border='1px solid black' borderColor='#ebeff5' h='auto' m='5' w={['4xl', '72']}>	<Image
								src='./img/man3.jpg'
								alt='Teach_anywhere'
								height={['5xl', 'sm']}
								width={['4xl', 'xl']} />
								<Box p='3'>
									<Text fontWeight='medium' fontSize={['8xl', '5xl', '4xl', '', 'xl']}>James Brown</Text>
									<Text fontWeight='medium' fontSize={['7xl', '4xl', '4xl', '', 'sm']} color='#718096'>Engineering manager</Text>
								</Box>

							</Box>
							<Box border='1px solid black' borderColor='#ebeff5' h='auto' m='5' w={['4xl', '72']}><Image
								src='./img/man2.jpg'
								alt='Teach_anywhere'
								height={['5xl', 'sm']}
								width={['4xl', 'xl']} />
								<Box p='3'>
									<Text fontWeight='medium'  fontSize={['8xl', '5xl', '4xl', '', 'xl']}>Philip John</Text>
									<Text fontWeight='medium'fontSize={['7xl', '4xl', '4xl', '', 'sm']} color='#718096'>Product manager</Text>
								</Box>

							</Box>


						</Box>

						<Box d='flex' flexDirection={['column', 'row']} alignItems='center' spacing='24'>
							<Box border='1px solid black' borderColor='#ebeff5' h='auto' m='5' w={['4xl', '72']}><Image
								src='./img/woman2.jpg'
								alt='Teach_anywhere'
								height={['5xl', 'sm']}
								width={['4xl', 'xl']} />
								<Box p='3'>
									<Text fontWeight='medium'  fontSize={['8xl', '5xl', '4xl', '', 'xl']}>Dennis Temoye</Text>
									<Text fontWeight='medium' fontSize={['7xl', '4xl', '4xl', '', 'sm']} color='#718096'>Frontend developer</Text>
								</Box>

							</Box>
							<Box border='1px solid black' borderColor='#ebeff5' h='auto' m='5' w={['4xl', '72']}><Image
								src='./img/woman1.jpg'
								alt='Teach_anywhere'
								height={['5xl', 'sm']}
								width={['4xl', 'xl']} />
								<Box p='3'>
									<Text fontWeight='medium'  fontSize={['8xl', '5xl', '4xl', '', 'xl']}>Temidayo Oladele</Text>
									<Text fontWeight='medium' fontSize={['7xl', '4xl', '4xl', '', 'sm']} color='#718096'>Backend developer</Text>
								</Box>

							</Box>
							<Box border='1px solid black' borderColor='#ebeff5' h='auto' m='5' w={['4xl', '72']}><Image
								src='./img/man4.jpg'
								alt='Teach_anywhere'
								height={['5xl', 'sm']}
								width={['4xl', 'xl']} />
								<Box p='3'>
									<Text fontWeight='medium'  fontSize={['8xl', '5xl', '4xl', '', 'xl']}>Johnny Bell</Text>
									<Text fontWeight='medium' fontSize={['7xl', '4xl', '4xl', '', 'sm']} color='#718096'>Product manager</Text>
								</Box>

							</Box>


						</Box>

					</VStack>
				</Center>
			</Box>
		</Box>
	)
}
