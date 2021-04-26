
import React from 'react'
import Footer from "./Footer";
import { Router } from 'next/router'

import NProgess from "nprogress"
import Navbar from './menus/Navbar';

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



export default function Layout({children}) {
    return (
        <>
           
            <Navbar />
                {children}
            <Footer />
        </>
    )
}
