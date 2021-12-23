import axios from 'axios'
import getConfig from 'next/config'
import Link from 'next/link'
const { publicRuntimeConfig } = getConfig()
import { parseCookies } from 'nookies'
import {
	Center,
	Spinner,
	useToast,
	Button,
	Box,
	Stack,
	TableCaption,
	Table,
	Tr,
	Th,
	Td,
	Thead,
	Tbody,
	Tfoot,
} from '@chakra-ui/react'
import { GetClasses } from '../../Queries/class'
import moment from 'moment'
import { useContext } from 'react'
import UserContext from '../../contexts/UserContext'

export default function ClassesTab({ useQuery }) {
	const userData = useContext(UserContext)
	const { data, isError, isLoading, isFetching, success } = useQuery(
		['classes'],
		GetClasses,
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
	return (
		<Stack>
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
			<Box>
				{
					<>
						{}
						<Table my='5' variant='striped' colorScheme='blue'>
							<Thead>
								<Tr>
									<Th>No of Students</Th>
									<Th>Subject</Th>
									<Th>Description</Th>
									<Th>Duration</Th>
									<Th>Time and Date</Th>
									<Th></Th>
								</Tr>
							</Thead>
							<Tbody>
								{data.map((data, index) => {
									console.log("Clesses data:",data)
									return (
										<>
											<Tr id={index}>
												<Td>{data.students.length}</Td>
												<Td>{data.request.subject}</Td>
												<Td>{data.request.requestDesc}</Td>
												<Td>{data.duration} minute(s)</Td>
												<Td>
													{moment
														.utc(data.scheduled_date)
														.format('dddd, MMMM Do YYYY, h:mm:ss a')}
												</Td>
												<Td>
													<Link
														href={{
															pathname:
																userData.role == 'Student'
																	? data.attendee_url
																	: data.presenter_url,
														}}>
														<Button
															size='sm'
															colorScheme='green'
															isDisabled={
																userData.role == 'Student'
																	? data.attendee_url
																		? false
																		: true
																	: false
															}
															variant='outline'>
															{userData.role == 'Student'
																? data.attendee_url
																	? 'Proceed to class'
																	: 'Waiting for class schedule'
																: 'Proceed to class'}
														</Button>
													</Link>
												</Td>
											</Tr>
										</>
									)
								})}
							</Tbody>
							<Tfoot>
								<Tr>
									<Th>No of Students</Th>
									<Th>Subject</Th>
									<Th>Description</Th>
									<Th>Duration</Th>
									<Th>Time and Date</Th>
									<Th></Th>
								</Tr>
							</Tfoot>
						</Table>
					</>
				}
			</Box>
		</Stack>
	)
}
