import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import UserContext from '../contexts/UserContext'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()
import { parseCookies } from 'nookies'

export default function useApplied( newRequestArray ) {
	const jwt = parseCookies().jwt
	const userData = useContext(UserContext)
	const [hasApplied, sethasApplied] = useState(false)
	console.log(userData, newRequestArray)

    useEffect(() => {
        
		// const { data } =  axios.get(
		// 	`${publicRuntimeConfig.API_URL}/class-applications?Tutor=${userData}&Request=${request}`,
		// 	{
		// 		headers: {
		// 			Authorization: `Bearer ${jwt}`,
		// 		},
		// 	},
		// )
		if (newRequestArray) {
			sethasApplied(true)
		}
		return () => {
			sethasApplied(false)
		}
	})

	return hasApplied
}
