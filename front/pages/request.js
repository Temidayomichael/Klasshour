import  { useContext, useEffect, useState } from 'react'
import Head from 'next/head'
import {
    Avatar,
    Badge,
    Box,
    Button,
    Divider,
    Flex,
    Heading,
    SimpleGrid,
    SlideFade,
    Stack,
    Text,
    Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  ButtonGroup,
  Center,
  Spinner,
  useToast,
} from "@chakra-ui/react"
import { AiOutlineHome } from 'react-icons/ai'
import { RiVidiconLine } from 'react-icons/ri'
import getConfig from 'next/config'
import { useRouter } from 'next/router'

import { parseCookies } from 'nookies'
import TimeAgo from 'react-timeago'
import frenchStrings from 'react-timeago/lib/language-strings/fr'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
import UserContext from '../contexts/UserContext'
import AddRequest from '../components/dashboard/AddRequest'
import { useFormik } from "formik";
import { useQuery } from 'react-query'
import {useMutation} from 'react-query';
import { GetRequests } from '../Queries/queries';
const { publicRuntimeConfig } = getConfig()

export default function request() {
 
    let newRequestArray = [];
            const jwt = parseCookies().jwt
    const userData = useContext(UserContext)
    const [visible, setVisible] = useState(3)
    const [atLast, setAtLast] = useState(false);
    const { data, isLoading, isError, isFetching,isSuccess } = useQuery(["requests"], GetRequests)
    if (isSuccess) {
        const requests = data.data;
    newRequestArray =requests.filter(request => request.user.id !== userData.id)
    
}
    
    const { API_URL } = process.env
    const router = useRouter()

   
    const showMoreItems = () => {
        setVisible((preValue) => preValue + 2);
    }
    
    const formatter = buildFormatter(frenchStrings)
    


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
        return toast({
            title: "Error getting classes ...",
            status: "error",
            duration: 2000,
            isClosable: true,
        })
    }


    return (
        <SlideFade in={true} offsetY="20px">
                <Head>
                    <title>Requests | Klasshour</title>
                    <link rel="icon" href="../img/home_logo.png" />
                </Head>
            <Box className="content" m="auto" my="90">
                  {isFetching && <Center><Spinner
  thickness="2px"
  speed="0.65s"
  emptyColor="gray.200"
  color="blue.500"
          size="md"
      />
      </Center>
      }
                <Box w="100" float="right" >
                    <AddRequest
                        useFormik={useFormik}
                        isLoading={userData.isLoading}
                        jwt={jwt}
                        user={userData.id}
                        useMutation={useMutation}
                    />
                    
                </Box>
                <Box mb="10" m="auto"> 
                    <Box>
                        <Heading as="h1" size="lg" isTruncated>
                            Requests
                        </Heading>
                        <Text fontSize="lg"> Apply / Join  request</Text>
                    </Box>
                    <SimpleGrid columns={3}
                        spacingX="40px"
                        spacingY="20px" mt="5"
                    >
                        {
                            newRequestArray ? newRequestArray.slice(0, visible).map((data, index) => {
                                if (data.length - 1 === index) {
                                    setAtLast(true);
                                }
                                return (
                               
                                    <Box
                                        key={data.id}
                                        maxW="sm"
                                        p="5"
                                        borderWidth="1px"
                                        rounded="md"
                                        boxShadow="xs"
                                    >
                                        <Flex justify="space-between" w="100" >
                                            <Box as="time" dateTime="2021-01-15 15:30:00 +0000 UTC">
                                                <TimeAgo date={data.createdAt} />
                                              
                                            </Box>
                                            <Box
                                                color="gray.500"
                                                fontWeight="semibold"
                                                letterSpacing="wide"
                                                fontSize="xs"
                                                textTransform="uppercase"
                                                ml="2"
                                            >
                                                {
                                                    data.type == "hometutoring" ? <AiOutlineHome size="20" /> : <RiVidiconLine size="20" />
                                                }
                                                    
                                            </Box>
                                        </Flex>
                                        
                    
                                        <Box textAlign="center" my="4">
                                            <Avatar size="md" align="center" name={data.user.fullname} src={`${API_URL + data.user.userImage.url}`} />
                                            <Text>{data.user.fullname}</Text>
                                        </Box>
                                       
                                        <Box p="6">
                                            <Box d="flex" alignItems="baseline">
                                                <Badge borderRadius="full" px="2" colorScheme={data.status == 'open' ? 'green' : 'red'}>
                                                    {data.status}
                                                </Badge>
                                                <Box
                                                    color="gray.900"
                                                    fontWeight="semibold"
                                                    letterSpacing="wide"
                                                    fontSize="xs"
                                                    textTransform="uppercase"
                                                    ml="2"
                                                >
                                                    {data.subject}
                            
                                                </Box>
                                            </Box>
                                            <Heading size="sm" my="2">
                          
                                                {data.requestDesc}
                              
                                            </Heading>
                                            <Divider my="3" />
                                           
                                        </Box>
                                        { userData.role.name == "tutor" ? (
                                            <> </>
                                                            
                                            //         <Popover
                                            //             returnFocusOnClose={false}
                                            //             placement="right"
                                            //             isLazy
                                            //             closeOnBlur={false}
                                            //         >
                                                        
                                            //             <PopoverTrigger>
                                            //              <Button ml="2" color="gray.600" fontSize="sm" w="30" isDisabled={
                                            //     data.status == 'open' ? data.user.id == userData.id : "true"
                                            //     // data.user.id == userData.id ? "true" : ''
                                                    
                                            // }
                                            // >
                                            //         Apply
                                            //     </Button>   
                                            //             </PopoverTrigger>
                                            //             <PopoverContent> 
                                            //                 <PopoverHeader fontWeight="semibold">Confirmation</PopoverHeader>
                                            //                 <PopoverArrow />
                                            //                 <PopoverCloseButton />
                                            //                 <PopoverBody>
                                            //                     Are you sure you want to continue with your action?                    
                                            //                 </PopoverBody>
                                                            
                                            //                 <PopoverFooter d="flex" justifyContent="flex-end">
                                            //                     <ButtonGroup size="sm">
                                            //                         <Button variant="outline">Cancel</Button>
                                            //                         <Button colorScheme="red">Apply</Button>
                                            //                     </ButtonGroup>
                                            //                 </PopoverFooter>
                                            //             </PopoverContent>
                                            //         </Popover>
                                                
                                        ) : (
                                                    
                                              
                                            <Popover placement="right" >
                                                <PopoverTrigger>
                                                    <Button ml="2"
                                                        color="gray.600"
                                                        fontSize="sm"
                                                        w="30"
                                                        isDisabled={
                                                            data.status == 'open' ? data.user.id == userData.id : "true"
                                                            // data.user.id == userData.id ? "true" : ''
                                                        }
                                                    >  Join Class  </Button>
                                                </PopoverTrigger>
                                                <PopoverContent>
                                                    <PopoverArrow />
                                                    <PopoverCloseButton />
                                                    <PopoverHeader>Confirmation!</PopoverHeader>
                                                    <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
                                                    <PopoverFooter d="flex" justifyContent="flex-end">
                                                        <Button onClick={() => {
                                                            console.log(data)
                                                            const postRequest = {
                                                                method: 'POST', // Method itself
                                                                headers: {
                                                                    'Content-type': 'application/json; charset=UTF-8',
                                                                    'Authorization': `Bearer ${jwt}`     // Indicates the content
                                                                },
                                                                body: JSON.stringify({
                                                                    students: data.user.id,
                                                                    details: data.id,
                                                                        
                                                                }),   //send data in JSON format
                                                            }
                                                            fetch(`${publicRuntimeConfig.API_URL}/classes`, postRequest)
                                                                .then(response => response.json())
                                                                .then(data => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
                                                                .catch(err => console.log(err))
                                                        }} size="sm" colorScheme="red">Join class</Button>
                                                    </PopoverFooter>
                                                </PopoverContent>
                                            </Popover>
                                        )
                                        }
                                    </Box>
                                )
                                
                            }) : null
                        }
                       
                    </SimpleGrid>

                    <Button onClick={showMoreItems} isDisabled={atLast} mt="10">Load more</Button>
                </Box>
            </Box>
        </SlideFade>
    )
}
