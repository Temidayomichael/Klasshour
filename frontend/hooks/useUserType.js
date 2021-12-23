import { useState, useEffect, useContext } from 'react'
import UserContext from '../contexts/UserContext'
import { parseCookies } from 'nookies'

export default function useUserType() {
	const userData = useContext(UserContext)
	const jwt = parseCookies().jwt

	const [isStudent, setIsStudent] = useState()

	useEffect(() => {
		if (jwt) {
			if (userData.role == 'Student') {
				return () => {
					setIsStudent(true)
				}
			}
		} else
			return () => {
				setIsStudent(false)
			}
	})

	return isStudent
}
