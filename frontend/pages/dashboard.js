import React, { useContext, useState } from 'react'
import getConfig from 'next/config'
import { parseCookies } from 'nookies'
import Head from 'next/head'
import {
  Box, Center, Divider, Flex, Kbd, Tab, TabList, TabPanel, TabPanels,
  Tabs, Alert, AlertIcon, Text, Stack,
   FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  SlideFade,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Select,
  Textarea,
} from '@chakra-ui/react'
import UserContext from '../contexts/UserContext'
import { AiOutlineProfile } from 'react-icons/ai'
import { useFormik } from "formik";
import Dropzone from 'react-dropzone'
import * as Yup from "yup";
import axios from 'axios'
import DataGrid from 'react-data-grid';


 
const { publicRuntimeConfig } = getConfig()

export default function Dashboard({ jwt, requests, requestData }) {
  console.log(requests)
  console.log(requestData)
  const { isOpen, onOpen, onClose } = useDisclosure()
 
const nigStates =["Abia","Adamawa","Akwa Ibom","Anambra","Bauchi","Bayelsa","Benue","Borno","Cross River","Delta","Ebonyi","Edo","Ekiti","Enugu","Gombe","Imo","Jigawa","Kaduna","Kano","Katsina","Kebbi","Kogi","Kwara","Lagos","Nasarawa","Niger","Ogun","Ondo","Osun","Oyo","Plateau","Rivers","Sokoto","Taraba","Yobe","Zamfara"]

  function myFunction() {
    alert("The form was submitted");
  }
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

  const { fullname, email, password, isLoading, confirm_password, userImage } = userFormData;

  const requestForm = useFormik({
       initialValues: {
      name: fullname,
      email: email,
      userImage: '',
      password: '',
      confirm_password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string(),
      fullname: Yup.string(),
      password: Yup.string().matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    ),
      confirm_password: Yup.string() .when("password", {
      is: password => (password && password.length > 0 ? true : false),
      then: Yup.string().oneOf([Yup.ref("password")], "Password doesn't match")
      }),
      userImage: Yup.string()
      // userImage: Yup.mixed().test('fileSize', "File Size is too large", values => values.size <= FILE_SIZE)
      //   .test('fileType', "Unsupported File Format", values => SUPPORTED_FORMATS.includes(values.type))
             
    }),
     
    onSubmit: async (values) => {
      console.log(values)
      console.log(userFormData)
      const res = axios.post(`${publicRuntimeConfig.API_URL}/upload`, {
      userImage: values.userImage
},
{
  headers: {
    Authorization: 'Bearer ' + jwt
  }
        })
      console.log(res)
      

       const putMethod = {
        method: 'PUT', // Method itself
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'Authorization':  `Bearer ${jwt}`     // Indicates the content
        },
        body: JSON.stringify({
          fullname: values.name,
    }),   // We send data in JSON format
      }
      fetch(`${publicRuntimeConfig.API_URL}/users/${userFormData.id}`, putMethod)
        .then(response => response.json())
        .then(data => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
        .catch(err => console.log(err))
    }
  })

  const profileForm = useFormik({
    initialValues: {
      name: fullname,
      email: email,
      userImage: '',
      password: '',
      confirm_password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string(),
      fullname: Yup.string(),
      password: Yup.string().matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    ),
      confirm_password: Yup.string() .when("password", {
      is: password => (password && password.length > 0 ? true : false),
      then: Yup.string().oneOf([Yup.ref("password")], "Password doesn't match")
      }),
      userImage: Yup.string()
      // userImage: Yup.mixed().test('fileSize', "File Size is too large", values => values.size <= FILE_SIZE)
      //   .test('fileType', "Unsupported File Format", values => SUPPORTED_FORMATS.includes(values.type))
             
    }),
     
    onSubmit: async (values) => {
      console.log(values)
      console.log(userFormData)
      const res = axios.post(`${publicRuntimeConfig.API_URL}/upload`, {
      userImage: values.userImage
},
{
  headers: {
    Authorization: 'Bearer ' + jwt
  }
        })
      console.log(res)
      

       const putMethod = {
        method: 'PUT', // Method itself
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'Authorization':  `Bearer ${jwt}`     // Indicates the content
        },
        body: JSON.stringify({
          fullname: values.name,
    }),   // We send data in JSON format
      }
      fetch(`${publicRuntimeConfig.API_URL}/users/${userFormData.id}`, putMethod)
        .then(response => response.json())
        .then(data => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
        .catch(err => console.log(err))
    }
    })



  const basicInfo = (
    <form onSubmit={profileForm.handleSubmit}>
      <Stack spacing={3}>
    
                <FormControl id="userImage" textAlign="center">
          <FormLabel>Change Profile Picture</FormLabel>
              <Input type="file" id="userImage"  values={profileForm.values.userImage} onChange={(event) => {
  setUserFormData({...userFormData,userImage: event.currentTarget.files[0]});
          }} />
          <FormErrorMessage>{profileForm.errors.userImage}</FormErrorMessage>
         </FormControl>
        <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" value={email} isDisabled  values={profileForm.values.email}/>
          <FormHelperText>We'll never share your email.</FormHelperText>
          <FormErrorMessage>{profileForm.errors.email}</FormErrorMessage>
          </FormControl>
        <FormControl>
            <FormLabel>Full Name</FormLabel>
          <Input type="text"
             id="name"
            value={fullname}
             onChange={profileForm.handleChange}
            values={profileForm.values.fullname}
            onInput={(e) => setUserFormData({ ...userFormData, fullname: e.target.value })} />
          
           <FormErrorMessage>{profileForm.errors.fullname}</FormErrorMessage>
        </FormControl>

   
        <FormControl isInvalid={profileForm.errors.password && profileForm.touched.password}>
            <FormLabel>Password</FormLabel>
          <Input id="password" type="password"
            onChange={profileForm.handleChange}
            onInput={(e) => setUserFormData({ ...userFormData, password: e.target.value })}
            values={profileForm.values.password} />
           <FormErrorMessage>{profileForm.errors.password}</FormErrorMessage>
          </FormControl>
        <FormControl id="confirm_password" isInvalid={profileForm.errors.confirm_password && profileForm.touched.confirm_password}>
            <FormLabel>Confirm Password</FormLabel>
          <Input type="password"
             id="confirm_password" 
            onChange={profileForm.handleChange}
            values={profileForm.values.confirm_password}
            onInput={(e) => setUserFormData({ ...userFormData, confirm_password: e.target.value })}
            values={profileForm.values.confirm_password}
          />
           <FormErrorMessage>{profileForm.errors.confirm_password}</FormErrorMessage>
        </FormControl>
        <Button type="submit" colorScheme="blue" isLoading={isLoading} >
            Update Profile
        </Button>
      </Stack>
        
      </form>
  )

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


  const requestTab = (
   <form onSubmit={requestForm.handleSubmit}>
      <Stack spacing={3}>
        <Box>
        <Button colorScheme="blue" variant="outline" onClick={onOpen}>Add new request</Button>
   <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Request Form</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl id="subject" textAlign="center">
          <FormLabel>Subject</FormLabel>
            <Input type="text"
             id="name"
            // value={subject}
            values={requestForm.values.fullname}
            />
          <FormErrorMessage>{requestForm.errors.subject}</FormErrorMessage>
         </FormControl>
        <FormControl id="email">
            <FormLabel>Location</FormLabel>
            <Select placeholder="Select state">
                {nigStates.map(state => (
             <option value={state}>{state}</option>
          ))}
          </Select>
          <FormErrorMessage>{profileForm.errors.email}</FormErrorMessage>
          </FormControl>
        <FormControl>
                  <FormLabel>Type</FormLabel>
                     <Select  values={profileForm.values.type}>
             <option value='hometutoring'>Home tutoring</option>
             <option value='onlinetutoring'>Online tutoring</option>
          </Select>
           <FormErrorMessage>{profileForm.errors.fullname}</FormErrorMessage>
        </FormControl>
        <FormControl>
                  <FormLabel>Request Details</FormLabel>
                    <Textarea
                      // value={value}
                      // onChange={handleInputChange}
                   
                      size="sm"
                    />
              <FormErrorMessage>{profileForm.errors.fullname}</FormErrorMessage>
        </FormControl>
          </ModalBody>

          <ModalFooter>
             <Button type="submit" colorScheme="blue" isLoading={isLoading} >
           Add request
        </Button>
          </ModalFooter>
        </ModalContent>
        </Modal>
        </Box>
       {/* <DataGrid
      columns={columns}
          rows={rows}
           defaultColumnOptions={{
        sortable: true,
             resizable: true,
        editable: true
      }}
    /> */}
               
      </Stack>
        
      </form>
  )

  const dashboardMenu = userData.role.name == "Tutor" ? (
         <Box>
            <Tabs>
             <TabList justifyContent="space-between"  color="white" bg="#161B45" >
                        <Flex m="auto" >
                    <Tab  _selected={{ fontWeight: "bold"}} >Profile</Tab>
                    <Tab  _selected={{ fontWeight: "bold" }}>Subjects</Tab>
                            <Tab  _selected={{ fontWeight: "bold" }}>Sessions</Tab>
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
            {basicInfo}
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
            <Tabs isLazy>
             <TabList justifyContent="space-between"  color="white" bg="#161B45" >
                        <Flex m="auto" >
                    <Tab  _selected={{ fontWeight: "bold"}} ><AiOutlineProfile ml="2" /> Profile</Tab>
                    <Tab  _selected={{ fontWeight: "bold"}} >My Request</Tab>
                    <Tab  _selected={{ fontWeight: "bold" }}>Sessions</Tab>
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
            <TabPanels>
              <TabPanel w="30pv"   maxW="50vw" 
              mx="auto">
              {basicInfo}
                </TabPanel>
                <TabPanel className="mycontainer" 
              mx="auto">
                 {requestTab}
                </TabPanel>
                <TabPanel>
                <p>three!</p>
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
        <Box className="content">
          {dashboardMenu} 
          </Box>
        </SlideFade>
    )
}

export async function getServerSideProps(ctx) {
  
  const jwt = parseCookies(ctx).jwt
  const res = await fetch(`${publicRuntimeConfig.API_URL}/requests?_sort=createdAt:desc`);
  const requests = await res.json()
  let requestData =[];
  requests.forEach(function (request) {
    let reqObj = {
      id: request.id,
      desc: request.requestDesc,
      status: request.status,
      location: request.location,
      subject: request.subject,
      type: request.type,
      userImage: request.user.userImage.url
    }
    requestData.push( reqObj)
    
});
  

    return {
        props: {
        requests,
        jwt,
          requestData
      }

  }
}