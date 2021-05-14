
import React from 'react'
import Footer from "./Footer";
import { Router, useRouter } from 'next/router'

import NProgess from "nprogress"
import Navbar from './menus/Navbar';
import { Box } from '@chakra-ui/layout';


Router.onRouteChangeStart = url => {
    console.log(url)

    NProgess.start();
}

Router.onRouteChangeComplete = () => { 
    NProgess.done();
}
Router.onRouteChangeError = () => { 
    NProgess.done();
}



export default function Layout({ children }) {
    const router = useRouter()
    if (router.pathname !=="/dashboard") {
        console.log("correct")
    }
    return (
        <Box bg="gray.50" >
            <Box >
                 <Navbar />
           </Box>
           
            {children}
            
            <Footer />
        </Box>
    )
}
