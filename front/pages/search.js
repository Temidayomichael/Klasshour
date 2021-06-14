import React from 'react'
import Head from 'next/head'
import { Box } from "@chakra-ui/react"
export default function request() {
    return (
        <>
             <Head>
                <title>Search | Klasshour</title>
                <link rel="icon" href="../img/home_logo.png" />
            </Head>
                <Box bg="tomato" w="100%" p={4} color="white">
                        Search
                </Box>
            </>
    )
}
