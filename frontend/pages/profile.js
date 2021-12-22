import { useContext, useState } from 'react'
import BasicInfo from '../components/dashboard/tutor/BasicInfo'
import UserContext from '../contexts/UserContext'
import { useFormik } from 'formik'
import {
	Box,
	Text,
	Center,
	Container,
	Flex,
	Button,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
} from '@chakra-ui/react'
import { SlideFade } from '@chakra-ui/transition'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { FaRegUser } from 'react-icons/fa'

export default function Profile() {
	const router = useRouter()

	const { API_URL } = process.env

	const userData = useContext(UserContext)


	return (
		<SlideFade in={true} offsetY='20px'>
			<Head>
				<title>My Prolfile | Klasshour</title>
				<link rel='icon' href='../img/home_logo.png' />
			</Head>

			<Container maxW='5xl' mt='16'>
				<Text bg='#151a46' fontWeight='bold' color='gray.50' p='3'>
					Profile
				</Text>
				<Center as={Container} maxW='4xl' mb='20'>
					<Box>
						<Text as='h1' my='10' fontSize='4xl'>
							Account Settings
						</Text>
						<Tabs align='end' variant='enclosed'>
							<TabList>
								<Tab>Basic Information</Tab>
								<Tab>Add payment</Tab>
							</TabList>
							<TabPanels my='10'>
								<TabPanel>
									<BasicInfo
										useFormik={useFormik}
										fullname={userData.fullname}
										email={userData.email}
									/>
								</TabPanel>
								<TabPanel>
									<p>two!</p>
								</TabPanel>
							</TabPanels>
						</Tabs>
					
					</Box>
				</Center>
			</Container>
		</SlideFade>
	)
}
