import React from 'react'
import Head from 'next/head'
import {
	Box,
	Heading,
	Text,
	Accordion,
	Container,
	AccordionItem,
	AccordionIcon,
	AccordionButton,
	AccordionPanel,
	Divider,
} from '@chakra-ui/react'
import { RiArrowDownLine } from 'react-icons/ri'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Carousel from 'nuka-carousel'
export default function request() {
	return (
		<Box w={['8xl', '8xl', '9xl', '9xl', '100%']} bg='#f7fafc'>
			<Container maxW='6xl' >
				{' '}
				<Head>
					<title>FAQ | Klasshour</title>
					<link rel='icon' href='../img/home_logo.png' />
				</Head>
				<Box pt={['40', '20']} pb={['20', '20']} textAlign={['center', '', 'center', 'center', 'left']} h={['auto', '25rem', '30rem', '20rem', '', '15rem']}>
					<Heading fontSize={['8xl', '8xl', '8xl', '6xl', '5xl']} color='#161B45'> Frequently Asked Questions.</Heading>

					<Text mt={['10', '2']} color='black' fontSize={['7xl', '5xl', '6xl', '4xl', 'xl']} fontWeight='sm'>
						Ask questions, improves your learning
					</Text>
				</Box>
				</Container>
				<Divider mt='10' borderColor='gray.400' />
				<Container maxW='6xl' >
				<Box pb='20'>
					<Accordion allowToggle  mt='10'>
						<AccordionItem p='5'>
							<h2>
								<AccordionButton
									_focus={{
										border: '0',
									}}>
									<Box w='6xl' d='flex' >
										<Text pl='10' fontSize={['6xl', '6xl', '6xl', '5xl', 'lg']} fontWeight='medium'>
											How do i signup to Klasshour?
										</Text>
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel size='lg' d='flex' alignItems='center' pb={4}>
								<Text pl='10' fontSize={['6xl', '6xl', '6xl', '4xl', 'lg']}>
									You can signup to Klasshour by clicking on the register
									button.
								</Text>
							</AccordionPanel>
						</AccordionItem>
						
						<AccordionItem p='5'>
							<h2>
								<AccordionButton
									_focus={{
										border: '0',
									}}>
									<Box w='6xl' d='flex' >
										<Text pl='10' fontSize={['6xl', '6xl', '6xl', '5xl', 'lg']} fontWeight='medium'>
											How do i signup to Klasshour?
										</Text>
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel size='lg' d='flex' alignItems='center' pb={4}>
								<Text pl='10' fontSize={['6xl', '6xl', '6xl', '4xl', 'lg']}>
									You can signup to Klasshour by clicking on the register
									button.
								</Text>
							</AccordionPanel>
						</AccordionItem>
						<AccordionItem p='5'>
							<h2>
								<AccordionButton
									_focus={{
										border: '0',
									}}>
									<Box w='6xl' d='flex' >
										<Text pl='10' fontSize={['6xl', '6xl', '6xl', '5xl', 'lg']} fontWeight='medium'>
											How do i signup to Klasshour?
										</Text>
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel size='lg' d='flex' alignItems='center' pb={4}>
								<Text pl='10' fontSize={['6xl', '6xl', '6xl', '4xl', 'lg']}>
									You can signup to Klasshour by clicking on the register
									button.
								</Text>
							</AccordionPanel>
						</AccordionItem>
						<AccordionItem p='5'>
							<h2>
								<AccordionButton
									_focus={{
										border: '0',
									}}>
									<Box w='6xl' d='flex' >
										<Text pl='10' fontSize={['6xl', '6xl', '6xl', '5xl', 'lg']} fontWeight='medium'>
											How do i signup to Klasshour?
										</Text>
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel size='lg' d='flex' alignItems='center' pb={4}>
								<Text pl='10' fontSize={['6xl', '6xl', '6xl', '4xl', 'lg']}>
									You can signup to Klasshour by clicking on the register
									button.
								</Text>
							</AccordionPanel>
						</AccordionItem>
						<AccordionItem p='5'>
							<h2>
								<AccordionButton
									_focus={{
										border: '0',
									}}>
									<Box w='6xl' d='flex' >
										<Text pl='10' fontSize={['6xl', '6xl', '6xl', '5xl', 'lg']} fontWeight='medium'>
											How do i signup to Klasshour?
										</Text>
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel size='lg' d='flex' alignItems='center' pb={4}>
								<Text pl='10' fontSize={['6xl', '6xl', '6xl', '4xl', 'lg']}>
									You can signup to Klasshour by clicking on the register
									button.
								</Text>
							</AccordionPanel>
						</AccordionItem>
						<AccordionItem p='5'>
							<h2>
								<AccordionButton
									_focus={{
										border: '0',
									}}>
									<Box w='6xl' d='flex' >
										<Text pl='10' fontSize={['6xl', '6xl', '6xl', '5xl', 'lg']} fontWeight='medium'>
											How do i signup to Klasshour?
										</Text>
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel size='lg' d='flex' alignItems='center' pb={4}>
								<Text pl='10' fontSize={['6xl', '6xl', '6xl', '4xl', 'lg']}>
									You can signup to Klasshour by clicking on the register
									button.
								</Text>
							</AccordionPanel>
						</AccordionItem>
						<AccordionItem p='5'>
							<h2>
								<AccordionButton
									_focus={{
										border: '0',
									}}>
									<Box w='6xl' d='flex' >
										<Text pl='10' fontSize={['6xl', '6xl', '6xl', '5xl', 'lg']} fontWeight='medium'>
											How do i signup to Klasshour?
										</Text>
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel size='lg' d='flex' alignItems='center' pb={4}>
								<Text pl='10' fontSize={['6xl', '6xl', '6xl', '4xl', 'lg']}>
									You can signup to Klasshour by clicking on the register
									button.
								</Text>
							</AccordionPanel>
						</AccordionItem>
						<AccordionItem p='5'>
							<h2>
								<AccordionButton
									_focus={{
										border: '0',
									}}>
									<Box w='6xl' d='flex' >
										<Text pl='10' fontSize={['6xl', '6xl', '6xl', '5xl', 'lg']} fontWeight='medium'>
											How do i signup to Klasshour?
										</Text>
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel size='lg' d='flex' alignItems='center' pb={4}>
								<Text pl='10' fontSize={['6xl', '6xl', '6xl', '4xl', 'lg']}>
									You can signup to Klasshour by clicking on the register
									button.
								</Text>
							</AccordionPanel>
						</AccordionItem>
						<AccordionItem p='5'>
							<h2>
								<AccordionButton
									_focus={{
										border: '0',
									}}>
									<Box w='6xl' d='flex' >
										<Text pl='10' fontSize={['6xl', '6xl', '6xl', '5xl', 'lg']} fontWeight='medium'>
											How do i signup to Klasshour?
										</Text>
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel size='lg' d='flex' alignItems='center' pb={4}>
								<Text pl='10' fontSize={['6xl', '6xl', '6xl', '4xl', 'lg']}>
									You can signup to Klasshour by clicking on the register
									button.
								</Text>
							</AccordionPanel>
						</AccordionItem>
						<AccordionItem p='5'>
							<h2>
								<AccordionButton
									_focus={{
										border: '0',
									}}>
									<Box w='6xl' d='flex' >
										<Text pl='10' fontSize={['6xl', '6xl', '6xl', '5xl', 'lg']} fontWeight='medium'>
											How do i signup to Klasshour?
										</Text>
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel size='lg' d='flex' alignItems='center' pb={4}>
								<Text pl='10' fontSize={['6xl', '6xl', '6xl', '4xl', 'lg']}>
									You can signup to Klasshour by clicking on the register
									button.
								</Text>
							</AccordionPanel>
						</AccordionItem>
						<AccordionItem p='5'>
							<h2>
								<AccordionButton
									_focus={{
										border: '0',
									}}>
									<Box w='6xl' d='flex' >
										<Text pl='10' fontSize={['6xl', '6xl', '6xl', '5xl', 'lg']} fontWeight='medium'>
											How do i signup to Klasshour?
										</Text>
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel size='lg' d='flex' alignItems='center' pb={4}>
								<Text pl='10' fontSize={['6xl', '6xl', '6xl', '4xl', 'lg']}>
									You can signup to Klasshour by clicking on the register
									button.
								</Text>
							</AccordionPanel>
						</AccordionItem>
						<AccordionItem p='5'>
							<h2>
								<AccordionButton
									_focus={{
										border: '0',
									}}>
									<Box w='6xl' d='flex' >
										<Text pl='10' fontSize={['6xl', '6xl', '6xl', '5xl', 'lg']} fontWeight='medium'>
											How do i signup to Klasshour?
										</Text>
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel size='lg' d='flex' alignItems='center' pb={4}>
								<Text pl='10' fontSize={['6xl', '6xl', '6xl', '4xl', 'lg']}>
									You can signup to Klasshour by clicking on the register
									button.
								</Text>
							</AccordionPanel>
						</AccordionItem>
						
					</Accordion>
				</Box>

			</Container>
		</Box>
	)
}
