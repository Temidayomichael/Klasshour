import { useContext, useEffect, useState } from 'react'
import Head from 'next/head'
import {
	Badge,
	Box,
	Button,
	Divider,
	Flex,
	Heading,
	SimpleGrid,
	SlideFade,
	Stack,
	Text,
	Center,
	Spinner,
	useToast,
} from '@chakra-ui/react'
import { AiOutlineHome } from 'react-icons/ai'
import { RiVidiconLine } from 'react-icons/ri'
import getConfig from 'next/config'
import useLoginStatus from '../hooks/useLoginStatus'
import useUserType from '../hooks/useUserType'

import { parseCookies } from 'nookies'
import TimeAgo from 'react-timeago'
import UserContext from '../contexts/UserContext'
import AddRequest from '../components/dashboard/AddRequest'
import { useFormik } from 'formik'
import { useQuery } from 'react-query'
import { useMutation } from 'react-query'
import { GetApplications, GetRequests } from '../Queries/queries'
import JoinClass from '../components/requestsPage/joinClass'
import ApplyClass from '../components/requestsPage/applyClass'
import Select from 'react-select'
import axios from 'axios'
import { motion } from 'framer-motion'
import useApplied from '../hooks/useApplied'


export default function Student({ requests }) {
	const MotionBox = motion(Box)

	const isLoggedin = useLoginStatus()
	const isStudent = useUserType()
	
	let newRequestArray = []
	const jwt = parseCookies().jwt
	const userData = useContext(UserContext)
	const [subjectId, setSubjectId] = useState([])
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
		console.log(useApplied(newRequestArray))
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
			title: 'Error getting classes ...',
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
							useFormik={useFormik}
							isLoading={userData.isLoading}
							jwt={jwt}
							user={userData.user.id}
							useMutation={useMutation}
						/>
					</Box>
				) : (
					''
				)}

				<Box mb='10' m='auto'>
					<Box>
						<Heading as='h1' size='lg' isTruncated>
							Requests
						</Heading>
						<Text fontSize='lg'> Apply / Join request</Text>
					</Box>
					<Select
						getOptionLabel={(option) => option.subject}
						getOptionValue={(option) => option.id}
						options={requests}
						isMulti
						placeholder='Filter By Subjects'
						onChange={(values) =>
							setSubjectId(values.map((subject) => subject.id))
						}
					/>
					<SimpleGrid columns={3} spacing='30px'  mt='5'>
						{newRequestArray
							? newRequestArray.map((data, index) => {
									return (
										<>
                                            <Box
                                                animate={{ sacle:1 }}
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
												<Box p='6'>
													<Center justifyContent='space-between'>
														<Text fontSize='sm'>By {data.user?data.user.fullname:''}</Text>
														{isLoggedin ? (
															
															!isStudent ? (
																
																<ApplyClass user={userData} request={data} />
															) : (
																	<JoinClass data={data} />
															)
														) : (
															<Button isDisabled={!isLoggedin} mt='10'>
																Please login to apply / join request
															</Button>
														)}
													</Center>
												</Box>
											</Box>
										</>
									)
							  })
							: null}
					</SimpleGrid>
					{/* 
                    <Button onClick={showMoreItems} isDisabled={atLast} mt="10">Load more</Button> */}
				</Box>
			</Box>
		</SlideFade>
	)
}
export async function getServerSideProps() {
	const { data } = await axios.get(
		`${process.env.API_URL}/requests?_sort=createdAt:desc`,
	)
	return {
		props: {
			requests: data,
		},
	}
}
