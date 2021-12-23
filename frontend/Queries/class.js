import axios from 'axios'
import { parseCookies } from 'nookies'
const { publicRuntimeConfig } = getConfig()
import getConfig from 'next/config'
const jwt = parseCookies().jwt

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
export const UpcomingClass = async (classData) => {
	console.log('class_application, student:', classData)

	const res = await axios({
		method: 'post',
		url: `${publicRuntimeConfig.API_URL}/classes`,
		data: classData,
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${jwt}`,
		},
	})

	return res
}

export const GetClassDetail = async (classId) => {
	console.log('serv reqid:', classId.queryKey[1])
	const { data } = await axios.get(
		`${publicRuntimeConfig.API_URL}/classes?class_id=${classId.queryKey[1]}`,
		{
			headers: {
				Authorization: `Bearer ${jwt}`,
			},
		},
	)
	return data
}