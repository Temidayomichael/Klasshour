import { useState } from 'react'
import {  useFormik } from "formik";
import * as Yup from "yup";
import { Box,useToast, Button, Divider, FormControl, FormErrorMessage, Input, InputGroup, InputLeftElement, Stack, Text, Center } from '@chakra-ui/react';
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { AiOutlineArrowRight } from 'react-icons/ai'
import getConfig from 'next/config'
import Axios from 'axios'
import Link from 'next/link'
import { setCookie } from 'nookies';
import Router  from 'next/router';
import Head from 'next/head';



const { publicRuntimeConfig } = getConfig()

export default function Login({ history }) {
    
    const toast = useToast()
     const [formData, setFormData] = useState({
        email: '',
        password: '',
        isLoading:false
    });
     const {email, setPassword, isLoading }= formData

    const formik  = useFormik({
        initialValues: {
        email: "",
        password: ""
        },
        validationSchema : Yup.object({
            email: Yup.string()
                .email("Invalid email format")
                .required("Required!"),
            password: Yup.string()
                .required("Required!"),
         }),
        onSubmit: async (values) => {
            setFormData({ ...formData,isLoading: true });
            const user = {
                identifier: values.email,
                password: values.password,
            }
            
            await Axios.post(`${publicRuntimeConfig.API_URL}/auth/local`, user)
                .then(res => {
                    const loginResponse = res.data
                  
                        console.log(res)
                    
                    setCookie(null, 'jwt', loginResponse.jwt, {
                        maxAge: 30 * 24 * 60 * 60,
                        path: '/'
                    })
                       Router.push('/dashboard')
                }).catch(err => {
                    console.log(err.response.data.message[0].messages[0].message)
                     setFormData({ ...formData,isLoading: false });
                    
                     toast({
                                        title: "Error!",
                                        description: err.response.data.message[0].messages[0].message + "Please fill in correct details",
                                        status: "error",
                                        duration: 9000,
                         isClosable: true,
                                  
                     })
                     
                })
             
        }
    });


    return (
        <Center>
            <Head>
                    <title>Login | Klasshour</title>
                <link rel="icon" href="../img/home_logo.png" />
            </Head>
        <Center maxWidth="20vw" my="20">
            <form onSubmit={formik.handleSubmit}>
                 <Stack spacing={3}>
                    <Text
                        fontWeight="bold" 
                        fontSize="xl"
                       m="auto"
                        >
                    Login to you Klasshour account</Text> 
                    <Divider borderColor="gray.500" opacity="0.5" />
                <Stack spacing={5}>
                                      
                    <FormControl isInvalid={formik.errors.email && formik.touched.email}>
                            <InputGroup>
                                <InputLeftElement color="gray.400" children={<AiOutlineMail  />} />
                                <Input id="email" placeholder="Email" type="email"  onChange={formik.handleChange}
                                    values={formik.values.email} />
                                     </InputGroup>
                                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={formik.errors.password && formik.touched.password}>
                            <InputGroup>
                                <InputLeftElement color="gray.400" children={<RiLockPasswordFill  />} />
                                <Input id="password" placeholder="Password" type="password" onChange={formik.handleChange}
                                    values={formik.values.password} />
                                    </InputGroup>
                                <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
                        </FormControl>
                            <Button
                                bg="#161B45"
                                rightIcon={<AiOutlineArrowRight />}
                                color="white" _hover={{ opacity: "0.9" }}
                                _active={{
                                    bg: " #211221",
                                    transform: "scale(0.98)"
                                }}
                                type="submit"
                                isLoading={isLoading}
                             
                        >Login</Button>
                        <Box color="blue.400" >
                            <Link href="#" textAlign="center" >Forget Password?</Link>
                            </Box>
                            <Stack isInline spacing="2" m="auto">
                            <Text>Don't have an account?</Text> 
                              <Box color="blue.400" mb="5" >
                                 <Link mb="10" href="/register">Signup</Link>
                            </Box>
                           
                            </Stack>
                            {formik.errors.password ? formik.errors.password : null}
                    </Stack>
                    </Stack>
                        </form>
            </Center>
            </Center>
    )
}
