import React from 'react'
import Head from 'next/head'
import { Box, Heading, Text } from "@chakra-ui/react"
export default function request() {
    return (
        <>
          <Head>
                    <title>Become A Tutor | Klasshour</title>
                    <link rel="icon" href="../img/home_logo.png" />
                </Head>
                <Box className="mycontainer" m="auto" my="90"  className="content">
                    <Box mb="10">
                        <Box>
                            <Heading as="h1" size="lg" isTruncated>
                                Become A Tutor
                                </Heading>
                            <Text fontSize="lg"> Apply to the requests that you can help with.</Text>
                        </Box>
                    
                    </Box>
            </Box>
           
        
            </>
    )
}
