import {
	Box,
	Divider,
	Flex,
	IconButton,
	Image,
	Stack,
	Text,
	HStack,
} from '@chakra-ui/react'
import React from 'react'
import { RiCopyrightLine } from 'react-icons/ri'
import {
	TiSocialInstagram,
	TiSocialFacebook,
	TiSocialYoutube,
	TiSocialTwitter,
} from 'react-icons/ti'

export default function Footer() {
	return (
		<Box>
			<Box
				px={{ base: '18px', lg: '90px' }}
				color='gray.500'
				p='3'
				bg='#151a46'
				fontSize='11px'>
				<Flex align='center' justify='center' p={5}>
					<Stack spacing='4' textAlign='center'>
						<Box color='white'>
							<Text
								fontWeight='bold'
								fontSize='lg'
								textTransform='uppercase'
								letterSpacing='widest'>Klasshour</Text>
							{/* <Image src='../img/logo_with_text.png' m='auto' /> */}
							<HStack spacing='2' justifyContent='center' mt='3'>
								<span>Submit a request</span>
								<Divider orientation='vertical' color='red' />
								<span>Terms of Service</span>
								<Divider orientation='vertical' />
								<span>Privacy Policy</span>
								<Divider orientation='vertical' borderColor='gray.400' />
								<span>Legal</span>
							</HStack>
						</Box>
						<Stack isInline justifyContent='center' mt='2'>
							<IconButton
								aria-label='facebook'
								size='sm'
								icon={<TiSocialFacebook />}
							/>
							<IconButton
								aria-label='instagram'
								size='sm'
								icon={<TiSocialInstagram />}
							/>
							<IconButton
								aria-label='youtube'
								size='sm'
								icon={<TiSocialYoutube />}
							/>
							<IconButton
								aria-label='twitter'
								size='sm'
								icon={<TiSocialTwitter />}
							/>
						</Stack>
						<Flex justify='center'>
							<RiCopyrightLine />{' '}
							<Text lineHeight='1.63'>
								2020 Klasshour, Plc. All Rights Reserved.
							</Text>
						</Flex>
					</Stack>
				</Flex>
			</Box>
		</Box>
	)
}
