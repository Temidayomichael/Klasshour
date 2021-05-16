import { useContext, useState } from 'react';
import BasicInfo from '../components/dashboard/basicInfo';
import UserContext from '../contexts/UserContext';
import { useFormik } from "formik";
import {
    Box, Text,
 Tabs, TabList, TabPanels, TabPanel,Tab, Flex, Button, Image
} from '@chakra-ui/react';
import { SlideFade } from '@chakra-ui/transition';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FaRegUser } from 'react-icons/fa';

export default function Profile() {
    const router = useRouter()
   
   const { API_URL } = process.env  
    
  const userData = useContext(UserContext)
  const [userFormData, setUserFormData] = useState({
    id: userData.id,
    fullname: userData.fullname,
    email: userData.email,
    isLoading: false,
    isDisabled: false,
    password: '',
    confirm_password: '',
    userImage: userData.userImage
  })

    return (
        <SlideFade in={true} offsetY="20px" >
            <Head>
                <title>My Prolfile | Klasshour</title>
                <link rel="icon" href="../img/home_logo.png" />
            </Head>
        
            <Box mt="5" className="content" >
                <Text bg="#151a46" fontWeight="bold" color="gray.50" p="3" m="0" >
                    Profile
        </Text>
                <Flex>

               
                        <Box justify="center" align="center" w="50" m="auto">
                   <Image borderRadius="full"
                                            boxSize="200px" src={`${API_URL + userData.userImage.url}`} />
                        <Button mt="5" colorScheme="red"  leftIcon={<FaRegUser />}>Delete account</Button>
                        </Box>
                  
                        <Box w="600px">
                             <Text as="h1" fontSize="4xl">Account Settings</Text>
                            <BasicInfo
                    useFormik={useFormik}
                    fullname={userData.fullname}
                    email={userData.email}
                    setUserFormData={setUserFormData}
                    isLoading={userData.isLoading}
                />
                        </Box>
                   </Flex>
                        
               
            </Box>
          
        </SlideFade>
    )
}
