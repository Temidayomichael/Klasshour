import axios from 'axios'
import { parseCookies } from 'nookies'
const { publicRuntimeConfig } = getConfig()
import getConfig from 'next/config'
const jwt = parseCookies().jwt

export const GetMyRequests = async (userData) => {
	const { data } = await axios.get(`${publicRuntimeConfig.API_URL}/requests?`, {
		params: {
			user: userData.id,
		},
		headers: {
			Authorization: `Bearer ${jwt}`,
		},
	})
	return data
}

export const GetRequests = async (key) => {
	const requestId = key.queryKey[1].subjectId.map((id) => `_id=${id}`)
	const requestIdQueryString = requestId.join('&')
	console.log(requestIdQueryString)
	const { data } = await axios.get(
		`${publicRuntimeConfig.API_URL}/requests?_sort=createdAt:desc&${requestIdQueryString}`,
	)
	return {
		data,
	}
}

export const AddToRequest = async ({ values, user }) => {
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
			user: user,
		}), //send data in JSON format
	}
	fetch(`${publicRuntimeConfig.API_URL}/requests`, postRequest)
		.then((response) => response.json())
		.then((data) => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
		.catch((err) => console.log(err))
}

export const AddApplication = async ({ values, user, request }) => {
	console.log(values, user, request)
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
export const GetApplications = async (userData) => {
	const { data } = await axios.get(
		`${publicRuntimeConfig.API_URL}/class-applications?`,
		{
			params: {
				user: userData.id,
			},
			headers: {
				Authorization: `Bearer ${jwt}`,
			},
		},
	)
	return data
}

export const GetClasses = async () => {
	const { data } = await axios.get(`${publicRuntimeConfig.API_URL}/classes`, {
		//     params: {
		// student: {
		//         key:[1],
		//         id:  [userData.id]
		// }
		// },
		headers: {
			Authorization: `Bearer ${jwt}`,
		},
	})

	return data
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
