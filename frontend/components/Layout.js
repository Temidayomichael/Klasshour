
import React, { useContext } from 'react'
import Footer from "./Footer";
import { Router, useRouter } from 'next/router'

import NProgess from "nprogress"
import Navbar from './menus/Navbar';
import { Box } from '@chakra-ui/layout';
import UserContext from '../contexts/UserContext';


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
    const userData = useContext(UserContext)
    const router = useRouter()
    
    return (
        <Box bg="gray.50" >
            <Box >
                 <Navbar />
           </Box>
           
            {children}
            <Box>
                  <Footer />
            </Box>
        </Box>
    )
}
