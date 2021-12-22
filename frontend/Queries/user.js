import axios from 'axios'
import { parseCookies } from 'nookies'
const { publicRuntimeConfig } = getConfig()
import getConfig from 'next/config'
const jwt = parseCookies().jwt
import { ggl } from '@apollo/client'


export const GetUser = async (id) => {
	const data = await axios.get(`${publicRuntimeConfig.API_URL}/users/`+id, {
		headers: {
			Authorization: `Bearer ${jwt}`,
		},
	})
	return data
}

