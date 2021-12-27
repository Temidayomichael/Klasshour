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
} from '@chakra-ui/react'
import { RiArrowDownLine } from 'react-icons/ri'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Carousel from 'nuka-carousel'
export default function request() {
	return (
		<>
			<Container maxW='6xl'>
				{' '}
				<Head>
					<title>FAQ | Klasshour</title>
					<link rel='icon' href='../img/home_logo.png' />
				</Head>
				<Box pt='20'>
					<Heading> Frequently Asked Questions.</Heading>

					<Text mt='2' fontSize='sm' fontWeight='sm'>
						Ask questions, improves your learning
					</Text>
				</Box>
				<Box className='mycontainer' m='auto' my='90' className='content'>
					<Box mb='10'>
						<Box>
							<Accordion allowToggle mt='10'>
								<AccordionItem p='5'>
									<h2>
										<AccordionButton
											_focus={{
												border: '0',
											}}>
											<Box w='90%' d='flex'>
												<Text pl='10' fontSize='lg' fontWeight='medium'>
													How do i signup to Klasshour?
												</Text>
											</Box>
											<AccordionIcon />
										</AccordionButton>
									</h2>
									<AccordionPanel d='flex' alignItems='center' pb={4}>
										<Text pl='10'>
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
											<Box w='90%' d='flex'>
												<Text pl='10' fontSize='lg' fontWeight='medium'>
													How do i signup to Klasshour?
												</Text>
											</Box>
											<AccordionIcon />
										</AccordionButton>
									</h2>
									<AccordionPanel d='flex' alignItems='center' pb={4}>
										<Text pl='10'>
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
											<Box w='90%' d='flex'>
												<Text pl='10' fontSize='lg' fontWeight='medium'>
													How do i signup to Klasshour?
												</Text>
											</Box>
											<AccordionIcon />
										</AccordionButton>
									</h2>
									<AccordionPanel d='flex' alignItems='center' pb={4}>
										<Text pl='10'>
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
											<Box w='90%' d='flex'>
												<Text pl='10' fontSize='lg' fontWeight='medium'>
													How do i signup to Klasshour?
												</Text>
											</Box>
											<AccordionIcon />
										</AccordionButton>
									</h2>
									<AccordionPanel d='flex' alignItems='center' pb={4}>
										<Text pl='10'>
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
											<Box w='90%' d='flex'>
												<Text pl='10' fontSize='lg' fontWeight='medium'>
													How do i signup to Klasshour?
												</Text>
											</Box>
											<AccordionIcon />
										</AccordionButton>
									</h2>
									<AccordionPanel d='flex' alignItems='center' pb={4}>
										<Text pl='10'>
											You can signup to Klasshour by clicking on the register
											button.
										</Text>
									</AccordionPanel>
								</AccordionItem>
							</Accordion>
						</Box>
					</Box>
				</Box>
			</Container>
		</>
	)
}
