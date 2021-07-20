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
	Image,
	Input,
	InputGroup,
	SimpleGrid,
	Stack,
	Text,
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerHeader,
	DrawerBody,
	DrawerCloseButton,
	FormLabel,
	InputLeftAddon,
	Select,
	Textarea,
	DrawerFooter,
	InputRightAddon,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	ButtonGroup,
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
import question from 'public/lotties/question.json'
import cashmoney from 'public/lotties/cashmoney.json'
import time from 'public/lotties/time.json'
import elearning from 'public/lotties/elearning.json'
import Head from 'next/head'
import { notifyManager } from 'react-query'
import { useDisclosure } from '@chakra-ui/hooks'
import { useRef, useState, display } from 'react'
import {
	CheckIcon,
	ChevronLeftIcon,
	CloseIcon,
	EditIcon,
} from '@chakra-ui/icons'
import { initial } from 'lodash'
import {
	Editable,
	EditableInput,
	EditablePreview,
	useEditableControls,
	EditableControls,
} from '@chakra-ui/react'
import Router, { withRouter } from 'next/router'
import Autocomplete from 'react-autocomplete'

export default function Home() {
	const { isOpen, onOpen, onClose } = useDisclosure()

	const [subject, setSubject] = useState()
	const [block, setBlock] = useState('none')
	function EditableControls() {
		const {
			isEditing,
			getSubmitButtonProps,
			getCancelButtonProps,
			getEditButtonProps,
		} = useEditableControls()
		return isEditing ? (
			<ButtonGroup justifyContent="center" size="sm" pl="4">
				<IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
				<IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
			</ButtonGroup>
		) : (
			<Flex ml="6">
				<IconButton size="sm" icon={<EditIcon />} {...getEditButtonProps()} />
			</Flex>
		)
	}

	const handleClick = () => { }

	// console.log(process.env.API_URL)

	function Feature({ title, icon, desc, ...rest }) {
		return (
			<Flex p={3} shadow="md" borderWidth="1px" flex="1" rounded="md" {...rest}>
				<Box>
					<Icon m="5" color="#161B45" as={icon} textAlign="center" />
					{ }
					{/* <Icon name={} /> */}
				</Box>
				<Box>
					<Heading fontSize="xl" color="#161B45">
						{title}
					</Heading>

					<Text mt={4}>{desc}</Text>
				</Box>
			</Flex>
		)
	}

	function WhatWeDo({ title, step, desc }) {
		return (
			<Flex p={3} flex="1" rounded="md">
				<Box>
					<Text
						m="5"
						fontSize="xl"
						fontWeight="bold"
						color="white"
						textAlign="center">
						{step}
					</Text>
					{ }
					{/* <Icon name={} /> */}
				</Box>
				<Box>
					<Heading fontSize="xl" color="#161B45">
						{title}
					</Heading>

					<Text mt={4}>{desc}</Text>
				</Box>
			</Flex>
		)
	}

	return (
		<>
			<Head>
				<title>Find tutors | Klasshour</title>
				<link rel="icon" href="../img/home_logo.png" />
			</Head>

			<Box>
				<Center
					className="content"
					mx="auto"
					h="70vh"
					textAlign="center"
					justifyContent="space-between">
					<Box maxW="32rem">
						<Heading fontSize="53px" mb={4} color="#161B45" my={3}>
							{' '}
							GET INSTANT HELP
						</Heading>
						<Text fontSize="lg">
							Online & Home Tutoring. Homework Help. Test Prep.
						</Text>
						<InputGroup mt="24px" display={{ xl: 'flex' }}>
							{/* <Input
								value={subject}
								onChange={(e) => setSubject(e.target.value)}
								variant="filled"
								focusBorderColor="#161B45"
								mb="5"
								placeholder="Subject: Math,English"
								size="lg"
							/> */}
							<Autocomplete
								getItemValue={(item) => item.label}
								items={[
								
									{ label: 'Adult Education and Extra-Mural Studies' },
									{ label: 'Arts Education' },
									{ label: 'Education & Accountancy' },
									{ label: 'Education & Computer Science' },
									{ label: 'Education & Economics' },
									{ label: 'Education & Mathematics' },
									{ label: 'Education & Physics' },
									{ label: 'Education & Religious Studies' },
									{ label: 'Education & Social Science' },
									{ label: 'Education And Biology' },
									{ label: 'Education And Chemistry' },
									{ label: 'Education And English Language' },
									{ label: 'Education And French' },
									{ label: 'Education And Geography/Physics' },
									{ label: 'Education And Political Science' },
									{ label: 'Educational Foundations' },
									{ label: 'Educational / Psychology Guidance And Counselling' },
									{ label: 'Health and Physical Education' },
									{ label: 'Library and Information Science' },
									{ label: 'Science Education' },
									{ label: 'Social Sciences Education' },
									{ label: 'Vocational Teacher Education (Technical Education)', },
									{ label: 'Religion' },
									{ label: 'Igbo Linguistics' },
									{ label: 'Agricultural and Bioresources Engineering' },
									{ label: 'Civil Engineering' },
									{ label: 'Chemical Engineering' },
									{ label: 'Computer Engineering' },
									{ label: 'Electrical Engineering' },
									{ label: 'Electronic Engineering' },
									{ label: 'Marine Engineering' },
									{ label: 'Mechanical Engineering' },
									{ label: 'Metallurgical and Materials Engineering' },
									{ label: 'Petroleum and Gas Engineering' },
									{ label: 'Systems Engineering' },
									{ label: 'Structural Engineering'},
									{ label: 'Production and Industrial Engineering' },
								]}
								renderItem={(item, isHighlighted) => (
									<div
										style={{
											background: isHighlighted ? 'lightgray' : 'white',
										}}>
										{item.label}
									</div>
								)}
								as={Input}
								value={subject}
								onChange={(e) => setSubject(e.target.value)}
								onSelect={(val) => setSubject(val)}
							/>
							<Button
								width="35%"
								bg="#161B45"
								_hover={{ opacity: '0.9' }}
								_active={{
									bg: '#161B45',
									transform: 'scale(0.88)',
								}}
								color="white"
								size="md"
								colorScheme="teal"
								onClick={onOpen}>
								Go
							</Button>
							<Flex justifyContent="center" alignItems="center">
								<Modal
									blockScrollOnMount={false}
									isOpen={isOpen}
									onClose={onClose}>
									<ModalOverlay />
									<ModalContent>
										<ModalHeader
											d="flex"
											justifyContent="space-between"
											w="44"
											alignItems="center">
											<IconButton
												onClick={() => setBlock('none')}
												d={block}
												icon={<ChevronLeftIcon />}
											/>
										</ModalHeader>
										<Flex pl="5" fontWeight="bold" fontSize="3xl">
											Klasshour
										</Flex>
										<ModalCloseButton onClick={() => setBlock('none')} />
										<ModalBody>
											<Box>
												<Editable
													d="flex"
													defaultValue={subject}
													isPreviewFocusable={false}>
													<EditablePreview />
													<EditableInput />
													<EditableControls />
												</Editable>

												<Stack spacing="3" mt="3" display={block}>
													<Input />
													<Input />
													<Input mb="3" />
													<Box>
														<FormLabel htmlFor="desc">Description</FormLabel>
														<Textarea id="desc" />
													</Box>
												</Stack>
												<ModalFooter>
													{block == 'none' ? (
														<>
															<Box d="inline">
																<Button
																	mt="6"
																	w="full"
																	colorScheme="twitter"
																	variant="solid"
																	bg="#161B45"
																	_hover={{ opacity: '0.9' }}
																	_active={{
																		bg: '#161B45',
																		transform: 'scale(0.88)',
																	}}
																	onClick={() => setBlock('block')}>
																	Procced to Add Request{' '}
																</Button>

																<Button
																	mt="3"
																	w="full"
																	colorScheme="teal"
																	onClick={() =>
																		Router.push({
																			pathname: '/requests',
																			state: { subject },
																		})
																	}
																	variant="outline">
																	Find similar requests
																</Button>
																<Button
																	mt="3"
																	w="full"
																	colorScheme="pink"
																	variant="outline">
																	Search Tutor
																</Button>
															</Box>
														</>
													) : (
														<Button
															mt="3"
															w="full"
															colorScheme="twitter"
															variant="solid"
															bg="#161B45"
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
					</Box>

					<Box w="500px">
						<Lottie loop animationData={elearning} play />
					</Box>
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
				<Box py="20" h="100vh">
					<Divider borderColor="gray.400" />
					<Center h="90%" m="auto" className="content">
						<SimpleGrid
							columns={[
								'1', // base
								'2', // 480px upwards
								'2', // 768px upwards
								'3', // 992px upwards
							]}
							gap={12}>
							<Feature
								title="Online Tutoring"
								desc="Find a tutor to take you through specific topics or explaincertain points"
								icon={SiGoogleclassroom}
							/>

							<Feature
								title="Home Work Help"
								desc="Take short sessions to help you solve particular questions"
								icon={AiOutlineHome}
							/>
							<Feature
								title="Test / Exam Prep"
								desc="Get a tutor to prepare you for your, upcoming tests and exams"
								icon={SiMinetest}
							/>
							<Feature
								title="Skills"
								desc="Learn a new skill online like baking, graphics design e.t.c"
								icon={GiGuitar}
							/>
							<Feature
								title="Coding"
								desc="Get a programmer to solve your coding problems and help you learn how to code"
								icon={AiOutlineLaptop}
							/>
							<Feature
								title="Project Help"
								desc="Find a scholar to help you prepare, and analyse your thesis"
								icon={AiOutlineProject}
							/>
						</SimpleGrid>
					</Center>
				</Box>
				<Box bg="#161B45" color="white">
					<Stack maxW="70rem" m="auto" spacing={20}>
						<Flex justifyContent="space-between" align="center">
							<Box w="22rem">
								<Text fontSize="3xl" color="#161B45" fontWeight="bold">
									Get Complicated Questions Answered
								</Text>
								<Text fontSize="lg">
									You will only pay after you have concluded your
									session/minutes with your tutor{' '}
								</Text>
							</Box>
							<Box align="center">
								<Lottie loop animationData={question} play />
							</Box>
						</Flex>
						<Divider borderColor="gray.400" />
						<Flex justifyContent="space-between" align="center">
							<Box align="center">
								<Lottie loop animationData={time} play />
							</Box>
							<Box w="22rem">
								<Text fontSize="3xl" color="#161B45" fontWeight="bold">
									Charge Per Minute
								</Text>
								<Text fontSize="lg">
									No minimum or limits to class you can take, you will only be
									charged for the minute of tutoring
								</Text>
							</Box>
						</Flex>
						<Divider borderColor="gray.400" />
						<Flex justifyContent="space-between" align="center">
							<Box w="22rem">
								<Text fontSize="3xl" color="#161B45" fontWeight="bold">
									Pay After a session
								</Text>
								<Text fontSize="lg">
									You will only pay after you have concluded your
									session/minutes with your tutor
								</Text>
							</Box>
							<Box align="center">
								<Lottie loop animationData={cashmoney} play />
							</Box>
						</Flex>
					</Stack>
				</Box>
				<Center h="80vh" py="20">
					<SimpleGrid columns={3} spacing={10} maxW="70rem" m="auto">
						<WhatWeDo
							title="Post a Request"
							step="step1"
							desc="Post a specific topic, or a specific question. Tutors will apply to your request and offer their help."
						/>
						<WhatWeDo
							title="Choose Your Perfect Tutor"
							desc="Choose your tutor among many of those who apply. You can select depending on reviews, experience, price, and other factors."
							step="step2"
						/>
						<WhatWeDo
							title="Start a Session Online Or Anywhere"
							desc="Choose Contact me to get a call from the tutor if you want home tutoring, or choose a tutor with Online Now tag, and click Take a Session to take your session online."
							step="step3"
						/>
					</SimpleGrid>
				</Center>
				<Box bg="gray.800">
					<Center
						py="20"
						maxW="70rem"
						m="auto"
						justifyContent="center"
						align="center"
						h="100vh">
						<Box>
							<Heading fontSize="6xl" color="gray.200" w="70" fontWeight="bold">
								{' '}
								Become a tutor with <br /> Klasshour
							</Heading>
							<Text color="gray.400" my={5} fontSize="lg">
								Find students all over the world, Use Modaris modern
								VirtualClassroom,
								<br />
								Teach on your own time and Get paid securely.
							</Text>

							<Button
								colorScheme="whiteAlpha"
								rightIcon={<AiOutlineArrowRight />}
								size="lg"
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
						</Box>
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
		</>
	)
}
