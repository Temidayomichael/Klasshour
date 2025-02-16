import * as Yup from 'yup'
import {
	Box,
	Stack,
	FormControl,
	FormLabel,
	FormErrorMessage,
	Input,
	Button,
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	Select,
	Textarea,
} from '@chakra-ui/react'
import getConfig from 'next/config'
import { AddToRequest } from '../../Queries/request'

export default function AddRequest({
	useFormik,
	isLoading,
	user,
	useMutation,
	searchSubject,
}) {
	const { publicRuntimeConfig } = getConfig()
	const { isOpen, onOpen, onClose } = useDisclosure()
 console.log("add req user:", user)
	const { mutate, data, status } = useMutation(AddToRequest, {
		onSuccess: () => {
			alert('Successfully Posted')
		},
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

	const requestForm = useFormik({
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
			try {
				await mutate({
					values: values,
					user: user.students[0],
				})
			} catch (e) {}
			console.log(status)
		},
	})

	return (
		<Stack spacing={3}>
			<Box>
				<Button colorScheme='blue' variant='outline' onClick={onOpen}>
					Add new request
				</Button>
				<Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
					<ModalOverlay />
					<ModalContent>
						<form onSubmit={requestForm.handleSubmit}>
							<ModalHeader>Request Form</ModalHeader>
							<ModalCloseButton />
							<ModalBody>
								<FormControl id='subject' textAlign='center'>
									<FormLabel>Subject</FormLabel>
									<Input
										type='text'
										id='subject'
										values={requestForm.values.subject}
										onChange={requestForm.handleChange}
										defaultValue={searchSubject && searchSubject}
										disabled={searchSubject ? true : false}
									/>
									<FormErrorMessage>
										{requestForm.errors.subject}
									</FormErrorMessage>
								</FormControl>
								<FormControl id='location'>
									<FormLabel>Location</FormLabel>
									<Select
										placeholder='Select state'
										onChange={requestForm.handleChange}
										values={requestForm.values.location}>
										{nigStates.map((state) => (
											<option key={state} value={state}>
												{state}
											</option>
										))}
									</Select>
									<FormErrorMessage>
										{requestForm.errors.location}
									</FormErrorMessage>
								</FormControl>
								<FormControl id='type'>
									<FormLabel>Type</FormLabel>
									<Select
										placeholder='Select class mode'
										onChange={requestForm.handleChange}
										values={requestForm.values.type}>
										<option value='hometutoring'>Home tutoring</option>
										<option value='onlinetutoring'>Online tutoring</option>
									</Select>
									<FormErrorMessage>{requestForm.errors.type}</FormErrorMessage>
								</FormControl>
								<FormControl>
									<FormLabel>Request Details</FormLabel>
									<Textarea
										id='requestDesc'
										onChange={requestForm.handleChange}
										values={requestForm.values.requestDesc}
										size='sm'
									/>
									<FormErrorMessage>
										{requestForm.errors.requestDesc}
									</FormErrorMessage>
								</FormControl>
							</ModalBody>

							<ModalFooter>
								<Button type='submit' colorScheme='blue' isLoading={isLoading}>
									Add request
								</Button>
							</ModalFooter>
						</form>
					</ModalContent>
				</Modal>
			</Box>
			{/* <DataGrid
      columns={columns}
          rows={rows}
           defaultColumnOptions={{
        sortable: true,
             resizable: true,
        editable: true
      }}
    /> */}
		</Stack>
	)
}
