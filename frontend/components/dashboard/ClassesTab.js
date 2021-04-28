
import { useQuery } from 'react-query';
import axios from 'axios';
import getConfig from 'next/config'
import { parseCookies } from 'nookies';
import {
  Center,
  Spinner,
  useToast,
  Text
} from '@chakra-ui/react';
const { publicRuntimeConfig } = getConfig()


export default function ClassesTab({ jwt }) {

  const getClasses = async () => {
    const {data}= await axios.get(`${publicRuntimeConfig.API_URL}/classes`, {
  headers: {
    'Authorization':  `Bearer ${jwt}` 
  }
    })
    return data
  }
  const { isLoading, data, isError,isFetching} = useQuery(["classes"], getClasses)
  const toast = useToast()
  if (isLoading) {
    return <Center><Spinner
  thickness="4px"
  speed="0.65s"
  emptyColor="gray.200"
  color="blue.500"
  size="md"
    />
      </Center>
  }
  console.log(isError)
  if (isError) {
    return   toast({
          title: "Error getting classes ...",
          status: "error",
          duration: 2000,
          isClosable: true,
        })
  }

  return (
    <>
    <>
    {isFetching && <Center><Spinner
  thickness="4px"
  speed="0.65s"
  emptyColor="gray.200"
  color="blue.500"
  size="md"
      />
        Updating ...
      </Center>
      }
    </>
      {
        data.map((data, index) => {

         return <Text>{data.details.requestDesc}</Text>
        }
        )
      }
    </>
  )
}

