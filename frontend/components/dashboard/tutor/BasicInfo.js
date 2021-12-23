import * as Yup from 'yup'
import {
	Select,
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Input,
	Button,
	SimpleGrid,
	HStack,
} from '@chakra-ui/react'
import axios from 'axios'
// import { HtmlEmojiCountryCodeSelector } from 'react-emoji-country-code-selector'
import { useContext, useRef, useState } from 'react'
import { useCountryRegion } from 'react-use-country-region'
import UserContext from '../../../contexts/UserContext'
import { FaRegUser } from 'react-icons/fa'

export default function BasicInfo({ useFormik }) {
	const { getCountryList } = useCountryRegion()
	const countryData = getCountryList()
	const [selectedCountry, setSelectedCountry] = useState({
		value: '',
		code: '',
	})

	const { result } = useCountryRegion(selectedCountry.code)
	const userData = useContext(UserContext)
	const profileForm = useFormik({
		initialValues: {
			name: userData.user.fullname,
			email: userData.user.email,
			introVideo: '',
			country: selectedCountry.value,
			region: '',
		},
		validationSchema: Yup.object({
			email: Yup.string(),
			fullname: Yup.string(),
			password: Yup.string().matches(
				/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
				'Password must contain at least 8 characters, one uppercase, one number and one special case character',
			),
			confirm_password: Yup.string().when('password', {
				is: (password) => (password && password.length > 0 ? true : false),
				then: Yup.string().oneOf(
					[Yup.ref('password')],
					"Password doesn't match",
				),
			}),
			country: Yup.string(),
			introVideo: Yup.string(),
			// userImage: Yup.mixed().test('fileSize', "File Size is too large", values => values.size <= FILE_SIZE)
			//   .test('fileType', "Unsupported File Format", values => SUPPORTED_FORMATS.includes(values.type))
		}),

		onSubmit: async (values) => {
			console.log(values)
			// const res = axios.post(
			// 	`${publicRuntimeConfig.API_URL}/upload`,
			// 	{
			// 		userImage: values.userImage,
			// 	},
			// 	{
			// 		headers: {
			// 			Authorization: 'Bearer ' + jwt,
			// 		},
			// 	},
			// )

			// 	const putMethod = {
			// 		method: 'PUT', // Method itself
			// 		headers: {
			// 			'Content-type': 'application/json; charset=UTF-8',
			// 			Authorization: `Bearer ${jwt}`, // Indicates the content
			// 		},
			// 		body: JSON.stringify({
			// 			fullname: values.name,
			// 		}), // We send data in JSON format
			// 	}
			// 	fetch(
			// 		`${publicRuntimeConfig.API_URL}/users/${userFormData.id}`,
			// 		putMethod,
			// 	)
			// 		.then((response) => response.json())
			// 		.then((data) => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
			// 		.catch((err) => console.log(err))
		},
	})

	return (
		<>
			<form onSubmit={profileForm.handleSubmit}>
				<SimpleGrid columns='2' columnGap={10} spacing='5'>
					<FormControl id='email'>
						<FormLabel>Email address</FormLabel>
						<Input type='email' isDisabled value={profileForm.values.email} />
						<FormErrorMessage>{profileForm.errors.email}</FormErrorMessage>
					</FormControl>
					<FormControl>
						<FormLabel>Full Name</FormLabel>
						<Input
							type='text'
							id='name'
							onChange={profileForm.handleChange}
							value={profileForm.values.name}
						/>

						<FormErrorMessage>{profileForm.errors.fullname}</FormErrorMessage>
					</FormControl>

					{/* <div>
							<CountryDropdown
								value={country}
								onChange={(val) => this.selectCountry(val)}
							/>
							<RegionDropdown
								country={country}
								value={region}
								onChange={(val) => this.selectRegion(val)}
							/>
						</div> */}

					<FormControl
						id='country'
						isInvalid={
							profileForm.errors.country && profileForm.touched.country
						}>
						<FormLabel>Country</FormLabel>
						<Select
							placeholder='Select country'
							onChange={(value) => {
								setSelectedCountry({
									...selectedCountry,
									value: JSON.parse(value.target.value).value,
									code: JSON.parse(value.target.value).code,
								})
							}}>
							{countryData &&
								countryData.map((data) => (
									<>
										<option
											value={JSON.stringify({
												value: data.countryName,
												code: data.countryShortCode,
											})}>
											{data.countryName}
										</option>
									</>
								))}
						</Select>
						{/* <CountryDropdown
								value={countryData.country}
								onChange={(val) =>
									setCountryData({
										...countryData,
										country: val,
									})
								}
							/> */}
						<FormErrorMessage>{profileForm.errors.country}</FormErrorMessage>
					</FormControl>

					<FormControl
						id='confirm_password'
						isInvalid={
							profileForm.errors.confirm_password &&
							profileForm.touched.confirm_password
						}>
						<FormLabel>Confirm Password</FormLabel>
						<HStack>
							<Input
								placeholder='+234'
								id='confirm_password'
								onChange={profileForm.handleChange}
								w='20'
								// values={profileForm.values.confirm_password}
								// onInput={(e) =>
								// 	setUserFormData({
								// 		...userFormData,
								// 		confirm_password: e.target.value,
								// 	})
								// }
							/>
							<Input placeholder='Phone number' />
						</HStack>
						<FormErrorMessage>
							{profileForm.errors.confirm_password}
						</FormErrorMessage>
					</FormControl>
					<FormControl
						isInvalid={
							profileForm.errors.password && profileForm.touched.password
						}>
						<FormLabel>Region</FormLabel>
						<Select
							placeholder='Select region/province'
							value={profileForm.values.region}
							onChange={profileForm.handleChange}>
							{result &&
								result.regions.map((data) => (
									<option value={data.name}>{data.name}</option>
								))}
						</Select>

						<FormErrorMessage>{profileForm.errors.region}</FormErrorMessage>
					</FormControl>
					<FormControl id='userImage' textAlign='center'>
						<FormLabel>Highest education achieved </FormLabel>
						<Input
							id='education'
							value={profileForm.values.introVideo}
							onChange={profileForm.handleChange}
							placeholder='Bsc Computer Science / High school(Science)'
						/>
						<FormErrorMessage>{profileForm.errors.introVideo}</FormErrorMessage>
					</FormControl>
				</SimpleGrid>

				<Button type='submit' mt='5' w='40' colorScheme='blue'>
					Update Profile
				</Button>
			</form>
			<Button
				mt='5'
				color='gray.600'
				variant='outline'
				colorScheme='gray'
				w='40'
				leftIcon={<FaRegUser />}>
				Delete account
			</Button>
		</>
	)
}
