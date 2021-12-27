import { useContext, useEffect, useState } from 'react'
import Head from 'next/head'
import {
	Badge,
	Box,
	Divider,
	Flex,
	Heading,
	SimpleGrid,
	SlideFade,
	Alert,
	AlertIcon,
	AlertTitle,
	AlertDescription,
	Text,
	Center,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	Spinner,
	useToast,
	CloseButton,
} from '@chakra-ui/react'
import { AiOutlineHome } from 'react-icons/ai'
import { RiVidiconLine } from 'react-icons/ri'
import useLoginStatus from '../hooks/useLoginStatus'
import useUserType from '../hooks/useUserType'

import { parseCookies } from 'nookies'
import TimeAgo from 'react-timeago'
import UserContext from '../contexts/UserContext'
import AddRequest from '../components/dashboard/AddRequest'
import { useFormik } from 'formik'
import { useQuery } from 'react-query'
import { useMutation } from 'react-query'
import { GetRequests } from '../Queries/request'
import JoinClass from '../components/requestsPage/joinClass'
import ApplyClass from '../components/requestsPage/applyClass'
import Select from 'react-select'
import axios from 'axios'
import useApplied from '../hooks/useApplied'
import { useRouter } from 'next/router'
import makeAnimated from 'react-select/animated'
export default function Student({ requests }) {
	const animatedComponents = makeAnimated()
	const router = useRouter()
	const { searchSubject } = router.query
	const isLoggedin = useLoginStatus()
	const isStudent = useUserType()
	const search = requests.find((data) => {
		return data.subject === searchSubject
	})
	let newRequestArray = []
	const jwt = parseCookies().jwt
	const userData = useContext(UserContext)
	const [subjectId, setSubjectId] = useState([search ? search.id : ''])
	const { data, isLoading, isError, isFetching, isSuccess } = useQuery(
		['requests', { subjectId }],
		GetRequests,
		{
			initialData: requests,
		},
	)

	if (isSuccess) {
		newRequestArray = data.data
		// console.log('myreq',myreq)
		// newRequestArray = myreq.reduce(
		// 	(request) => request.user.id !== userData.id,
		// )
	}
	console.log('userrrrrrrrr:', userData)
	console.log()
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
	console.log(isError)
	if (isError) {
		return toast({
			title: 'Error getting Requests ...',
			status: 'error',
			duration: 2000,
			isClosable: true,
		})
	}
	return (
		<SlideFade in={true} offsetY='20px'>
			<Head>
				<title>Requests | Klasshour</title>
				<link rel='icon' href='../img/home_logo.png' />
			</Head>
			<Alert
				hidden={searchSubject ? false : true}
				variant='top-accent'
				status='error'>
				<AlertIcon />
				<AlertTitle mr={2}>{searchSubject} has no results.</AlertTitle>
				<AlertDescription>
					{isLoggedin
						? ' Please click on Add Request button to add a request on this subject. '
						: 'Please login to add a request to this subject '}
				</AlertDescription>
				<CloseButton position='absolute' right='8px' top='8px' />
			</Alert>
			<Box className='content' m='auto' my='90'>
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
				{isStudent ? (
					<Box w='100' float='right'>
						<AddRequest
							searchSubject={searchSubject}
							useFormik={useFormik}
							isLoading={userData.isLoading}
							jwt={jwt}
							user={userData}
							useMutation={useMutation}
						/>
					</Box>
				) : (
					''
				)}

				<Box mb='10' m='auto'>
					<Heading as='h1' size='lg' isTruncated>
						Requests
					</Heading>
					<Tabs size='md' variant='enclosed'>
						<TabList>
							<Tab>All Requests</Tab>
							<Tab d={!isLoggedin ? 'none' : 'block'}>
								Join Upcoming Session(s)
							</Tab>
						</TabList>
						<TabPanels>
							<TabPanel>
								<Select
									getOptionLabel={(option) => option.subject}
									getOptionValue={(option) => option.id}
									options={requests}
									isSelected={true}
									// defaultInputValue='dkmdn'
									// defaultValue={requests[4]}
									defaultValue={requests.find((data) => {
										return data.subject === searchSubject
									})}
									components={animatedComponents}
									isMulti
									placeholder='Filter By Subjects'
									onChange={(values) =>
										setSubjectId(values.map((subject) => subject.id))
									}
								/>
								<SimpleGrid columns={3} spacing='30px' mt='5'>
									{newRequestArray
										? newRequestArray.map((data, index) => {
												return (
													<>
														<Box
															animate={{ sacle: 1 }}
															whileHover={{
																scale: 1.1,
																transition: {
																	duration: 0.2,
																},
															}}
															key={data.id}
															maxW='sm'
															p='5'
															borderWidth='1px'
															rounded='md'
															boxShadow='xs'>
															<Flex justify='space-between' w='100'>
																<Box
																	as='time'
																	dateTime='2021-01-15 15:30:00 +0000 UTC'>
																	<TimeAgo date={data.createdAt} />
																</Box>
																<Box
																	color='gray.500'
																	fontWeight='semibold'
																	letterSpacing='wide'
																	fontSize='xs'
																	textTransform='uppercase'
																	ml='2'>
																	{data.type == 'hometutoring' ? (
																		<AiOutlineHome size='20' />
																	) : (
																		<RiVidiconLine size='20' />
																	)}
																</Box>
															</Flex>

															<Box textAlign='center' my='4'>
																<Flex alignItems='baseline'>
																	<Badge
																		borderRadius='full'
																		px='2'
																		colorScheme={
																			data.status == 'open' ? 'green' : 'red'
																		}>
																		{data.status}
																	</Badge>
																	<Box
																		color='gray.900'
																		fontWeight='semibold'
																		letterSpacing='wide'
																		fontSize='xs'
																		textTransform='uppercase'
																		ml='2'>
																		{data.subject}
																	</Box>
																</Flex>

																<Box my='6'>
																	<Text size='sm' as='samp' fontWeight='medium'>
																		{data.requestDesc}
																	</Text>
																</Box>
															</Box>
															<Divider my='3' />
															<Box>
																<Text w='full' fontSize='sm'>
																	By {data.user ? data.user.fullname : ''}
																</Text>
																{isLoggedin ? (
																	!isStudent ? (
																		<ApplyClass
																			user={userData}
																			request={data}
																		/>
																	) : (
																		''
																		// <JoinClass data={data} />
																	)
																) : null
																// <Badge colorScheme='yellow'  mt='4'>
																// 	Only logged In tutors can apply to this <br/>
																// 	request
																// </Badge>
																}
															</Box>
														</Box>
													</>
												)
										  })
										: null}
								</SimpleGrid>
							</TabPanel>
							<TabPanel>
								<p>two!</p>
							</TabPanel>
						</TabPanels>
					</Tabs>

					{/* 
                    <Button onClick={showMoreItems} isDisabled={atLast} mt="10">Load more</Button> */}
				</Box>
			</Box>
		</SlideFade>
	)
}
export async function getServerSideProps() {
	const { data } = await axios.get(
		`${process.env.API_URL}/requests?status=open&_sort=createdAt:desc`,
	)
	return {
		props: {
			requests: data,
		},
	}
}
