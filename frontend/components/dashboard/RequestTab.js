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
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
   FormControl,
  FormLabel,
  FormErrorMessage,
  Select,Button, Input, Box, Flex, Portal, IconButton, HStack, ButtonGroup, Textarea
} from '@chakra-ui/react'
import { parseCookies } from 'nookies'
import { useFormik } from "formik";
import { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";
import AddRequest from "./AddRequest";
import { GetMyRequests } from '../../Queries/queries';
import { DeleteRequest } from '../../Queries/queries';
import { useMutation,focusManager  } from 'react-query';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import * as Yup from "yup";

export default function RequestTab({useQuery}) {
  const userData = useContext(UserContext)
   const jwt = parseCookies().jwt
  const [show, setShow] = useState("none")  
  //const [delRequests, setDelRequests] = useState([])  
  
  const nigStates =["Abia","Adamawa","Akwa Ibom","Anambra","Bauchi","Bayelsa","Benue","Borno","Cross River","Delta","Ebonyi","Edo","Ekiti","Enugu","Gombe","Imo","Jigawa","Kaduna","Kano","Katsina","Kebbi","Kogi","Kwara","Lagos","Nasarawa","Niger","Ogun","Ondo","Osun","Oyo","Plateau","Rivers","Sokoto","Taraba","Yobe","Zamfara"]


  const editRequest = useFormik({
  initialValues: {
      type: '',
      subject: '',
      requestDesc: '',
      location: ''
      },
    validationSchema: Yup.object({
      type: Yup.string(),
      subject: Yup.string(),
      requestDesc: Yup.string(),
      location: Yup.string()
             
    }),
     onSubmit: async (values) => {

       console.log(values)
      // try {
      //   await mutate({
      //       values: values,
      //       user: user
          
      //  })
      // } catch(e) { }
      // console.log(status)
    }
  })

  
   const {mutate,data: dataR ,status, isLoading: delIsLoading }=useMutation(["myrequests"],DeleteRequest,{
        onSuccess:()=>{
             toast({
          title: "Request deleted!",
          status: "error",
          duration: 2000,
          isClosable: true,
             }),
                focusManager.setFocused(true)
        }
   });
  
  const deleteRequest = async (id) => {
     try {
        await mutate({
            id: id,
       })
      } catch(e) { }
   
    console.log(status)
}

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
   
    <Stack spacing={3}
      zIndex={0}
    >
      <Flex justifyContent="space-between"> <Text as="h1" fontSize="4xl" >My Requests</Text>
        <AddRequest
          useFormik={useFormik}
          jwt={jwt}
          user={userData.id}
          useMutation={useMutation}
        />
      </Flex>
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
        <Table variant="striped" colorScheme="linkedin">
          <TableCaption placement="top">
            Imperial to metric conversion factors
            </TableCaption>
          
          <Thead>
            <Tr>
              <Th>Mode</Th>
              <Th>Status</Th>
              <Th>Location</Th>
              <Th>Subject</Th>
              <Th>Request Description</Th>
              <Th>Actions</Th>
    
            </Tr>
          </Thead>
          <Tbody>
   
            {
              data.map((data, index) => {

                return <Tr key={index} >

                  <Td>{data.type}</Td>
                  <Td>{data.status}</Td>
                  <Td>{data.location}</Td>
                  <Td>{data.subject}</Td>
                  <Td>{data.requestDesc}</Td>
                  <Td >
                    <HStack spacing="3" >
                      <Popover placement="left" >
                        <PopoverTrigger>
                          <IconButton size="sm" icon={<EditIcon />} />
                        </PopoverTrigger>
                        <Portal>
                          <PopoverContent>
                            <form onSubmit={editRequest.handleSubmit}>
                              <PopoverArrow />
                              <PopoverHeader>Edit Request</PopoverHeader>
                              <PopoverCloseButton />
                              <PopoverBody>
                             
                                <Stack spaceing={4}>
                                  <FormControl id="subject" textAlign="center">
                                    <FormLabel>Subject</FormLabel>
                                    <Input type="text"
                                      id="subject"
                                      value={data.subject}
                                      values={editRequest.values.subject}
                                      onChange={editRequest.handleChange}
                                    />
                                    <FormErrorMessage>{editRequest.errors.subject}</FormErrorMessage>
                                  </FormControl>
                                  <FormControl id="location">
                                    <FormLabel>Location</FormLabel>
                                    <Select defaultValue={data.location}
                                      onChange={editRequest.handleChange} values={editRequest.values.location} >
                                      {nigStates.map(state => (
                                        <option key={state} value={state}>{state}</option>
                                      ))}
                                    </Select>
                                    <FormErrorMessage>{editRequest.errors.location}</FormErrorMessage>
                                  </FormControl>
                                  <FormControl id="type" >
                                    <FormLabel>Type</FormLabel>
                                    <Select
                                      defaultValue={data.type}
                                      onChange={editRequest.handleChange} values={editRequest.values.type}>
                                      <option value='hometutoring'>Home tutoring</option>
                                      <option value='onlinetutoring'>Online tutoring</option>
                                    </Select>
                                    <FormErrorMessage>{editRequest.errors.type}</FormErrorMessage>
                                  </FormControl>
                                  <FormControl>
                                    <FormLabel>Request Details</FormLabel>
                                    <Textarea
                                      id="requestDesc"
                                      onChange={editRequest.handleChange}
                                      values={editRequest.values.requestDesc}
                                      size="sm"
                                      value={data.requestDesc}
                                    />
                                    <FormErrorMessage>{editRequest.errors.requestDesc}</FormErrorMessage>
                                  </FormControl>
                                </Stack>
       
                              </PopoverBody>
                              <PopoverFooter>
                                <ButtonGroup d="flex" justifyContent="flex-end">
                                  <Button colorScheme="green">
                                    Save
        </Button>
                                </ButtonGroup>
                              </PopoverFooter>
                            </form>
                          </PopoverContent>
                        </Portal>
                      </Popover>
                      <Popover >
                        <PopoverTrigger>
                          <IconButton colorScheme="red" size="sm" icon={<DeleteIcon />} />
                        </PopoverTrigger>
                        <Portal>
                          <PopoverContent>
                            <PopoverHeader fontWeight="semibold">Delete request</PopoverHeader>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverBody>
                             Are you sure? You can't undo this action afterwards.
          </PopoverBody>
                            <PopoverFooter d="flex" justifyContent="flex-end">
                                <Button size="sm" onClick={() => deleteRequest(data.id)} isLoading={delIsLoading} colorScheme="red">Delete</Button>
                            </PopoverFooter>
                          </PopoverContent>
                        </Portal>
                      </Popover>
                    </HStack>
                  </Td>
                </Tr>
              }
              )
            }
          </Tbody>
        
          <Tfoot>
            <Tr>
              <Th>Mode</Th>
              <Th>Status</Th>
              <Th>Location</Th>
              <Th>Subject</Th>
              <Th>Request Description</Th>
            </Tr>
          </Tfoot>
        </Table>
     
      </>
    </Stack>
      
  )
}

