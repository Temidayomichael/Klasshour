import { useState } from 'react'
import { Field, Form, FormikProvider, useFormik } from 'formik'
import * as Yup from 'yup'
import {
	Box,
	useToast,
	Button,
	Divider,
	FormControl,
	FormErrorMessage,
	Input,
	InputGroup,
	InputLeftElement,
	Stack,
	Text,
	Center,
	Radio,
	RadioGroup,
} from '@chakra-ui/react'
import { MdEmail } from 'react-icons/md'
import { RiLockPasswordFill } from 'react-icons/ri'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { FaUserAlt } from 'react-icons/fa'
import getConfig from 'next/config'
import Axios from 'axios'
import Link from 'next/link'
import { setCookie } from 'nookies'
import Router from 'next/router'
import Head from 'next/head'

const { publicRuntimeConfig } = getConfig()

export default function Register({ history }) {
	const toast = useToast()
	const [loading, setLoading] = useState(false)
	const [disableBtn, setDisableBtn] = useState(false)

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
			confirm_password: '',
			name: '',
			role: '',
		},
		validationSchema: Yup.object({
			name: Yup.string().required('Please input name'),
			email: Yup.string().email('Invalid email format').required('Required!'),
			role: Yup.string().required('Required! Please select a role'),
			password: Yup.string()
				.required('No password provided.')
				.min(8, 'Password is too short - should be 8 chars minimum.')
				.matches(
					/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*.,])(?=.{8,})/,
					'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
				),
			confirm_password: Yup.string()
				.required('Please confirm password.')
				.oneOf([Yup.ref('password'), null], 'Passwords must match'),
		}),
		onSubmit: async (values) => {
			console.log('values: ', values)
			setLoading(true)

			const user = {
				email: values.email,
				password: values.password,
				fullname: values.name,
				role: values.role,
				username: values.name.split(' ').join(''),
			}

			await Axios.post(
				`${publicRuntimeConfig.API_URL}/auth/local/register`,
				user,
			)
				.then(async (res) => {
					await Axios.post(`${publicRuntimeConfig.API_URL}/${user.role}s`, {
						user: res.data.user,
					})

					toast({
						title: 'Account Created!',
						description: 'Confirmation email sent succesfuly.',
						status: 'success',
						duration: null,
						isClosable: true,
						position: 'top',
					})

					// Router.push('/dashboard')
					setLoading(false)
				})
				.catch((err) => {
					console.log(err.response.data.message[0].messages[0].message)

					toast({
						title: 'Error!',
						description: `${err.response.data.message[0].messages[0].message} Please try again`,
						status: 'error',
						duration: 5000,
						isClosable: true,
						position: 'bottom-left',
					})
					setLoading(false)
				})

			setLoading(false)
		},
	})

	return (
		<Center>
			<Head>
				<title>Register | Klasshour</title>
				<link rel='icon' href='../img/home_logo.png' />
			</Head>
			<Center my='20'>
				<FormikProvider value={formik}>
					<form onSubmit={formik.handleSubmit}>
						<Stack w='30vw' spacing={7}>
							<Text fontWeight='bold' fontSize='xl' m='auto'>
								Welcome to Klasshour
							</Text>
							<Divider borderColor='gray.500' opacity='0.5' />
							<Stack spacing={5}>
								<FormControl
									isInvalid={formik.errors.role && formik.touched.role}>
									<RadioGroup>
										<Stack direction='row'>
											<Field
												as={Radio}
												type='radio'
												id='tutor'
												name='role'
												value='tutor'>
												Tutor
											</Field>
											<Field
												as={Radio}
												type='radio'
												id='authenticated'
												name='role'
												value='authenticated'>
												Student
											</Field>
										</Stack>
									</RadioGroup>
									<FormErrorMessage>{formik.errors.role}</FormErrorMessage>
								</FormControl>
								<FormControl
									isInvalid={formik.errors.name && formik.touched.name}>
									<InputGroup>
										<InputLeftElement
											color='gray.400'
											children={<FaUserAlt />}
										/>
										<Input
											id='name'
											placeholder='Fullname'
											type='text'
											onChange={formik.handleChange}
											values={formik.values.name}
										/>
									</InputGroup>
									<FormErrorMessage>{formik.errors.name}</FormErrorMessage>
								</FormControl>
								<FormControl
									isInvalid={formik.errors.email && formik.touched.email}>
									<InputGroup>
										<InputLeftElement color='gray.400' children={<MdEmail />} />
										<Input
											id='email'
											placeholder='Email'
											type='email'
											onChange={formik.handleChange}
											values={formik.values.email}
										/>
									</InputGroup>
									<FormErrorMessage>{formik.errors.email}</FormErrorMessage>
								</FormControl>
								<FormControl
									isInvalid={formik.errors.password && formik.touched.password}>
									<InputGroup>
										<InputLeftElement
											color='gray.400'
											children={<RiLockPasswordFill />}
										/>
										<Input
											id='password'
											placeholder='Password'
											type='password'
											onChange={formik.handleChange}
											values={formik.values.password}
										/>
									</InputGroup>
									<FormErrorMessage>{formik.errors.password}</FormErrorMessage>
								</FormControl>
								<FormControl
									isInvalid={
										formik.errors.confirm_password &&
										formik.touched.confirm_password
									}>
									<InputGroup>
										<InputLeftElement
											color='gray.400'
											children={<RiLockPasswordFill />}
										/>
										<Input
											id='confirm_password'
											placeholder='Confirm password'
											type='password'
											onChange={formik.handleChange}
											values={formik.values.confirm_password}
										/>
									</InputGroup>
									<FormErrorMessage>
										{formik.errors.confirm_password}
									</FormErrorMessage>
								</FormControl>
								<Button
									bg='#161B45'
									rightIcon={<AiOutlineArrowRight />}
									color='white'
									_hover={{ opacity: '0.9' }}
									_active={{
										bg: ' #211221',
										transform: 'scale(0.98)',
									}}
									type='submit'
									isLoading={loading}>
									Register
								</Button>

								<Stack isInline spacing='2' m='auto'>
									<Text>Already have an account?</Text>
									<Box color='blue.400' mb='5'>
										<Link mb='10' href='/login'>
											Login
										</Link>
									</Box>
								</Stack>
								{formik.errors.password ? formik.errors.password : null}
							</Stack>
						</Stack>
					</form>
				</FormikProvider>
			</Center>
		</Center>
	)
}
