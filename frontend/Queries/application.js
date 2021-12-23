import axios from 'axios'
import { parseCookies } from 'nookies'
const { publicRuntimeConfig } = getConfig()
import getConfig from 'next/config'
const jwt = parseCookies().jwt

export const AddApplication = async ({ values, user, request }) => {
	console.log('udijfefnuednfefe:', user)
	const res = await axios({
		method: 'post',
		url: `${publicRuntimeConfig.API_URL}/class-applications`,
		data: {
			note: values.note,
			tutor: user,
			request: request.id,
		},
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${jwt}`,
		},
	})

	return res
}

export const GetApplications = async (reqId) => {
	console.log('serv reqid:', reqId.queryKey[1])
	const { data } = await axios.get(
		`${publicRuntimeConfig.API_URL}/class-applications?request=${reqId.queryKey[1]}`,
		{
			headers: {
				Authorization: `Bearer ${jwt}`,
			},
		},
	)
	return data
}
export const GetTutorApplications = async (reqId) => {
	console.log('serv reqid:', reqId.queryKey[1])
	const { data } = await axios.get(
		`${publicRuntimeConfig.API_URL}/class-applications?tutor.id=${reqId.queryKey[1]}`,
		{
			headers: {
				Authorization: `Bearer ${jwt}`,
			},
		},
	)
	return data
}
