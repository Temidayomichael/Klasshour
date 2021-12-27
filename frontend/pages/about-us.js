import { Box, Button, Flex, Heading, Text, Container } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

export default function AboutUs() {
	return (
		<Box bg='#1a202c' h='300' color='white'>

			<Container maxW='5xl'>
				<Box>


					<Flex pt='20' justifyContent='space-between' alignItems='center'>
						<Box>
						<Heading isTruncated>
						About us
						</Heading>
						<Text></Text>
						</Box>
						<Text fontSize="sm" fontWeight='light' ></Text>
					</Flex>
				</Box>
			</Container>
		</Box>

	)
}
