import React, { useContext, useState } from 'react'
import getConfig from 'next/config'
import { parseCookies } from 'nookies'
import Head from 'next/head'
import {
  Box, Center, Divider, Flex, Kbd, Tab, TabList, TabPanel, TabPanels,
  Tabs, Alert, AlertIcon, 
  Input,
  SlideFade,
  
  Textarea,
  Text,
} from '@chakra-ui/react'
import UserContext from '../contexts/UserContext'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import { FaRegUser } from 'react-icons/fa'
import { useFormik } from "formik";
import Dropzone from 'react-dropzone'
import axios from 'axios'
import DataGrid from 'react-data-grid';
import BasicInfo from '../components/dashboard/basicInfo'
import RequestTab from '../components/dashboard/RequestTab'
import ClassesTab from '../components/dashboard/ClassesTab'
import { useQuery,useMutation } from "react-query";
import { push as Menu } from 'react-burger-menu'
 
const { publicRuntimeConfig } = getConfig()

export default function Dashboard({ jwt, requests, requestData }) {
  console.log(requests)
  console.log(requestData)


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


  



  

//   const columns = [
  
//   { key: 'type', name: 'Type',  editable: true },
//   { key: 'desc', name: 'Description' },
//   { key: 'status', name: 'Status' },
//   { key: 'location', name: 'Location' },
//   { key: 'subject', name: 'Subject', },
//     {
//       key: 'actions', name: 'Actions',
        
//       },

// ];

//   const rows = [{
//    action: row => (
//            <div>
//                <button onClick={() => handleEdit(row.original)}>Edit</button>
//                <button onClick={() => handleDelete(row.original)}>Delete</button>
//            </div>)
//   }];
//   const action = (
//     <Text>action</Text>
//   )
//   requests.forEach(function (request) {
//     let reqObj = {
//       id: request.id,
//       desc: request.requestDesc,
//       status: request.status,
//       location: request.location,
//       subject: request.subject,
//       type: request.type,
//       userImage: request.user.userImage.url,
     
//     }
//     rows.unshift(reqObj)
//   })



  const dashboardMenu = userData.role.name == "Tutor" ? (
         <Box>
            <Tabs>
             <TabList justifyContent="space-between"  color="white" bg="#161B45" >
                        <Flex m="auto" >
                    <Tab  _selected={{ fontWeight: "bold"}} >Profile</Tab>
                    <Tab  _selected={{ fontWeight: "bold" }}>Subjects</Tab>
                            <Tab  _selected={{ fontWeight: "bold" }}>Classes</Tab>
                            <Tab  _selected={{ fontWeight: "bold" }}>Bank Info</Tab>
                            <Tab  _selected={{ fontWeight: "bold" }}>Messages</Tab>
                        </Flex>
                        <Flex>
                <Center fontSize="lg">
                    <Kbd  color="white" bg="red" mr="2">23</Kbd> <Kbd>Khcoins</Kbd>
                    </Center>
                            <Tab>*********</Tab>
                            </Flex>
            </TabList>
          <Alert status="info" my="4">
              <AlertIcon />
                  Click the text to edit
                     
                  </Alert>
            <TabPanels w="30pv"
              mx="auto">
              <TabPanel >
            <Basi />
                </TabPanel>
                <TabPanel>
                <p>two!</p>
                </TabPanel>
                <TabPanel>
                <p>three!</p>
                </TabPanel>
            </TabPanels>
              
                </Tabs>
               
        </Box>
  ) : (
      <Box>
        
        <Tabs
          d="flex"
          isLazy>
          <Box></Box>
             <TabList >
            
            <Menu pageWrapId={'page-wrap'}  customBurgerIcon={<AiOutlineMenuUnfold ml="2" />} >
              <Text as="h1" ml="4" fontSize="3xl">Klasshour</Text>
                      
                   <Flex> <Tab  _selected={{ fontWeight: "bold"}} d="flex" ><FaRegUser  /> Profile</Tab></Flex>
                    <Tab  _selected={{ fontWeight: "bold"}} >My Request</Tab>
                    <Tab  _selected={{ fontWeight: "bold" }}>Sessions</Tab>
                    <Tab  _selected={{ fontWeight: "bold" }}>Bank Info</Tab>
              <Tab _selected={{ fontWeight: "bold" }}>Messages</Tab>
                <Box fontSize="lg">
                    <Kbd  color="white" bg="red" mr="2">23</Kbd> <Kbd>Khcoins</Kbd>
                    </Box>
                            <Tab>*********</Tab>
                          
                </Menu>
              
                   
                        
              
            </TabList>
         
          <TabPanels id="page-wrap" mt="36px" className="tabs" >
            
              <TabPanel w="30pv"  
              m="auto">
              <BasicInfo
                useFormik={useFormik}
                fullname={userData.fullname}
                email={userData.email}
                setUserFormData={setUserFormData}
                isLoading={userData.isLoading}
                requests={requests}
              />
                </TabPanel>
            <TabPanel
              className="mycontainer"
              m="auto"
            id="page-wrap">
              <RequestTab
                jwt={jwt}
                useQuery={useQuery}
                useMutation={useMutation}
              />
                </TabPanel>
                <TabPanel  mx="auto">
              <ClassesTab
                jwt={jwt}
                useQuery={useQuery}
                useMutation={useMutation}
              />
                </TabPanel>
            </TabPanels>
              
                </Tabs>
               
        </Box>
    
  )
    return (
      <SlideFade in={true} offsetY="20px" >
         <Head>
                <title>Account Dashboard | Klasshour</title>
                <link rel="icon" href="../img/home_logo.png" />
        </Head>
        
        <Box className="content" >
          {dashboardMenu} 
          </Box>
          
        </SlideFade>
    )
}

export async function getServerSideProps(ctx) {
  
  const jwt = parseCookies(ctx).jwt
//   const res = await fetch(`${publicRuntimeConfig.API_URL}/requests?_sort=createdAt:desc`);
//   const requests = await res.json()
//   let requestData =[];
//   requests.forEach(function (request) {
//     let reqObj = {
//       id: request.id,
//       desc: request.requestDesc,
//       status: request.status,
//       location: request.location,
//       subject: request.subject,
//       type: request.type,
//       userImage: request.user.userImage.url
//     }
//     requestData.push( reqObj)
    
// });
  

    return {
        props: {
        // requests,
        jwt,
          // requestData
      }

  }
}