import {
	Text,
	Stack,
	useToast,
	Spinner,
	Center,
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverHeader,
	PopoverBody,
	PopoverFooter,
	PopoverArrow,
	PopoverCloseButton,
	FormControl,
	FormLabel,
	FormErrorMessage,
	Select,
	Button,
	Input,
	Box,
	Flex,
	Portal,
	IconButton,
	HStack,
	ButtonGroup,
	Textarea,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableCaption,
	AlertDialog,
	AlertDialogBody,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogContent,
	AlertDialogOverlay,
} from '@chakra-ui/react'
import { parseCookies } from 'nookies'
import { useFormik } from 'formik'
import { useContext, useRef, useState } from 'react'
import UserContext from '../../contexts/UserContext'
import AddRequest from './AddRequest'
import { GetMyRequests, GetRequests } from '../../Queries/request'
import { DeleteRequest } from '../../Queries/request'
import { useMutation, focusManager } from 'react-query'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import * as Yup from 'yup'
import { GetApplications } from '../../Queries/application'
import { GetUser } from '../../Queries/user'
import { PaystackButton } from 'react-paystack'
import { UpcomingClass } from '../../Queries/class'

export default function RequestTab({ useQuery }) {
	const userData = useContext(UserContext)
	const jwt = parseCookies().jwt

	const [reqId, setReqId] = useState()
	const ref = useRef({
		tutor: 'loading ...',
	})

	const {
		error: applicationError,
		isLoading: applicationLoad,
		isFetching: applicationfetch,
		data: applicationData,
	} = useQuery(['applications', reqId], GetApplications, {
		// The query will not execute until the userId exists
		enabled: !!reqId,
	})
	const nigStates = [
		'Abia',
		'Adamawa',
		'Akwa Ibom',
		'Anambra',
		'Bauchi',
		'Bayelsa',
		'Benue',
		'Borno',
		'Cross River',
		'Delta',
		'Ebonyi',
		'Edo',
		'Ekiti',
		'Enugu',
		'Gombe',
		'Imo',
		'Jigawa',
		'Kaduna',
		'Kano',
		'Katsina',
		'Kebbi',
		'Kogi',
		'Kwara',
		'Lagos',
		'Nasarawa',
		'Niger',
		'Ogun',
		'Ondo',
		'Osun',
		'Oyo',
		'Plateau',
		'Rivers',
		'Sokoto',
		'Taraba',
		'Yobe',
		'Zamfara',
	]

	const editRequest = useFormik({
		initialValues: {
			type: '',
			subject: '',
			requestDesc: '',
			location: '',
		},
		validationSchema: Yup.object({
			type: Yup.string(),
			subject: Yup.string(),
			requestDesc: Yup.string(),
			location: Yup.string(),
		}),
		onSubmit: async (values) => {
			console.log(values)
			// try {
			//   await mutate({
			//       values: values,
			//       user: user

			//  })
			// } catch(e) { }
			// console.log(status)
		},
	})

	const {
		mutate,
		data: dataR,
		status,
		isLoading: delIsLoading,
	} = useMutation(['myrequests'], DeleteRequest, {
		onSuccess: () => {
			toast({
				title: 'Request deleted!',
				status: 'error',
				duration: 2000,
				isClosable: true,
			}),
				focusManager.setFocused(true)
		},
	})

	const {
		mutate: mutateUpcomingClass,
		status: upcomingClassStatus,
		isLoading: upcomingClassLoading,
	} = useMutation(['myrequests'], UpcomingClass, {
		onSuccess: () => {
			toast({
				title: 'Class ready',
				description: 'proceed to upcoming classes tab',
				status: 'success',
				duration: 2000,
				isClosable: true,
			}),
				focusManager.setFocused(true)
		},
	})

	const deleteRequest = async (id) => {
		try {
			await mutate({
				id: id,
			})
		} catch (e) {
			console.log(e)
		}

		console.log(status)
	}

	const { isError, isLoading, isFetching, data } = useQuery(
		['myrequests', userData.students[0]],
		GetMyRequests,
	)

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

	const handlePaystackSuccessAction = async (reference, data) => {
		try {
			await mutateUpcomingClass({
				student: userData,
				class_application: data,
			})
		} catch (e) {}
		// Implementation for whatever you want to do with reference and after success call.
		console.log(reference, data)
	}

	function DeleteAlertDialog() {
		const [isOpen, setIsOpen] = useState(false)
		const onClose = () => setIsOpen(false)
		const cancelRef = useRef()

		return (
			<>
				<Button colorScheme='red' size='sm' onClick={() => setIsOpen(true)}>
					Decline
				</Button>

				<AlertDialog
					isOpen={isOpen}
					leastDestructiveRef={cancelRef}
					onClose={onClose}>
					<AlertDialogOverlay>
						<AlertDialogContent>
							<AlertDialogHeader fontSize='lg' fontWeight='bold'>
								Delete Customer
							</AlertDialogHeader>

							<AlertDialogBody>
								Are you sure? You can't undo this action afterwards.
							</AlertDialogBody>

							<AlertDialogFooter>
								<Button ref={cancelRef} onClick={onClose}>
									Cancel
								</Button>
								<Button colorScheme='red' onClick={onClose} ml={3}>
									Delete
								</Button>
							</AlertDialogFooter>
						</AlertDialogContent>
					</AlertDialogOverlay>
				</AlertDialog>
			</>
		)
	}

	return (
		<Stack as={Box} spacing={3} zIndex={0}>
			<Flex justifyContent='space-between'>
				{' '}
				<Text as='h1' fontSize='4xl'>
					My Requests
				</Text>
				<AddRequest
					useFormik={useFormik}
					jwt={jwt}
					user={userData.id}
					useMutation={useMutation}
				/>
			</Flex>
			<>
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

				<Accordion allowToggle>
					{data.map((data, key) => {
						return (
							<AccordionItem key={key}>
								{({ isExpanded }) => (
									<>
										<Flex
											p='5'
											bg={isExpanded ? 'linkedin.100' : ''}
											justifyContent='space-between'>
											<HStack spacing='10'>
												<Box w='110px'>{data.type}</Box>
												<Box w='50px'>{data.status}</Box>
												<Text w='60px'>{data.location}</Text>
												<Text w='120px'>{data.subject}</Text>
												<Text w='150px'>{data.requestDesc}</Text>
											</HStack>
											<Flex>
												<HStack spacing='3'>
													<ButtonGroup size='sm' isAttached variant='outline'>
														<Button>Tutor Applications</Button>
														<IconButton
															aria-label='Applications'
															as={AccordionButton}
															onClick={async () => {
																await setReqId(data?.id)
																console.log('reqid:', reqId)
															}}
															icon={<AccordionIcon />}
														/>
													</ButtonGroup>

													<Popover placement='left'>
														<PopoverTrigger>
															<IconButton size='sm' icon={<EditIcon />} />
														</PopoverTrigger>
														<Portal>
															<PopoverContent>
																<form onSubmit={editRequest.handleSubmit}>
																	<PopoverArrow />
																	<PopoverHeader>Edit Request</PopoverHeader>
																	<PopoverCloseButton />
																	<PopoverBody>
																		<Stack spaceing={4}>
																			<FormControl
																				id='subject'
																				textAlign='center'>
																				<FormLabel>Subject</FormLabel>
																				<Input
																					type='text'
																					id='subject'
																					value='yes'
																					onChange={editRequest.handleChange}
																				/>
																				<FormErrorMessage>
																					{editRequest.errors.subject}
																				</FormErrorMessage>
																			</FormControl>
																			<FormControl id='location'>
																				<FormLabel>Location</FormLabel>
																				<Select
																					defaultValue={data.location}
																					onChange={editRequest.handleChange}
																					values={editRequest.values.location}>
																					{nigStates.map((state) => (
																						<option key={state} value={state}>
																							{state}
																						</option>
																					))}
																				</Select>
																				<FormErrorMessage>
																					{editRequest.errors.location}
																				</FormErrorMessage>
																			</FormControl>
																			<FormControl id='type'>
																				<FormLabel>Type</FormLabel>
																				<Select
																					defaultValue={data.type}
																					onChange={editRequest.handleChange}
																					values={editRequest.values.type}>
																					<option value='hometutoring'>
																						Home tutoring
																					</option>
																					<option value='onlinetutoring'>
																						Online tutoring
																					</option>
																				</Select>
																				<FormErrorMessage>
																					{editRequest.errors.type}
																				</FormErrorMessage>
																			</FormControl>
																			<FormControl>
																				<FormLabel>Request Details</FormLabel>
																				<Textarea
																					id='requestDesc'
																					onChange={editRequest.handleChange}
																					size='sm'
																					value={data.requestDesc}
																				/>
																				<FormErrorMessage>
																					{editRequest.errors.requestDesc}
																				</FormErrorMessage>
																			</FormControl>
																		</Stack>
																	</PopoverBody>
																	<PopoverFooter>
																		<ButtonGroup
																			d='flex'
																			justifyContent='flex-end'>
																			<Button type='submit' colorScheme='green'>
																				Save
																			</Button>
																		</ButtonGroup>
																	</PopoverFooter>
																</form>
															</PopoverContent>
														</Portal>
													</Popover>
													<Popover>
														<PopoverTrigger>
															<IconButton
																colorScheme='red'
																size='sm'
																icon={<DeleteIcon />}
															/>
														</PopoverTrigger>
														<Portal>
															<PopoverContent>
																<PopoverHeader fontWeight='semibold'>
																	Delete request
																</PopoverHeader>
																<PopoverArrow />
																<PopoverCloseButton />
																<PopoverBody>
																	Are you sure? You can't undo this action
																	afterwards.
																</PopoverBody>
																<PopoverFooter
																	d='flex'
																	justifyContent='flex-end'>
																	<Button
																		size='sm'
																		onClick={() => deleteRequest(data.id)}
																		isLoading={delIsLoading}
																		colorScheme='red'>
																		Delete
																	</Button>
																</PopoverFooter>
															</PopoverContent>
														</Portal>
													</Popover>
												</HStack>
											</Flex>
										</Flex>

										<AccordionPanel bg='gray.100' pb={4}>
											{applicationLoad && (
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
											<Table key={key} variant='striped' colorScheme='teal'>
												<TableCaption>
													All the Tutors that applied to this request
												</TableCaption>
												<Thead>
													<Tr>
														<Th>Online status</Th>
														<Th>Note</Th>
														<Th>Name</Th>
														<Th>Price</Th>
														<Th>Duration</Th>
														<Th>Status</Th>
														<Th>Actions</Th>
													</Tr>
												</Thead>
												<Tbody>
													{applicationData &&
														applicationData.map((data, index) => {
															let neg = ''
															console.log('app da:', data)
															GetUser(data.tutor.user).then((res) => {
																console.log('tutor da:', res)
																neg = res.data.fullname
																console.log('neg:', neg)
															})

															return (
																<>
																	<Tr id={index}>
																		<Td>online</Td>
																		<Td>{data.note}</Td>
																		<Td>{neg && neg}</Td>
																		<Td>{data.tutor.price}</Td>
																		<Td>{data.recommended_time} mins</Td>
																		<Td>{data.status}</Td>
																		<Td d='flex'>
																			<Button
																				colorScheme='green'
																				size='sm'
																				mr='4'
																				variant='outline'>
																				Accept
																			</Button>
																			<DeleteAlertDialog />
																		
																		</Td>
																	</Tr>
																</>
															)
														})}
												</Tbody>
												<Tfoot>
													<Tr>
														<Th>Online status</Th>
														<Th>Note</Th>
														<Th>Name</Th>
														<Th>Price</Th>
														<Th>Duration</Th>
														<Th>Status</Th>
														<Th>Actions</Th>
													</Tr>
												</Tfoot>
											</Table>
										</AccordionPanel>
									</>
								)}
							</AccordionItem>
						)
					})}
				</Accordion>
			</>
		</Stack>
	)
}
