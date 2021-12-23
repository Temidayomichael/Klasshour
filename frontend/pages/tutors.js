import Head from 'next/head'
import {
	Box,
	Text,
	Container,
	Flex,
	Tag,
	HStack,
	Select,
	Button,
	Stack,
	Center,
	SimpleGrid,
	Avatar,
	useToast,
	Spinner,
} from '@chakra-ui/react'
import StarRatings from 'react-star-ratings'
import { useQuery } from 'react-query'
import { GetTutors } from '../Queries/tutor'
import { useRouter } from 'next/router'
import { BiSort } from 'react-icons/bi'
import { RiVoiceprintFill } from 'react-icons/ri'
import { IoStarSharp } from 'react-icons/io5'
import { useState } from 'react'
import { FaFilter } from 'react-icons/fa'
import axios from 'axios'
import { parseCookies } from 'nookies'
const jwt = parseCookies().jwt

export default function Tutors() {
	const router = useRouter()
	const { searchSubject } = router.query
	const [language, setLanguage] = useState('')
	const [stars, setStars] = useState()
	const [sort, setSort] = useState()
	console.log('langgggg:', language)
	const { data, isLoading, isError, isFetching, isSuccess } = useQuery(
		['tutors', { language }],
		GetTutors,
		
	)
	console.log('cnusdbvdsvusd:', data)

	const toast = useToast()
	if (isLoading) {
		return (
			<Center>
				<Spinner
					thickness='4px'
					speed='0.65s'
					emptyColor='gray.200'
					color='blue.500'
					size='md'
				/>
			</Center>
		)
	}
	// const formkik = useFormik({
	// 	initialValues: {
	// 		type: '',
	// 		subject: '',
	// 		requestDesc: '',
	// 		location: '',
	// 	},
	// 	validationSchema: Yup.object({
	// 		type: Yup.string(),
	// 		subject: Yup.string(),
	// 		requestDesc: Yup.string(),
	// 		location: Yup.string(),
	// 	}),

	// 	onSubmit: async (values) => {
	// 		try {
	// 			await mutate({
	// 				values: values,
	// 				user: user,
	// 			})
	// 		} catch (e) {}
	// 		console.log(status)
	// 	},
	// })

	if (isError) {
		return toast({
			title: 'Error getting classes ...',
			status: 'error',
			duration: 2000,
			isClosable: true,
		})
	}

	return (
		<>
			<Head>
				<title>Tutors | Klasshour</title>
				<link rel='icon' href='../img/home_logo.png' />
			</Head>
			{isFetching && (
				<Center>
					<Spinner
						thickness='2px'
						speed='0.65s'
						emptyColor='gray.200'
						color='blue.500'
						size='md'
					/>
				</Center>
			)}
			{/* <Select
				// getOptionLabel={(option) => option.subject}
				// getOptionValue={(option) => option.id}
				// options={requests}
				// isSelected={true}
				// // defaultInputValue='dkmdn'
				// // defaultValue={requests[4]}
				// defaultValue={requests.find((data) => {
				// 	return data.subject === searchSubject
				// })}
				components={animatedComponents}
				isMulti
				placeholder='Search Tutor'
				// onChange={(values) => setSubjectId(values.map((subject) => subject.id))}
			/> */}

			<Container maxW='7xl' my='90'>
				<form onSubmit={() => console.log(filter)}>
					<HStack>
						<Select
							value={stars}
							onChange={(e) => setStars(e.target.value)}
							icon={<IoStarSharp />}
							w='8em'
							placeholder='Stars'>
							<option value='1'>1</option>
							<option value='2'>2</option>
							<option value='3'>3</option>
							<option value='4'>4</option>
							<option value='5'>5</option>
						</Select>
						<Select
							values={language}
							onChange={(e) => setLanguage(e.target.value)}
							icon={<RiVoiceprintFill />}
							w='40'
							placeholder='Language'>
							<option value='English'>English</option>
							<option value='Igbo'>Igbo</option>
							<option value='Yoruba'>Yoruba</option>
							<option value='Hausa'>Hausa</option>
						</Select>
						<Select
							value={sort}
							onChange={(e) => setSort(e.target.value)}
							icon={<BiSort />}
							w='30'
							placeholder='Sort'>
							<option value='Name'>Name</option>
							<option value='Price'>Price</option>
							<option value='Rating'>Rating</option>
						</Select>
						<Button type='submit' colorScheme='blue' leftIcon={<FaFilter />} p>
							Filter
						</Button>
					</HStack>
				</form>

				<SimpleGrid columns={2} spacing={10} py={4} color='white'>
					{data.map((tutor, index) => {
						return (
							<>
								<Flex borderRadius='xl' p='10' color='gray.900' bg='gray.100'>
									<Center pr='10'>
										<Box align='center'>
											<Avatar
												size='xl'
												src={tutor.profileImage.url}
												name={tutor.user.fullname}
											/>
											<Text my='5'>
												{tutor.price} <br /> per minute
											</Text>
											<Button w='70' colorScheme='blue'>
												Contact me
											</Button>
										</Box>
									</Center>
									<Stack spacing='3'>
										<Flex>
											<Text fontWeight='bold'>{tutor.user.fullname}</Text>
											<Text fontStyle='italic'> @{tutor.user.username}</Text>
										</Flex>
										<Text>{tutor.about}</Text>

										<Flex>
											<StarRatings
												rating={tutor.rating}
												starDimension='20px'
												starSpacing='5px'
												starRatedColor='orange'
											/>
										</Flex>
										<Text>{tutor.description}</Text>
										<HStack spacing={4}>
											{tutor.languages.map((data, index) => {
												return (
													<Tag
														textTransform='capitalize'
														colorScheme='linkedin'
														key={index}
														size='sm'>
														{data}
													</Tag>
												)
											})}
										</HStack>
									</Stack>
								</Flex>
							</>
						)
					})}

					<Flex borderRadius='xl' p='10' color='gray.900' bg='gray.100'>
						<Center pr='10'>
							<Box align='center'>
								<Avatar size='xl' name='Dan Abrahmov' />
								<Button mt='5' w='70' colorScheme='blue'>
									Contact me
								</Button>
							</Box>
						</Center>
						<Stack spacing='3'>
							<Text fontWeight='bold'>Melinda Paul</Text>
							<Text>Graphic Designer and WordPress Expert</Text>

							<Flex>
								<StarRatings
									rating={2.403}
									starDimension='20px'
									starSpacing='5px'
									starRatedColor='orange'
								/>
							</Flex>
							<Text>
								Hi, I am a professional Graphic Designer and Web Developer. I am
								a member of Evolving team [login to view URL] and I have
								experience of 5+ years even before joining this.
							</Text>
							<HStack spacing={4}>
								<Tag colorScheme='linkedin' size='sm'>
									Sample Tag
								</Tag>
								<Tag colorScheme='linkedin' size='sm'>
									Sample Tag
								</Tag>
								<Tag colorScheme='linkedin' size='sm'>
									Sample Tag
								</Tag>
								<Tag colorScheme='linkedin' size='sm'>
									Sample Tag
								</Tag>
							</HStack>
						</Stack>
					</Flex>
					<Flex borderRadius='xl' p='10' bg='gray.100' color='gray.900'>
						<Center pr='10'>
							<Box align='center'>
								<Avatar
									size='xl'
									name='Dan Abrahmov'
									src='https://bit.ly/dan-abramov'
								/>
								<Button mt='5' w='70' colorScheme='blue'>
									Contact me
								</Button>
							</Box>
						</Center>
						<Stack spacing='3'>
							<Text fontWeight='bold'>Melinda Paul</Text>
							<Text>Graphic Designer and WordPress Expert</Text>

							<Flex>
								<StarRatings
									rating={2.403}
									starDimension='20px'
									starSpacing='5px'
									starRatedColor='orange'
								/>
							</Flex>
							<Text>
								Hi, I am a professional Graphic Designer and Web Developer. I am
								a member of Evolving team [login to view URL] and I have
								experience of 5+ years even before joining this.
							</Text>
							<HStack spacing={4}>
								<Tag colorScheme='linkedin' size='sm'>
									Sample Tag
								</Tag>
								<Tag colorScheme='linkedin' size='sm'>
									Sample Tag
								</Tag>
								<Tag colorScheme='linkedin' size='sm'>
									Sample Tag
								</Tag>
								<Tag colorScheme='linkedin' size='sm'>
									Sample Tag
								</Tag>
							</HStack>
						</Stack>
					</Flex>
				</SimpleGrid>
			</Container>
		</>
	)
}
