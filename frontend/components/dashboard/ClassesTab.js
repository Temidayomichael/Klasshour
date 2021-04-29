
import axios from 'axios';
import getConfig from 'next/config'
import { parseCookies } from 'nookies';
import {
  Center,
  Spinner,
  useToast,
  Text
} from '@chakra-ui/react';
import { GetClasses } from '../../Queries/queries';


export default function ClassesTab({ jwt, useQuery }) {


  const { data: dataR, isError: errorR, isLoading: landingR, isFetching: fetchingR } = useQuery(["classes"], GetClasses)
  const toast = useToast()
  if (landingR) {
    return <Center><Spinner
  thickness="4px"
  speed="0.65s"
  emptyColor="gray.200"
  color="blue.500"
  size="md"
    />
      </Center>
  }
  console.log(errorR)
  if (errorR) {
    return   toast({
          title: "Error getting classes ...",
          status: "error",
          duration: 2000,
          isClosable: true,
        })
  }

  return (
  <>
    {fetchingR && <Center><Spinner
  thickness="2px"
  speed="0.65s"
  emptyColor="gray.200"
  color="blue.500"
  size="md"
      />
      </Center>
      }
    
      {
        dataR.map((data, index) => {

          return <Text key={index} >{data.details.requestDesc}</Text>
        }
        )
      }
    </>
  )
}

