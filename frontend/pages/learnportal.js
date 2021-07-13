import { Box } from '@chakra-ui/layout'
import dynamic from 'next/dynamic'
import React from 'react'

export default function learnportal() {
  const DynamicComponentWithNoSSR = dynamic(
  () => import('../components/videochat/VideoChat'),
    { ssr: false }
  )
  return (
       
    <>
      <DynamicComponentWithNoSSR />
      
    </>
    
  )
}
