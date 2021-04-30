import {
  Text,
  Stack,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  useToast,
  Spinner,
  Center,
  Editable, EditableInput, EditablePreview, Textarea, Button, Checkbox, Box
} from '@chakra-ui/react'
import { parseCookies } from 'nookies'
import { useFormik } from "formik";
import { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";
import AddRequest from "./AddRequest";
import { GetMyRequests } from '../../Queries/queries';
import { useMutation } from 'react-query';


export default function RequestTab({useQuery, useMutation}) {
  const userData = useContext(UserContext)
   const jwt = parseCookies().jwt
  const [show, setShow] = useState("none")  
  const [delRequests, setDelRequests] = useState([])  
  
  console.log(delRequests)
  const { isError, isLoading, isFetching, data } = useQuery(["myrequests", userData], GetMyRequests)

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
   
      <Stack spacing={3}>
     <AddRequest
                useFormik={useFormik}
                jwt={jwt}
        user={userData.id}
        useMutation={useMutation}
              />
                <>
    {isFetching && <Center><Spinner
  thickness="2px"
  speed="0.65s"
  emptyColor="gray.200"
  color="blue.500"
          size="md"
      />
      </Center>
      }
    <Box w="100%">
   <Button size="sm" float="right" display={show} w={20} colorScheme="red">
                Delete
              </Button>
     </Box>
        <Table variant="striped" colorScheme="linkedin">
          <TableCaption placement="top">
            Imperial to metric conversion factors
            </TableCaption>
          
  <Thead>
            <Tr>
              <Th>
                </Th>
      <Th>Type</Th>
      <Th>Status</Th>
      <Th>Location</Th>
      <Th>Subject</Th>
      <Th>Request Description</Th>
    
    </Tr>
  </Thead>
  <Tbody>
   
     {
        data.map((data, index) => {

          return <Tr key={index} >
            <Td>
              <Checkbox size="md" onChange={() => {
                setDelRequests([...delRequests,data])
              }}
                
                isInvalid
                colorScheme="red" />
            </Td>
            <Td><Editable defaultValue={data.type}>
  <EditablePreview />
  <EditableInput />
</Editable></Td>
            <Td>
              <Editable color={data.status=="closed"? "red":"green"} defaultValue={data.status}>
  <EditablePreview />
  <EditableInput />
</Editable></Td>
            <Td><Editable defaultValue={data.location}>
  <EditablePreview />
  <EditableInput />
</Editable></Td>
            <Td><Editable defaultValue={data.subject}>
  <EditablePreview />
  <EditableInput />
</Editable></Td>
            <Td><Editable defaultValue={data.requestDesc}>
  <EditablePreview />
  <EditableInput />
</Editable></Td>
         
          </Tr>
          
        }
        )
            }
          </Tbody>
        
  <Tfoot>
    <Tr>
       <Th>Type</Th>
      <Th>Status</Th>
      <Th>Location</Th>
      <Th>Subject</Th>
      <Th>Request Description</Th>
    </Tr>
  </Tfoot>
        </Table>
        <Box w="100%">
   <Button size="sm" float="right" w={20} colorScheme="red">
                Delete
              </Button>
     </Box>
    </>
      </Stack>
      
  );
}

