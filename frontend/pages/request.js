import  { useContext, useState } from 'react'
import Head from 'next/head'
import { Avatar, Badge, Box, Button, Divider, Flex,  Heading, SimpleGrid, SlideFade, Stack, Text } from "@chakra-ui/react"
import { AiOutlineHome } from 'react-icons/ai'
import { RiVidiconLine } from 'react-icons/ri'
import getConfig from 'next/config'
import { useRouter } from 'next/router'

import TimeAgo from 'react-timeago'
import frenchStrings from 'react-timeago/lib/language-strings/fr'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
import UserContext from '../contexts/UserContext'


const { publicRuntimeConfig } = getConfig()

export default function request({ requests }) {
    const userData = useContext(UserContext)
    const [visible, setVisible] = useState(3)
    let atLast = false;
   
    const newRequestArray = requests.filter(request => request.user.id === userData.id);
    
    console.log(newRequestArray.length)

    const { API_URL } = process.env
    const router = useRouter()
    const showMoreItems = () => {
        setVisible((preValue) => preValue + 3);
    }
    
    const formatter = buildFormatter(frenchStrings)
    

    return (
        <SlideFade in={true} offsetY="20px">
                <Head>
                    <title>Requests | Klasshour</title>
                    <link rel="icon" href="../img/home_logo.png" />
                </Head>
               <Box maxW="80%" m="auto" my="90">
                    <Box mb="10" className="mycontainer" m="auto">
                        <Box>
                            <Heading as="h1" size="lg" isTruncated>
                                Students Requests
                                </Heading>
                            <Text fontSize="lg"> Apply to the requests that you can help with.</Text>
                        </Box>
                    <SimpleGrid columns={3}
                        spacingX="40px"
                        spacingY="20px" mt="5"
                        >
                        {
                         
                            
                            newRequestArray ? newRequestArray.slice(0, visible).map((data,index) => {
                                if (newRequestArray.length -1 === index) {
                                    atLast=true
                                   
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
                                            <Button ml="2" color="gray.600" fontSize="sm" w="30" isDisabled={
                                                data.status == 'open' ? data.user.id == userData.id : "true"
                                                // data.user.id == userData.id ? "true" : ''
                                                    
                                            }
                                            >
                                                Apply
                                </Button>
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


export async function getServerSideProps() {
   const res = await fetch(`${publicRuntimeConfig.API_URL}/requests?_sort=createdAt:desc`);
   
    const requests = await res.json()
    
    return {
        props: {
          requests
      }

  }
}