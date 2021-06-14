
import axios from 'axios';
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()
import { parseCookies } from 'nookies';
import {
  Center,
  Spinner,
  useToast,
  Text,
  Box,
  Stack,
  TableCaption,
  Table,
  Tr,
  Th,
  Td,
  Thead,
  Tbody
} from '@chakra-ui/react';
import { GetClasses } from '../../Queries/queries';


export default function ClassesTab({ useQuery }) {

 
  const { data, isError, isLoading, isFetching,success } = useQuery(["classes"],GetClasses)
  const toast = useToast()
  if (isLoading) {
    return (<Center><Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="md"
    />
    </Center>
    )
  }
  console.log(isError)
  if (isError) {
    return toast({
      title: "Error getting classes ...",
      status: "error",
      duration: 2000,
      isClosable: true,
    })
  }
  return (
    <Stack>
      {isFetching && <Center><Spinner
        thickness="2px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="md"
      />
      </Center>
      }
      <Box>
        {
        <>
            {console.log(data.details)}
            
               { data.map((data, index) => {

                  return <Text key={index} >

                    {data.id}
                  
                  </Text>
                })}
         
          </>
        }
    </Box>
    </Stack>
  )
}

