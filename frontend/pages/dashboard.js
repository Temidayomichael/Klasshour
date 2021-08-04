import React, { useContext, useState } from 'react'
import getConfig from 'next/config'
import { parseCookies } from 'nookies'
import Head from 'next/head'
import {
	Box,
	Center,
	Divider,
	Flex,
	Kbd,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Alert,
	AlertIcon,
	Input,
	SlideFade,
	Textarea,
	Text,
	Button,
} from '@chakra-ui/react'
import UserContext from '../contexts/UserContext'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import { FaRegUser } from 'react-icons/fa'
import { useFormik } from 'formik'
import Dropzone from 'react-dropzone'
import axios from 'axios'
import DataGrid from 'react-data-grid'
import BasicInfo from '../components/dashboard/tutor/BasicInfo'
import RequestTab from '../components/dashboard/RequestTab'
import ClassesTab from '../components/dashboard/ClassesTab'
import { useQuery, useMutation } from 'react-query'
import { push as Menu } from 'react-burger-menu'
import { PaystackButton } from 'react-paystack'

const { publicRuntimeConfig } = getConfig()

export default function Dashboard({ jwt, requests, requestData }) {
	console.log(requests)
	console.log(requestData)

  const userData = useContext(UserContext)
  console.log(userData)
	//   const { PAYSTACK_PUBLICKEY } = process.env
	// console.log(PAYSTACK_PUBLICKEY)
	//   const componentProps = {
	//     email: userData.email,
	//     amount: "200",
	//     metadata: {
	//       name: userData.fullname,
	//       phone: "08102334561",
	//     },
	//     publicKey: PAYSTACK_PUBLICKEY,
	//     text: "Pay Now",
	//     onSuccess: () =>
	//       alert("Thanks for doing business with us! Come back soon!!"),
	//     onClose: () => alert("Wait! You need this oil, don't go!!!!"),
	//   }

	//   const columns = [

	//   { key: 'type', name: 'Type',  editable: true },
	//   { key: 'desc', name: 'Description' },
	//   { key: 'status', name: 'Status' },
	//   { key: 'location', name: 'Location' },
	//   { key: 'subject', name: 'Subject', },
	//     {
	//       key: 'actions', name: 'Actions',

	//       },

	// ];

	//   const rows = [{
	//    action: row => (
	//            <div>
	//                <button onClick={() => handleEdit(row.original)}>Edit</button>
	//                <button onClick={() => handleDelete(row.original)}>Delete</button>
	//            </div>)
	//   }];
	//   const action = (
	//     <Text>action</Text>
	//   )
	//   requests.forEach(function (request) {
	//     let reqObj = {
	//       id: request.id,
	//       desc: request.requestDesc,
	//       status: request.status,
	//       location: request.location,
	//       subject: request.subject,
	//       type: request.type,
	//       userImage: request.user.userImage.url,

	//     }
	//     rows.unshift(reqObj)
	//   })

	const dashboardMenu =
		userData.role == 'Tutor' ? (
			<Box className='content' m='auto' my='10'>
				<Text bg='#151a46' color='gray.50' p='3' m='0'>
					Klasshour Dashboard
				</Text>

				<Tabs variant='enclosed' isFitted isLazy>
					<TabList>
						<Tab>My Applicaions</Tab>
						<Tab>Upcoming classes</Tab>
						<Tab>Past class</Tab>
						<Tab>Teachers</Tab>
						<Tab>Messages</Tab>
						<Box fontSize='lg'>
							{/* <Kbd  color="white" bg="red" mr="2">23 minutes left</Kbd> <Kbd as={PaystackButton}  {...componentProps} >Add minutes</Kbd> */}
						</Box>
					</TabList>

					<TabPanels id='page-wrap' className='tabs'>
						<TabPanel className='content' m='auto' id='page-wrap'>
							No applicaions ...
						</TabPanel>
						<TabPanel mx='auto'>
							<ClassesTab
								jwt={jwt}
								useQuery={useQuery}
								useMutation={useMutation}
							/>
							ddyfgdygfygfydf
						</TabPanel>
						<TabPanel mx='auto'>ddyfgdygfygfydf</TabPanel>
						<TabPanel mx='auto'>ddyfgdygfygfydf</TabPanel>
					</TabPanels>
				</Tabs>
			</Box>
		) : (
			<Box className='content' m='auto' my='10'>
				<Text bg='#151a46' color='gray.50' p='3' m='0'>
					Klasshour Dashboard
				</Text>

				<Tabs variant='enclosed' isFitted isLazy>
					<TabList>
						<Tab>My Requests</Tab>
						<Tab>Upcoming classes</Tab>
						<Tab>Past class</Tab>
						<Tab>Teachers</Tab>
						<Tab>Messages</Tab>
						<Box fontSize='lg'>
							{/* <Kbd  color="white" bg="red" mr="2">23 minutes left</Kbd> <Kbd as={PaystackButton}  {...componentProps} >Add minutes</Kbd> */}
						</Box>
					</TabList>

					<TabPanels id='page-wrap' className='tabs'>
						<TabPanel className='content' m='auto' id='page-wrap'>
							<RequestTab
								jwt={jwt}
								useQuery={useQuery}
								useMutation={useMutation}
							/>
						</TabPanel>
						<TabPanel mx='auto'>
							<ClassesTab
								jwt={jwt}
								useQuery={useQuery}
								useMutation={useMutation}
							/>
							ddyfgdygfygfydf
						</TabPanel>
						<TabPanel mx='auto'>ddyfgdygfygfydf</TabPanel>
						<TabPanel mx='auto'>ddyfgdygfygfydf</TabPanel>
					</TabPanels>
				</Tabs>
			</Box>
		)
	return (
		<SlideFade in={true} offsetY='20px'>
			<Head>
				<title>Account Dashboard | Klasshour</title>
				<link rel='icon' href='../img/home_logo.png' />
			</Head>

			<Box className='content'>{dashboardMenu}</Box>
		</SlideFade>
	)
}

export async function getServerSideProps(ctx) {
	const jwt = parseCookies(ctx).jwt
	//   const res = await fetch(`${publicRuntimeConfig.API_URL}/requests?_sort=createdAt:desc`);
	//   const requests = await res.json()
	//   let requestData =[];
	//   requests.forEach(function (request) {
	//     let reqObj = {
	//       id: request.id,
	//       desc: request.requestDesc,
	//       status: request.status,
	//       location: request.location,
	//       subject: request.subject,
	//       type: request.type,
	//       userImage: request.user.userImage.url
	//     }
	//     requestData.push( reqObj)

	// });

	return {
		props: {
			// requests,
			jwt,
			// requestData
		},
	}
}
