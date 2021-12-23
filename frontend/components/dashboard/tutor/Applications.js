import {
	Box,
	Text,
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	Button,
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverHeader,
	PopoverBody,
	PopoverFooter,
	PopoverArrow,
	PopoverCloseButton,
	Center,
	Spinner,
	Input,
	FormControl,
	FormErrorMessage,
	Alert,
	AlertIcon,
	FormHelperText,
	FormLabel,
	Stack,
	Select,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
	useToast,
	Tooltip,
} from '@chakra-ui/react'
import { useQuery } from '@chakra-ui/media-query'
import React, { useContext, useRef, useState, Suspense } from 'react'
import UserContext from '../../../contexts/UserContext'
import { GetTutorApplications } from '../../../Queries/application'
import { UpcomingClass } from '../../../Queries/class'
import { GetRequest } from '../../../Queries/request'
import {
	GenerateTimeStamp,
	GenerateSignature,
	hmacsha1,
} from '../../../config/apiConfig'
import * as Yup from 'yup'
import { useFormik, Field, FormikProvider } from 'formik'
import momentTZ from 'moment-timezone'
import timeZoneData from './timezone.json'
const axios = require('axios')
import Querystring from 'querystring'
import hmacSHA1 from 'crypto-js/hmac-sha1'
import Base64 from 'crypto-js/enc-base64'
import moment from 'moment'
import convert from 'xml-js'
import { useMutation } from 'react-query'
import { InfoIcon } from '@chakra-ui/icons'

export default function TutorAppications({ useQuery, setTabIndex }) {
	const [popoverLoading, setPopoverLoading] = useState(false)
	const [popoverdisabled, setPopoverDisabled] = useState(false)
	const toast = useToast()
	const ref = useRef({
		request: 'loading...',
	})
	const { mutate, status } = useMutation(UpcomingClass, {
		onSuccess: () => {
			toast({
				title: 'Added to upcoming class!',
				status: 'success',
				isClosable: true,
				position: 'top',
			})
			setTabIndex(1)
		},
	})
	const userData = useContext(UserContext)
	console.log('userData form tutor application:', userData)

	const defaultTimeZone = momentTZ.tz.guess()

	const [reqId, setReqId] = useState(userData.tutors[0].id)
	const [req, setReq] = useState()

	const { error, isLoading, isFetching, data } = useQuery(
		['Tutorapplications', reqId],
		GetTutorApplications,
		{
			// The query will not execute until the userId exists
			enabled: !!reqId,
		},
	)

	console.log('use query error:', error)

	const bookClassForm = useFormik({
		initialValues: {
			title: 'class',
			presenter_id: userData.id,
			presenter_name: userData.tutors[0].user.fullname,
			start_time: moment(new Date()).format('YYYY-MM-DDTHH:mm'),
			duration: '15',
			time_zone: defaultTimeZone,
			create_recording: false,
			attendee_limit: '30',
			access_key: process.env.WIZIQ_ACCESS_KEY,
			method: 'create',
		},
		onSubmit: async (values) => {
			setPopoverLoading(true)

			const secretAcessKey = process.env.WIZIQ_SECRET_KEY
			const method = 'create'
			let signatureParameters = []
			signatureParameters['access_key'] = process.env.WIZIQ_ACCESS_KEY //Required
			signatureParameters['timestamp'] = GenerateTimeStamp() //Required
			signatureParameters['method'] = method //Required
			console.log(signatureParameters['timestamp'])

			const signature = GenerateSignature(
				method,
				signatureParameters,
				secretAcessKey,
			)
			console.log(signature)
			const formValues = {
				...values,
				start_time: values.start_time.replace(/T/g, ' '),
				access_key: signatureParameters['access_key'],
				timestamp: signatureParameters['timestamp'],
				signature: signature,
				time_zone: values.time_zone.replaceAll(' ', ''),
			}
			const formBody = Object.entries(formValues)
				.map(([key, value]) => key + '=' + value)
				.join('&')
			console.log('form values:', formBody.time_zone)

			const config = {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			}
			axios
				.post(
					'http://classapi.wiziqxt.com/apimanager.ashx/?method=create',
					formBody,
					config,
				)
				.then(async (response) => {
					const res = response.data
					const result = JSON.parse(
						convert.xml2json(res, {
							compact: true,
							spaces: 4,
						}),
					)
					if (result.rsp._attributes.status == 'fail') {
						toast({
							title: 'Schedule Unsuccessful!',
							description: result.rsp.error._attributes.msg,
							status: 'error',
							isClosable: true,
							position: 'top',
						})
						setPopoverLoading(false)
					} else {
						toast({
							title: 'Class scheduled successfully!',
							// description: result.rsp.error._attributes.msg,
							status: 'success',
							isClosable: true,
							position: 'top',
						})
						const classData = {
							recording_url:
								result.rsp.create.class_details.recording_url._cdata,
							presenter_url:
								result.rsp.create.class_details.presenter_list.presenter
									.presenter_url._cdata,
							class_id: result.rsp.create.class_details.class_id._text,
							class_master_id:
								result.rsp.create.class_details.class_master_id._text,
							tutor: formValues.presenter_id,
							scheduled_date: formValues.start_time,
							students: [req.student],
							request: req,
						}
						try {
							await mutate(classData)
						} catch (e) {
							console.log(e)
						}

						console.log(status)
						setPopoverLoading(false)
						setPopoverDisabled(true)
					}

					console.log(result)
				})
		},
	})

	console.log('checkltime:', moment(new Date()).format('YYYY-MM-DDTHH:mm'))

	// const timeZonesList = momentTZ.tz.names();
	console.log('timeZoneData', defaultTimeZone)
	return (
		<>
			<Alert status='warning'>
				<AlertIcon />
				Classes cannot be booked on pending payment status
			</Alert>

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
			<Box mt='5'>
				<Table size='sm'>
					<Thead>
						<Tr>
							<Th>Note</Th>
							<Th>Loction</Th>
							<Th>Subject</Th>
							<Th>Request Description</Th>
							<Th>Time</Th>

							<Th></Th>
						</Tr>
					</Thead>
					<Tbody>
						{data &&
							data.map((applicationData, key) => {
								console.log('data.request:', data)
								// GetRequest(data.request).then((res) => {
								// 	console.log('response:',res.data)
								// 	ref.current.request = res.data
								// }	)

								return (
									<>
										<Tr id={key}>
											<Td>{applicationData.note}</Td>
											<Td>{applicationData.request.location}</Td>
											<Td>{applicationData.request.subject}</Td>
											<Td>{applicationData.request.requestDesc}</Td>
											<Td>{applicationData.recommended_time} mins</Td>

											<Td d='flex'>
												<Button
													colorScheme='red'
													size='sm'
													mr='4'
													disabled={applicationData.status !== 'pending'}
													variant='outline'>
													Withdraw
												</Button>
												<Popover>
													<PopoverTrigger>
														<Button
															disabled={applicationData.status === 'pending'}
															onClick={() => {
																setReq(applicationData.request)
															}}
															colorScheme='facebook'>
															Book session
														</Button>
													</PopoverTrigger>
													<PopoverContent>
														<FormikProvider value={bookClassForm}>
															<form onSubmit={bookClassForm.handleSubmit}>
																<PopoverArrow />
																<PopoverCloseButton />
																<PopoverHeader>
																	Proceed to schedule a class
																</PopoverHeader>
																<PopoverBody p='5' h='250' overflowY='scroll'>
																	<Stack>
																		<FormControl id='title' textAlign='center'>
																			<FormLabel>Title</FormLabel>

																			<Input
																				onChange={bookClassForm.handleChange}
																				textTransform='capitalize'
																				defaultValue={
																					applicationData.request.subject +
																					' class'
																				}
																			/>
																			<FormErrorMessage>
																				{bookClassForm.errors.start_time}
																			</FormErrorMessage>
																		</FormControl>
																		<FormControl
																			id='start_time'
																			textAlign='center'>
																			<FormLabel>Start time</FormLabel>

																			<Input
																				onChange={bookClassForm.handleChange}
																				min={moment(new Date()).format(
																					'YYYY-MM-DDTHH:mm',
																				)}
																				value={bookClassForm.values.start_time}
																				type='datetime-local'
																			/>
																			<FormErrorMessage>
																				{bookClassForm.errors.start_time}
																			</FormErrorMessage>
																		</FormControl>
																		<FormControl
																			id='time_zone'
																			textAlign='center'>
																			<FormLabel>
																				TIme zone{' '}
																				<Tooltip
																					ml='3'
																					variant=''
																					hasArrow
																					label={
																						'Your timezone is ' +
																						defaultTimeZone
																					}>
																					<InfoIcon />
																				</Tooltip>
																			</FormLabel>
																			<Select
																				onChange={bookClassForm.handleChange}
																				value={bookClassForm.values.time_zone}
																				placeholder='Select zone'>
																				{timeZoneData &&
																					timeZoneData.time_zone_list.time_zone.map(
																						(timezone, index) => {
																							return (
																								<option
																									value={timezone.__cdata}
																									id={index}>
																									{timezone.__cdata}
																								</option>
																							)
																						},
																					)}
																			</Select>
																			<FormErrorMessage>
																				{bookClassForm.errors.time_zone}
																			</FormErrorMessage>
																		</FormControl>
																		<FormControl
																			id='duration'
																			textAlign='center'>
																			<FormLabel>Duration (mins)</FormLabel>
																			<Field name='duration'>
																				{({ field, form }) => (
																					<NumberInput
																						id='duration'
																						{...field}
																						onChange={(val) =>
																							form.setFieldValue(
																								field.name,
																								val,
																							)
																						}
																						value={
																							bookClassForm.values.duration
																						}
																						min={5}
																						max={60}>
																						<NumberInputField />
																						<NumberInputStepper>
																							<NumberIncrementStepper />
																							<NumberDecrementStepper />
																						</NumberInputStepper>
																					</NumberInput>
																				)}
																			</Field>
																			<FormErrorMessage>
																				{bookClassForm.errors.duration}
																			</FormErrorMessage>
																		</FormControl>
																	</Stack>
																</PopoverBody>
																<PopoverFooter
																	d='flex'
																	justifyContent='flex-end'>
																	<Button
																		type='submit'
																		isDisabled={popoverdisabled}
																		isLoading={popoverLoading}>
																		Confirm
																	</Button>
																</PopoverFooter>
															</form>
														</FormikProvider>
													</PopoverContent>
												</Popover>
											</Td>
										</Tr>
									</>
								)
							})}
					</Tbody>
					<Tfoot>
						<Tr>
							<Th>Note</Th>
							<Th>Loction</Th>
							<Th>Subject</Th>
							<Th>Request Description</Th>
							<Th>Time</Th>
						</Tr>
					</Tfoot>
				</Table>
			</Box>
		</>
	)
}
