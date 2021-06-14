import {
    Box, Flex, Stack, Image, Button, Divider,
      Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
    MenuDivider,
    Avatar, Text, Badge, HStack, IconButton, Center
} from '@chakra-ui/react'
import  { useContext } from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import { AiOutlineArrowRight, AiOutlineDashboard, AiOutlineQuestion } from 'react-icons/ai'
import AuthOptions from '../auth/authOptions'
import UserContext from '../../contexts/UserContext'
import { FaRegUser } from 'react-icons/fa'
import { MdAttachMoney } from 'react-icons/md'
import { GrNotification } from 'react-icons/gr'
import { IoLogOutOutline, IoSettingsOutline } from 'react-icons/io5'
import { destroyCookie, parseCookies } from 'nookies'
export default function Navbar(ctx) {
     const userData = useContext(UserContext)
        const { API_URL } = process.env
    const router = useRouter()
    function isActive(route) {
        if (route == router.pathname) {
            return "active"
        }
        
    }
    const register = () => router.push("/register");
    const login = () => router.push("/login");
    const jwt = parseCookies(ctx).jwt
    
    function logout() {
        destroyCookie(null, 'jwt')
        router.push("/login")
   }
   
    return (
        <Box >
            <Stack isInline justify="space-between"
                w="100%"
               className="mycontainer"
                mx="auto"
                py={5}
              
            >
                <Link href="/" >
                    <Image mt="2" onClick="/" objectFit="contain" src="../img/home_logo.png" w={["30px", "30px", "40px", "40px"]} />
                       
                </Link>
       
                <Flex align="center">
             
                    {        
                        jwt ?
                           
                            <Flex>
                                      <Center>
                                      <Button leftIcon={<AiOutlineDashboard />} onClick={()=>{ router.push("/dashboard")}} display={router.pathname !== '/dashboard' ? "block" : 'none'}>Dashboard</Button>
                                        <Badge ml="5" colorScheme="green">
                                            {userData.role.name}
                                        </Badge>
                                </Center>
                                <Box mx="5" >
                                <Menu >
                                    <MenuButton
                                        as={IconButton}
                                        
                                        _active={{
                                            bg: "0",
                                        }}
                                        _focus={{
                                            bg:
                                                "0",
                                        }}
                                        _hover={{ bg: "0" }}
                                        icon={<GrNotification />}
                                    />
                                    <MenuList>
                                        <MenuItem >
                                         No new notifications
    </MenuItem>
                                           <MenuDivider />
 
                                    </MenuList>
                                    </Menu>
                                    </Box>
                                <Menu>
                                    <MenuButton
                                        as={IconButton}
                                        
                                        _active={{
                                            bg: "0",
                                        }}
                                        _focus={{
                                            bg: "0",
                                        }}
                                        _hover={{ bg: "0" }}
                                        icon={<Image borderRadius="full"
                                            boxSize="35px" src={`${API_URL + userData.userImage.url}`} />}
                                    />
                                    <MenuList>
                                        {/* <MenuOptionGroup title="Signed in as ">

                                        </MenuOptionGroup> */}
                                        <Text pl="3" >
                                           Signed in as <Text fontWeight="bold" >{userData.fullname}</Text>
                                        </Text>
                                        <MenuDivider />
                                        <MenuItem onClick={()=>{ router.push("/profile",`${userData.username}`)}} icon={<FaRegUser />}  >
                                             Profile
   </MenuItem>
                                        <MenuItem icon={<MdAttachMoney />} >
                                      Pricing
    </MenuItem>
                                        <MenuItem icon={<AiOutlineQuestion />} >
                                       About Klasshour
    </MenuItem>
                                        <MenuItem icon={<IoSettingsOutline />}>
                                            Account
    </MenuItem>
                                           <MenuDivider />
    <MenuItem  onClick={logout} size="sm" icon={<IoLogOutOutline />} colorScheme="red" variant="outline">
    Logout
    </MenuItem>
                                    </MenuList>
                                </Menu>
                                   
               
                            </Flex> :   <Center>
           
                        <Button
                            borderColor="#161B45"
                            rightIcon={<AiOutlineArrowRight />}
                            color="#161B45" _hover={{ opacity: "0.9" }} variant="outline"
                            _active={{
                                bg: "#E7E8EC",
                           
                            }}
                            size="sm" onClick={login} mr={4}
                        >Log In </Button>
                        <Button
                            bg="#161B45"
                            rightIcon={<AiOutlineArrowRight />}
                            color="white" _hover={{ opacity: "0.9" }}
                            _active={{
                                bg: " #211221",
                           
                            }}
                            size="sm" onClick={register}
                        >Register</Button>
                      
                    </Center>
                    }
                      
                </Flex>
            </Stack>
            <>
                <Flex align="center"
                    p={4}
                    // display={router.pathname !== '/dashboard' ? "block": 'none'}
                    bg="gray.800"
                    justifyContent="center"
                    fontSize="sm"
                    color="gray.400"
                    display={router.pathname !== '/dashboard' && router.pathname !== '/learnportal'  ? ["none", "none", "none", "flex"] : 'none'}>
                    <Box>  <Link href="/"><a className={isActive('/')} >HOME</a></Link>   </Box>
                    <Box ml={5}>  <Link href="/request"><a className={isActive('/request')} >REQUESTS</a></Link></Box>
                    <Box ml={5}> <Link href="/become_a_tutor"><a className={isActive('/become_a_tutor')} >BECOME A TUTUOR</a></Link></Box>
                    <Box ml={5}>  <Link href="/faq" ><a className={isActive('/faq')} >FAQ</a></Link>    </Box>
                    <Box ml={5}>  <Link href="/search" ><a className={isActive('/search')} >SEARCH</a></Link>    </Box>
                    <Box ml={5}> <Link href="/support"><a className={isActive('/support')} >SUPPORT</a></Link></Box>
                    <Box ml={5}> <Link href="/news" ><a className={isActive('/news')} >NEWS</a></Link></Box>
                    
       
                </Flex>
            </>
       
            <Divider borderColor="#151a46" />
    
        </Box>
       
    )
}
