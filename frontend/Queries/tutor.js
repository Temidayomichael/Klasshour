import axios from 'axios'
import { parseCookies } from 'nookies'
const { publicRuntimeConfig } = getConfig()
import getConfig from 'next/config'
const jwt = parseCookies().jwt
import { gql } from '@apollo/client'


export const GetTutors = async (language) => {
	console.log('queri fill:', language)
	const { data } = await axios.get(`${publicRuntimeConfig.API_URL}/tutors}`, {
		headers: {
			Authorization: `Bearer ${jwt}`,
		},
	})
	return data
}
export const GetTutor = async (id) => {
	const { data } = await axios.get(
		`${publicRuntimeConfig.API_URL}/tutors/${id}`,
		{
			headers: {
				Authorization: `Bearer ${jwt}`,
			},
		},
	)
	return data
}


