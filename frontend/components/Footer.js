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
		<Box w={['8xl', '8xl', '9xl', '9xl', '100%']}>
			<Box
				px={{ base: '18px', lg: '90px' }}
				color='gray.500'
				p='3'
				bg='#151a46'

				fontSize='11px'>
				<Flex maxW={['9xl', '', '', '8xl', '']} align='center' justify='center' p={5}>
					<Stack spacing={['20', '20', '20', '', '4']} textAlign='center'>
						<Box color='white' mt={['20', '0', '20', '', '' ]} p={['5', '']}>
							<Text
								fontSize={['7xl', '7xl', '7xl', '5xl', 'lg']}
								fontWeight='bold'

								textTransform='uppercase'
								letterSpacing='widest'>Klasshour</Text>
							{/* <Image src='../img/logo_with_text.png' m='auto' /> */}
							<HStack spacing={['9', '9', '', '3', '2']} justifyContent='center' fontSize={['5xl', '5xl', '5xl', '3xl', 'sm']} pt={['32', '20', '20', '', '3']} >
								<span>Submit a request</span>
								<Divider orientation='vertical' color='red' />
								<span>Terms of Service</span>
								<Divider orientation='vertical' />
								<span>Privacy Policy</span>
								<Divider orientation='vertical' borderColor='gray.400' />
								<span>Legal</span>
							</HStack>
						</Box>
						<Stack spacing={['5', '1', '10', '5', '5']} isInline justifyContent={['space-evenly', '', 'center', 'center', '']} mt='2'>
							<IconButton
								aria-label='facebook'
								size='sm'
								boxSize={['20', '', '20', '', '8']}
								icon={<TiSocialFacebook size={['16', '', '20', '', '']} />}
							/>
							<IconButton
								aria-label='instagram'
								size='sm'
								boxSize={['20', '', '20', '', '8']}
								icon={<TiSocialInstagram size={['16', '', '20', '', '']} />}
							/>
							<IconButton
								aria-label='youtube'
								size='sm'
								boxSize={['20', '', '20', '', '8']}
								icon={<TiSocialYoutube size={['16', '', '20', '', '']} />}
							/>
							<IconButton
								aria-label='twitter'
								size='sm'
								boxSize={['20', '', '20', '', '8']}
								icon={<TiSocialTwitter size={['16', '', '20', '', '']} />}
							/>
						</Stack>
						<Flex justify='center'>
							<RiCopyrightLine />{' '}
							<Text lineHeight='1.63' fontSize={['6xl', '5xl', '4xl', '4xl', 'sm']}>
								2020 Klasshour, Plc. All Rights Reserved.
							</Text>
						</Flex>
					</Stack>
				</Flex>
			</Box>
		</Box>
	)
}
