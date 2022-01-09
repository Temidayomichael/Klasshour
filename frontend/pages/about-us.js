import { Box, Button, Flex, Heading, Text, Container, Divider, HStack, VStack, Center } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

export default function AboutUs() {
	return (
		<Box className='main-page'>
			<Container maxW='6xl' >
				<Box pt='20'>
					<Heading size='3xl'>About us</Heading>

					<Text mt='2' fontSize='sm' fontWeight='sm'>Our mission is to make sure the best services is rendered. </Text>
				</Box>
			</Container>
			<Divider mt='10' />
			<Box>
				<Center >
					<Heading pt='10' size='lg' color='#1a202c'>Meet our team</Heading>
				</Center>


				<VStack spacing='20' py='20'  >
					<Box d='flex' spacing='24' className='Flex2'>
						<Box border='1px solid black' borderColor='#ebeff5' h='auto'  m='5' w='72'>	<img
							src='./img/man5.jpg'
							alt='Teach_anywhere'
							height='10'
							width='xl'></img>
							<Box p='3'>
								<Text fontWeight='medium' fontSize='xl'>Kelvin smith</Text>
								<Text fontWeight='medium' fontSize='sm' color='#718096'>CEO</Text>
							</Box>

						</Box>
						<Box border='1px solid black' borderColor='#ebeff5' h='auto'  m='5'  w='72'>	<img
							src='./img/man3.jpg'
							alt='Teach_anywhere'
							height='10'
							width='xl'></img>
							<Box p='3'>
								<Text fontWeight='medium' fontSize='xl'>James Brown</Text>
								<Text fontWeight='medium' fontSize='sm' color='#718096'>Engineering manager</Text>
							</Box>

						</Box>
						<Box border='1px solid black' borderColor='#ebeff5' h='auto'  m='5' w='72'>	<img
							src='./img/man2.jpg'
							alt='Teach_anywhere'
							height='10'
							width='xl'></img>
							<Box p='3'>
								<Text fontWeight='medium' fontSize='xl'>Philip John</Text>
								<Text fontWeight='medium' fontSize='sm' color='#718096'>Product manager</Text>
							</Box>

						</Box>


					</Box>
					<Box d='flex' spacing='24' className='Flex2'>
						<Box  border='1px solid black' borderColor='#ebeff5' h='auto' m='5'  w='72'>	<img
							src='./img/woman2.jpg'
							alt='Teach_anywhere'
							height='10'
							width='xl'></img>
							<Box p='3'>
								<Text fontWeight='medium' fontSize='xl'>Dennis Temoye</Text>
								<Text fontWeight='medium' fontSize='sm' color='#718096'>Frontend developer</Text>
							</Box>

						</Box>
						<Box border='1px solid black' borderColor='#ebeff5' h='auto'  m='5'  w='72'>	<img
							src='./img/woman1.jpg'
							alt='Teach_anywhere'
							height='10'
							width='xl'></img>
							<Box p='3'>
								<Text fontWeight='medium' fontSize='xl'>Temidayo Oladele</Text>
								<Text fontWeight='medium' fontSize='sm' color='#718096'>Backend developer</Text>
							</Box>

						</Box>
						<Box border='1px solid black' borderColor='#ebeff5' h='auto' m='5'  w='72'>	<img
							src='./img/man4.jpg'
							alt='Teach_anywhere'
							height='10'
							width='xl'></img>
							<Box p='3'>
								<Text fontWeight='medium' fontSize='xl'>Johnny Bell</Text>
								<Text fontWeight='medium' fontSize='sm' color='#718096'>Product manager</Text>
							</Box>

						</Box>


					</Box>
				</VStack>
			</Box>
		</Box>
	)
}
