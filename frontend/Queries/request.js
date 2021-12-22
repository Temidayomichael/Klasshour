import axios from 'axios'
import { parseCookies } from 'nookies'
const { publicRuntimeConfig } = getConfig()
import getConfig from 'next/config'
const jwt = parseCookies().jwt

export const GetMyRequests = async (userData) => {
	console.log('queri fill:', userData)
	console.log(userData.queryKey[1].user.id)
	const { data } = await axios.get(
		`${publicRuntimeConfig.API_URL}/requests?student=${userData.queryKey[1].id}`,
		{
			headers: {
				Authorization: `Bearer ${jwt}`,
			},
		},
	)
	return data
}

export const GetRequests = async (key) => {
	const requestId = key.queryKey[1].subjectId.map((id) =>
		id ? `_id=${id}` : '',
	)
	const requestIdQueryString = requestId.join('&')
	const { data } = await axios.get(
		`${publicRuntimeConfig.API_URL}/requests?status=open&_sort=createdAt:desc&${requestIdQueryString}`,
	)
	return {
		data,
	}
}

export const AddToRequest = async ({ values, user }) => {
	console.log('values:', values, user)
	const postRequest = {
		method: 'POST', // Method itself
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
			Authorization: `Bearer ${jwt}`, // Indicates the content
		},
		body: JSON.stringify({
			type: values.type,
			subject: values.subject,
			requestDesc: values.requestDesc,
			location: values.location,
			status: 'open',
			student: user.id,
		}), //send data in JSON format
	}
	fetch(`${publicRuntimeConfig.API_URL}/requests`, postRequest)
		.then((response) => response.json())
		.then((data) => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
		.catch((err) => console.log(err))
}

export const DeleteRequest = async ({ id }) => {
	console.log(id)
	const { data } = await axios.delete(
		`${publicRuntimeConfig.API_URL}/requests/${id}`,
		{
			headers: {
				Authorization: `Bearer ${jwt}`,
			},
		},
	)

	return data
}

export const GetRequest = async (id) => {
	const data = await axios.get(`${publicRuntimeConfig.API_URL}/requests/${id}`, {
		headers: {
			Authorization: `Bearer ${jwt}`,
		},
	})
	return data
}
