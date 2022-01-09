import React, { useContext, useEffect, useState } from 'react'
import Footer from './Footer'
import { Router, useRouter } from 'next/router'

import NProgess from 'nprogress'
import Navbar from './menus/Navbar'
import { Box } from '@chakra-ui/layout'
import UserContext from '../contexts/UserContext'
import { io } from 'socket.io-client'

Router.onRouteChangeStart = (url) => {
	console.log(url)

	NProgess.start()
}

Router.onRouteChangeComplete = () => {
	NProgess.done()
}
Router.onRouteChangeError = () => {
	NProgess.done()
}
const socket = io.connect()

export default function Layout({ children }) {
	const [connected, setConnected] = useState(false)
	const [users, setAllUsers] = useState()
	useEffect(() => {
		socket.emit('join-server', 'Dao',userData.id)
		socket.on('new-user', (allUsers) => setAllUsers(allUsers))
		console.log('tutordata:', userData)
	}, [])
console.log('allUsers:', users)
	const userData = useContext(UserContext)
	const router = useRouter()

	return (
		<Box >
			{router.pathname=='/class/[classroom]' ?'': <Navbar />}

			{children}
			{router.pathname == '/class/[classroom]' ? '' : <Footer />}
		</Box>
	)
}
