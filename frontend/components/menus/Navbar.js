import { Box, Flex, Stack, Image, Button, Divider, Avatar, Text, Badge, HStack } from '@chakra-ui/react'
import  { useContext } from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import { AiOutlineArrowRight } from 'react-icons/ai'
import AuthOptions from '../auth/authOptions'
import { parseCookies } from 'nookies'
import UserContext from '../../contexts/UserContext'

export default function Navbar(ctx) {
        const { API_URL } = process.env
    const router = useRouter()
    function isActive(route) {
        if (route == router.pathname) {
            return "active"
        }
        else ""
    }
    const jwt = parseCookies(ctx).jwt
    const userData = useContext(UserContext)
    return (
        <Box >
            <Stack isInline justify="space-between"
                w="100%"
                maxW="1280px"
                mx="auto"
                py={5}
              
            >
                <Link href="/" >
                    <Image mt="2" objectFit="contain" src="../img/home_logo.png" w={["30px", "30px", "40px", "40px"]} />
                       
                </Link>
           
                <Flex align="center">
                    {
                        jwt ?
                           
                            <>
                                <Avatar name={userData.fullname} mr="2" src={`${API_URL + userData.userImage.url}`} />
                                <Box>
                                    <Text fontWeight="bold">
                                        {userData.fullname}
                                        <Badge ml="1" colorScheme="green">
                                            {userData.role.name}
                                        </Badge>
                                    </Text>
                                   
                           
                                    <Link href="/dashboard" color="blue">My Dashboard</Link>
                                </Box>
               
                            </> : ""
                    }
                    <AuthOptions />
                      
                </Flex>
            </Stack>
            <>
            <Flex align="center"
                p={4}
                bg="gray.800"
                justifyContent="center"
                    fontSize="sm"
                color="gray.400"
                display={["none", "none", "none", "flex"]}>
                <Box>  <Link href="/"><a className={isActive('/')} >HOME</a></Link>   </Box>
                <Box ml={5}>  <Link href="/request"><a className={isActive('/request')} >REQUESTS</a></Link></Box>
                <Box ml={5}> <Link href="/become_a_tutor"><a className={isActive('/become_a_tutor')} >BECOME A TUTUOR</a></Link></Box>
                <Box ml={5}>  <Link href="/faq" ><a className={isActive('/faq')} >FAQ</a></Link>    </Box>
                <Box ml={5}>  <Link href="/search" ><a className={isActive('/search')} >SEARCH</a></Link>    </Box>
                <Box ml={5}> <Link href="/support"><a className={isActive('/support')} >SUPPORT</a></Link></Box>
                    <Box ml={5}> <Link href="/news" ><a className={isActive('/news')} >NEWS</a></Link></Box>
                    
                        
                </Flex>
                </>
            <Box>

            </Box>
            <Divider />

        </Box>
       
    )
}
