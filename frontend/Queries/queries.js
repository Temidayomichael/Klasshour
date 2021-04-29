import axios from "axios"
import { parseCookies } from 'nookies'
const { publicRuntimeConfig } = getConfig()
import getConfig from 'next/config'
 const jwt = parseCookies().jwt


  
export const GetMyRequests = async (userData) => {
      const { data } = await axios.get(`${publicRuntimeConfig.API_URL}/requests?`, {
        params: {
        user : userData.id
      },
  headers: {
    'Authorization':  `Bearer ${jwt}` 
  }
    })
    return data
}

export const GetRequests = async () => {
    const { data } = await axios.get(`${publicRuntimeConfig.API_URL}/requests?_sort=createdAt:desc`)
    return data
}

export const GetClasses = async () => {
 
    const {data}= await axios.get(`${publicRuntimeConfig.API_URL}/classes`, {
  headers: {
    'Authorization':  `Bearer ${jwt}` 
  }
    })
    return data
}
