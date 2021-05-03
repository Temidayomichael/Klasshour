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
       const data =  await axios.get(`${publicRuntimeConfig.API_URL}/requests?_sort=createdAt:desc`);
    return data
}

export const AddToRequest = async ({ values, user }) => {
  
    const postRequest = {
        method: 'POST', // Method itself
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Authorization': `Bearer ${jwt}`     // Indicates the content
        },
        body: JSON.stringify({
            type: values.type,
            subject: values.subject,
            requestDesc: values.requestDesc,
            location: values.location,
            status: 'open',
            user: user
        }),   //send data in JSON format
    }
    fetch(`${publicRuntimeConfig.API_URL}/requests`, postRequest)
        .then(response => response.json())
        .then(data => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
        .catch(err => console.log(err))
      
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
    'Authorization':  `Bearer ${jwt}` 
  }
  })
    return data
}
