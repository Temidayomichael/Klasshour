import {
	Box,
	value,
	Button,
	Center,
	IconButton,
	Divider,
	Flex,
	Heading,
	Icon,
	Input,
	InputGroup,
	SimpleGrid,
	Stack,
	Text,
	FormLabel,
	Textarea,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	ButtonGroup,
	Alert,
	AlertIcon,
	AlertTitle,
	AlertDescription,
	Container,
	Image,
} from '@chakra-ui/react'
import { GiGuitar } from 'react-icons/gi'
import {
	AiOutlineHome,
	AiOutlineLaptop,
	AiOutlineProject,
} from 'react-icons/ai'
import { SiGoogleclassroom, SiMinetest } from 'react-icons/si'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Lottie from 'react-lottie-player'
import elearning from '../public/lotties/elearning.json'
import Head from 'next/head'
import { useDisclosure } from '@chakra-ui/hooks'
import { useState } from 'react'
import {
	CheckIcon,
	ChevronLeftIcon,
	CloseIcon,
	EditIcon,
} from '@chakra-ui/icons'
import {
	Editable,
	EditableInput,
	EditablePreview,
	useEditableControls,
} from '@chakra-ui/react'
import Router from 'next/router'
import CreatableSelect from 'react-select/creatable'
import useLoginStatus from '../hooks/useLoginStatus'

export default function Home() {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const loginStatus = useLoginStatus()
	const [subject, setSubject] = useState()
	const [block, setBlock] = useState('none')
	const items = [
		{
			value: 'Adult Education and Extra-Mural Studies',
			label: 'Adult Education and Extra-Mural Studies',
		},
		{ value: 'Arts Education', label: 'Arts Education' },
		{ value: 'Education & Accountancy', label: 'Education & Accountancy' },
		{
			value: 'Education & Computer Science',
			label: 'Education & Computer Science',
		},
		{ value: 'Education & Economics', label: 'Education & Economics' },
		{ value: 'Education & Mathematics', label: 'Education & Mathematics' },
		{ value: 'Education & Physics', label: 'Education & Physics' },
		{
			value: 'Education & Religious Studies',
			label: 'Education & Religious Studies',
		},
		{
			value: 'Education & Social Science',
			label: 'Education & Social Science',
		},
		{ value: 'Education And Biology', label: 'Education And Biology' },
		{ value: 'Education And Chemistry', label: 'Education And Chemistry' },
		{
			value: 'Education And English Language',
			label: 'Education And English Language',
		},
		{ value: 'Education And French', label: 'Education And French' },
		{
			value: 'Education And Geography/Physics',
			label: 'Education And Geography/Physics',
		},
		{
			value: 'Education And Political Science',
			label: 'Education And Political Science',
		},
		{ value: 'Educational Foundations', label: 'Educational Foundations' },
		{
			value: 'Educational / Psychology Guidance And Counselling',
			label: 'Educational / Psychology Guidance And Counselling',
		},
		{
			value: 'Health and Physical Education',
			label: 'Health and Physical Education',
		},
		{
			value: 'Library and Information Science',
			label: 'Library and Information Science',
		},
		{ value: 'Science Education', label: 'Science Education' },
		{ value: 'Social Sciences Education', label: 'Social Sciences Education' },
		{
			value: 'Vocational Teacher Education (Technical Education)',
			label: 'Vocational Teacher Education (Technical Education)',
		},
		{ value: 'Religion', label: 'Religion' },
		{ value: 'Igbo Linguistics', label: 'Igbo Linguistics' },
		{
			value: 'Agricultural and Bioresources Engineering',
			label: 'Agricultural and Bioresources Engineering',
		},
		{ value: 'Civil Engineering', label: 'Civil Engineering' },
		{ value: 'Chemical Engineering', label: 'Chemical Engineering' },
		{ value: 'Computer Engineering', label: 'Computer Engineering' },
		{ value: 'Electrical Engineering', label: 'Electrical Engineering' },
		{ value: 'Electronic Engineering', label: 'Electronic Engineering' },
		{ value: 'Marine Engineering', label: 'Marine Engineering' },
		{ value: 'Mechanical Engineering', label: 'Mechanical Engineering' },
		{
			value: 'Metallurgical and Materials Engineering',
			label: 'Metallurgical and Materials Engineering',
		},
		{
			value: 'Petroleum and Gas Engineering',
			label: 'Petroleum and Gas Engineering',
		},
		{ value: 'Systems Engineering', label: 'Systems Engineering' },
		{ value: 'Structural Engineering', label: 'Structural Engineering' },
		{
			value: 'Production and Industrial Engineering',
			label: 'Production and Industrial Engineering',
		},
	]
	function EditableControls() {
		const {
			isEditing,
			getSubmitButtonProps,
			getCancelButtonProps,
			getEditButtonProps,
		} = useEditableControls()
		return isEditing ? (
			<ButtonGroup justifyContent='center' size='sm' pl='4'>
				<IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
				<IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
			</ButtonGroup>
		) : (
			<Flex ml='6'>
				<IconButton size='sm' icon={<EditIcon />} {...getEditButtonProps()} />
			</Flex>
		)
	}

	const handleClick = () => { }

	// console.log(process.env.API_URL)

	function Feature({ title, icon, desc, ...rest }) {
		return (
			<Flex

				px={['3', '10']}
				py='30'
				flexDirection={['column']}
				shadow='md'
				borderWidth='1px'
				flex='1'
				rounded='md'
				alignItems='center'

				{...rest}>
				<Box>
					<Icon boxSize={['36', '10', '20', '16', '8']} m={['28', '1']} color='#161B45' as={icon} textAlign='center' />
					{ }
					{/* <Icon name={} /> */}
				</Box>
				<Box>
					<Heading fontSize={['8xl', '6xl', '5xl', '5xl', '3xl', 'xl']} w={['', '', '', '', '64']} m={['28', '3']} textAlign='center' color='#161B45'>
						{title}
					</Heading>

					<Text fontSize={['7xl', '5xl', '5xl', '4xl', 'xl', '']} p={['', '2']} m={['28', '3']} textAlign='center'>
						{desc}
					</Text>
				</Box>
			</Flex>
		)
	}

	function WhatWeDo({ title, step, desc }) {
		return (
			<Flex flexDirection={['column', 'row']} flex='1' p={3} rounded='md' >
				<Box>
					<Text
						fontSize='xl'
						fontWeight='bold'
						color='white'
						textAlign='center'>
						{step}
					</Text>
					{ }
					{/* <Icon name={} /> */}
				</Box>
				<Box>
					<Heading fontSize={['8xl', '7xl', '6xl', '5xl', '3xl', 'xl']} color='#161B45'>
						{title}
					</Heading>

					<Text fontSize={['7xl', '5xl', '5xl', '4xl', 'xl', '']} mt={['4', '4', '5']}>{desc}</Text>
				</Box>
			</Flex>
		)
	}

	return (
		<Box w={['8xl', '8xl', '9xl','9xl', '100%']} bg='#f7fafc'>

			<Head fontSize={['8xl', '0', '8xl', '3xl', 'sm']} >
				<title >Find tutors | Klasshour</title>
				<link rel='icon' href='../img/home_logo.png' />

			</Head>

			<Center 
				h={['auto', '', '80rem', '', '40em']}
				textAlign='center'
				alignItems='center'
				justifyContent='space-evenly'>
				<Container d='flex' alignItems={['center', '']} flexDirection={['column', 'column', 'column', 'column', 'row', 'row']} maxW={['6xl', '8xl', '6xl', '6xl', '7xl', '7xl']}>
					<Center flexDirection='column' mr={{ lg: '20' }}>
						<Heading
							pt={['40', '', '0', '', '0']}
							fontSize={['9xl', '8xl', '7xl', '6xl', '4xl']}
							mb={4}
							color='#161B45'
							my={3}>
							{' '}
							GET INSTANT HELP
						</Heading>
						<Text pt={['20', '0']} fontSize={['7xl', '5xl', '5xl', '4xl', '4xl', '4xl']}>
							Online & Home Tutoring. Homework Help. Test Prep.
						</Text>
						<InputGroup mt='24px' display={{ xl: 'flex' }}>
							{/* <Input
								value={subject}
								onChange={(e) => setSubject(e.target.value)}
								variant="filled"
								focusBorderColor="#161B45"
								mb="5"
								placeholder="Subject: Math,English"
								size="lg"
							/> */}
							<Flex pt={['16', '']} w='100%' justifyContent='center'>
								<Box w={['100%', '', '', '100%', '400px']} fontSize={['7xl', '4xl', '4xl', '2xl', '']}>
									<CreatableSelect
										ModalOverlay={false}
										isClearable
										options={items}
										placeholder='Subject: Math,English'
										onChange={(value) =>
											setSubject(value ? value.label : value)
										}
									/>
								</Box>
								<Button
									size={['3xl', '2xl', '4xl', 'md']}
									bg='#161B45'
									_hover={{ opacity: '0.9' }}
									_active={{
										bg: '#161B45',
										transform: 'scale(0.88)',
									}}
									color='white'
									w='20'
									fontSize={['5xl', '2xl', '4xl', 'md']}
									isDisabled={subject ? false : true}
									onClick={onOpen}>
									Go
								</Button>
							</Flex>
							<Flex justifyContent='center' alignItems='center'>
								<Modal
									blockScrollOnMount={false}
									isOpen={isOpen}
									onClose={onClose}>
									<ModalOverlay />
									<ModalContent>
										<ModalHeader
											d='flex'
											justifyContent='space-between'
											w='44'
											alignItems='center'>
											<IconButton
												onClick={() => setBlock('none')}
												d={block}
												icon={<ChevronLeftIcon />}
											/>
										</ModalHeader>
										<Flex pl='5' fontWeight='bold' fontSize='3xl'>
											Klasshour
										</Flex>
										<ModalCloseButton onClick={() => setBlock('none')} />
										<ModalBody>
											<Box>
												<Alert status='error' mb='4' hidden={loginStatus}>
													<AlertIcon />
													{/* <AlertTitle mr={2}>
														Please login to Add Request
													</AlertTitle> */}
													<AlertDescription>
														Please login to Add Request.
													</AlertDescription>
													{/* <CloseButton
														position='absolute'
														right='8px'
														top='8px'
													/> */}
												</Alert>
												<Editable
													d='flex'
													defaultValue={subject}
													isPreviewFocusable={false}>
													<EditablePreview maxW='350px' />
													<EditableInput />
													<EditableControls />
												</Editable>

												<Stack spacing='3' mt='3' display={block}>
													<FormLabel htmlFor='text'>Name</FormLabel>
													<Input />
													<FormLabel htmlFor='desc'>Prefered topic</FormLabel>
													<Input mb='3' />
													<Box>
														<FormLabel htmlFor='desc'>Description</FormLabel>
														<Textarea id='desc' />
													</Box>
												</Stack>
												<ModalFooter>
													{block == 'none' ? (
														<>
															<Box d='inline'>
																<Button
																	mt='6'
																	w='full'
																	colorScheme='twitter'
																	variant='solid'
																	bg='#161B45'
																	_hover={{ opacity: '0.9' }}
																	_active={{
																		bg: '#161B45',
																		transform: 'scale(0.88)',
																	}}
																	isDisabled={!loginStatus}
																	onClick={() => setBlock('block')}>
																	Procced to Add Request
																</Button>

																<Button
																	mt='3'
																	w='full'
																	colorScheme='teal'
																	onClick={() =>
																		Router.push({
																			pathname: '/requests',
																			query: { searchSubject: subject },
																		})
																	}
																	variant='outline'>
																	Find similar requests
																</Button>
																<Button
																	mt='3'
																	w='full'
																	onClick={() =>
																		Router.push({
																			pathname: '/tutors',
																			query: { searchSubject: subject },
																		})
																	}
																	colorScheme='pink'
																	variant='outline'>
																	Search Tutor
																</Button>
															</Box>
														</>
													) : (
														<Button
															mt='3'
															w='full'
															colorScheme='twitter'
															variant='solid'
															bg='#161B45'
															_hover={{ opacity: '0.9' }}
															_active={{
																bg: '#161B45',
																transform: 'scale(0.88)',
															}}>
															Submit
														</Button>
													)}
												</ModalFooter>
											</Box>
										</ModalBody>
									</ModalContent>
								</Modal>
							</Flex>
						</InputGroup>
					</Center>

					<Box w={['70em', '', '50em', '', '40em']}>
						<Lottie loop animationData={elearning} play />
					</Box>
				</Container>
			</Center>
			{/* <Stack  maxW="80rem"  m="auto">
            <SimpleGrid my="70px" columns={[
                    "1", // base
                    "1", // 480px upwards
                    "1", // 768px upwards
                    "3", // 992px upwards
                    ]} spacing={8} >
                <Feature
                    title="Post a Request"
                    desc="Post a specific topic, or  specific question. Tutors will apply to your call for help"
                    step="Step 1"
                    icon="ImLocation"
                />
              
                    <Feature
                    title="Pick Your Tutor"
                    desc="Select your tutor among many of those that applied, you can select depending on the, experience and price"
                step="Step 2"
                />
                
                <Feature
                title="Start a Session"
                desc="Choose a tutor with 'Online now' tag and click 'Take a session',
                you will be directed to our amazing virtual classroom. Wait a few minutes, and your tutor will join you to start the session"
                step="Step 3"
            />
                    </SimpleGrid>
                    
                    </Stack> */}
										
			<Divider borderColor='gray.400' />
			<Container maxW={['6xl', '8xl', '', '6xl', '7xl', '7xl']}>
				<Center py={['20', '', '40', '', '20']} minH='100vh' >
					<SimpleGrid

						columns={[
							'1', // base
							'2', // 480px upwards
							'2', // 768px upwards
							'3', // 992px upwards
						]}
						as={Container}
						maxW={['6xl', '7xl', '', '6xl', '7xl', '7xl']}
						gap={12}>
						<Feature
							className='Feature'
							title='Online Tutoring'
							desc='Find a tutor to take you through specific topics or explaincertain points'
							icon={SiGoogleclassroom}
						/>

						<Feature
							className='Feature'
							title='Home Work Help'
							desc='Take short sessions to help you solve particular questions'
							icon={AiOutlineHome}
						/>
						<Feature
							className='Feature'
							title='Test / Exam Prep'
							desc='Get a tutor to prepare you for your, upcoming tests and exams'
							icon={SiMinetest}
						/>
						<Feature
							className='Feature'
							title='Skills'
							desc='Learn a new skill online like baking, graphics design e.t.c'
							icon={GiGuitar}
						/>
						<Feature
							className='Feature'
							title='Coding'
							desc='Get a programmer to solve your coding problems and help you learn how to code'
							icon={AiOutlineLaptop}
						/>
						<Feature
							className='Feature'
							title='Project Help'
							desc='Find a scholar to help you prepare, and analyse your thesis'
							icon={AiOutlineProject}
						/>
					</SimpleGrid>
				</Center>
			</Container>

			<Box py='20' bg='blue.50'>
				<Stack as={Container} maxW={['6xl', '7xl', '6xl', '6xl', '6xl', '6xl']} m='auto' spacing={['96', '20']} >
					<Flex
						flexDirection={['column-reverse', 'row']}
						justifyContent='space-between'
						align='center'

					>
						<Box w={{ lg: '22rem' }} mt={['96', '0']}>
							<Text fontSize={['8xl', '7xl', '6xl', '5xl', '3xl', '3xl']} color='#161B45' fontWeight='bold'>
								Get Complicated Questions Answered
							</Text>
							<Text fontSize={['7xl', '5xl', '5xl', '4xl', 'lg', 'lg']} >
								You will only pay after you have concluded your session/minutes
								with your tutor{' '}
							</Text>
						</Box>
						<Box align='center' mt={['96', '0']}>
							<Image boxSize={['6xl', '9xl', '6xl', 'xl', 'lg', 'lg']} src='./img/questions.svg' />

							{/* <Lottie loop animationData={question} play /> */}
						</Box>
					</Flex>
					<Divider borderColor='gray.400' />
					<Flex
						flexDirection={['column', 'row']}
						justifyContent='space-between'
						align='center'>
						<Box align='center' >
							<Image boxSize={['6xl', '9xl', '6xl', 'xl', 'lg', 'lg']} src='./img/money.svg' />
						</Box>
						<Box w={{ lg: '22rem' }} mt={['96', '0']}>
							<Text fontSize={['8xl', '7xl', '6xl', '5xl', '3xl', '3xl']} color='#161B45' fontWeight='bold'>
								Charge Per Minute
							</Text>
							<Text fontSize={['7xl', '5xl', '5xl', '4xl', 'lg', 'lg']}>
								No minimum or limits to class you can take, you will only be
								charged for the minute of tutoring
							</Text>
						</Box>
					</Flex>
					<Divider borderColor='gray.400' />
					<Flex
						flexDirection={['column-reverse', 'row']}
						justifyContent='space-between'
						align='center'>
						<Box w={{ lg: '22rem' }} mb={['96', '0']} mt={['96', '0']}>
							<Text fontSize={['8xl', '7xl', '6xl', '5xl', '3xl', '3xl']} color='#161B45' fontWeight='bold'>
								Pay After a session
							</Text>
							<Text fontSize={['7xl', '5xl', '5xl', '4xl', 'lg', 'lg']}>
								You will only pay after you have concluded your session/minutes
								with your tutor
							</Text>
						</Box>
						<Box align='center'>
							<Image boxSize={['6xl', '9xl', '6xl', 'xl', 'lg', 'lg']} src='./img/time.svg' />
						</Box>
					</Flex>
				</Stack>
			</Box>
			<Center minH='80vh' py={['40', '20']}>
				<SimpleGrid columns={[1, 2, 3]} spacing={['96', '10']} maxW={['6xl', '7xl', '6xl', '6xl', '70ren', '70rem']} m='auto'>
					<WhatWeDo

						title='Post a Request'
						step='step1'
						desc='Post a specific topic, or a specific question. Tutors will apply to your request and offer their help.'
					/>
					<WhatWeDo
						title='Choose Your Perfect Tutor'
						desc='Choose your tutor among many of those who apply. You can select depending on reviews, experience, price, and other factors.'
						step='step2'
					/>
					<WhatWeDo
						title='Start a Session Online Or Anywhere'
						desc='Choose Contact me to get a call from the tutor if you want home tutoring, or choose a tutor with Online Now tag, and click Take a Session to take your session online.'
						step='step3'
					/>
				</SimpleGrid>
			</Center>
			<Box bg='blue.50' h='auto'>
				<Center
					py={['96', '20']}
					maxW={['6xl', '', '6xl', '6xl', '70rem', '70rem']}
					m='auto'
					justifyContent='center'
					align='center'
				>
					<Stack spacing={['40', '16', '10', '5', '4', '4']}
						flexDirection='column'
						justifyContent={['space-between', 'center']}
						align='center'
					>
						<Heading fontSize={['9xl', '7xl', '8xl', '5xl', '6xl', '6xl']} color='#151a46' w='70' fontWeight='bold'>
							{' '}
							Become a tutor with <br /> Klasshour
						</Heading>
						<Text pt='10' fontSize={['7xl', '5xl', '5xl', '4xl', 'lg', 'lg']} color='gray.500' my={5}>
							Find students all over the world, Use Modaris modern
							VirtualClassroom,
							<br />
							Teach on your own time and Get paid securely.
						</Text>

						<Button 
							colorScheme='gray'
							variant='outline'
							p={['12', '10', '10', '8', '', '']}
							Size={['lg', '8xl', '8xl', '5xl', 'lg']}
							fontSize={["7xl", '5xl', '5xl', '4xl', '2xl', ""]}
							rightIcon={<AiOutlineArrowRight />}
							// fontSize={['6xl', '0', '8xl', '3xl', 'lg']}
							_hover={{
								bg: '#151a46',
								color: 'white',
							}}
							_active={{
								transform: 'scale(0.98)',
							}}
							_focus={{
								textDecoration: 'none',
							}}>
							Learn more
						</Button>
						{/* <Image
                                w="100%"
                                mt={10}
                            h="400px"
                            objectFit="cover"
                            src="../img/class.jpg" /> */}
					</Stack>
				</Center>
			</Box>
			{/* <Center py="20" maxW="70rem" m="auto" justifyContent="space-between"  >
                    <Box >
                        <Heading fontSize="3xl" color="#161B45" fontWeight="bold">Are you intrested in becoming a tutor with Klasshour?</Heading>
                        <Text fontSize="lg" >Find students all over the world,<br />
                        Use Modaris modern VirtualClassroom,<br />
                        Teach on your own time and
                        Get paid securely.</Text>
                    </Box>
                    <Button
                        colorScheme="red"
                        rightIcon={<AiOutlineArrowRight />}
                        size="lg"
                    >Get Started</Button>
                </Center> */}
		</Box>
	)
}
