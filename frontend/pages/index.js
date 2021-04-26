import { Box, Button, Center, Divider, Flex, Heading, Icon, Image, Input, InputGroup, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { GiGuitar } from "react-icons/gi";
import { AiOutlineHome, AiOutlineLaptop, AiOutlineProject } from "react-icons/ai";
import { SiGoogleclassroom, SiMinetest } from "react-icons/si";
import { AiOutlineArrowRight } from "react-icons/ai";
import Lottie from 'react-lottie-player'
import question  from "public/lotties/question.json"
import cashmoney  from "public/lotties/cashmoney.json"
import time  from "public/lotties/time.json"
import elearning  from "public/lotties/elearning.json"
import Head from "next/head";

export default function Home() {
    const handleClick =()=>{
        
    }
// console.log(process.env.API_URL)
    
    function Feature({ title, icon, desc, ...rest }) {
        return (
          <Flex p={3} bg="gray.100"  shadow="md" borderWidth="1px" flex="1" rounded="md" {...rest}>
              <Box>
                    <Icon m="5" color="#161B45" as={icon} textAlign="center" />
                  {
                      
                  }
                  {/* <Icon name={} /> */}
                  
              </Box>
              <Box>
              <Heading fontSize="xl"  color="#161B45">{title}</Heading>
             
                <Text mt={4} >{desc}</Text>
              </Box>
            </Flex>
        );
      }

    function WhatWeDo({ title, step, desc }) {
        return (
               <Flex p={3} bg="gray.100" flex="1" rounded="md">
              <Box>
                    <Text m="5" fontSize="xl" fontWeight="bold" color="#161B45" textAlign="center">{step}</Text>
                  {
                      
                  }
                  {/* <Icon name={} /> */}
                  
              </Box>
              <Box>
              <Heading fontSize="xl"  color="#161B45">{title}</Heading>
             
                <Text mt={4} >{desc}</Text>
              </Box>
            </Flex>
        )
     }
     

    return (
        <>
            <Head>
                <title>Find tutors | Klasshour</title>
                 <link rel="icon" href="../img/home_logo.png" />
            </Head>
         
            <Box>
                <Center  className="mycontainer"
                mx="auto" h="70vh" textAlign="center" justifyContent="space-between">
                <Box  maxW="32rem">
                        <Heading fontSize="53px" mb={4} color="#161B45" my={3} > GET INSTANT HELP</Heading>
                        <Text fontSize="lg">Online & Home Tutoring. Homework Help. Test Prep.</Text>
                <InputGroup mt="24px" display={{ xl: "flex" }} >
                    <Input variant="filled"    focusBorderColor="#161B45" mb="5"  placeholder="Subject: Math,English"  size="lg" />
                    
                    <Button   width="35%"
                         bg="#161B45" _hover={{ opacity: "0.9" }} 
                         _active={{
                             bg: "#161B45",
                             transform: "scale(0.88)",
                           }}
                         color="white" size="md" onClick={handleClick}
                    >Go </Button>
                   
                </InputGroup>
                            
</Box>
                    <Box w="500px">
                   <Lottie
                            loop
                            animationData={elearning }
                            play
                            />
                                
                       
                    </Box>
                    
                    </Center>
                    {/* <Stack  maxW="80rem"  m="auto">
            <SimpleGrid my="70px" columns={[
                    "1", // base
                    "1", // 480px upwards
                    "1", // 768px upwards
                    "3", // 992px upwards
                    ]} spacing={8} >
                <Feature
                    title="Post a Request"
                    desc="Post a specific topic, or  specific question. Tutors will apply to your call for help"
                    step="Step 1"
                    icon="ImLocation"
                />
              
                    <Feature
                    title="Pick Your Tutor"
                    desc="Select your tutor among many of those that applied, you can select depending on the, experience and price"
                step="Step 2"
                />
                
                <Feature
                title="Start a Session"
                desc="Choose a tutor with 'Online now' tag and click 'Take a session',
                you will be directed to our amazing virtual classroom. Wait a few minutes, and your tutor will join you to start the session"
                step="Step 3"
            />
                    </SimpleGrid>
                    
                    </Stack> */}
                <Box bg="gray.100" py="20"  >
                    <Box h="90%" m="auto" className="mycontainer" >   
                        <SimpleGrid columns={[
                    "1", // base
                    "2", // 480px upwards
                    "2", // 768px upwards
                    "3", // 992px upwards
                        ]} gap={12}>
                             <Feature
                                title="Online Tutoring"
                                desc="Find a tutor to take you through specific topics or explaincertain points"
                                icon={SiGoogleclassroom}
                />
              
                    <Feature
                                title="Home Work Help"
                                desc="Take short sessions to help you solve particular questions"
                                icon={AiOutlineHome}
                />
                    <Feature
                                title="Test / Exam Prep"
                                desc="Get a tutor to prepare you for your, upcoming tests and exams"
                                icon={SiMinetest}
                />
                    <Feature
                                title="Skills"
                                desc="Learn a new skill online like baking, graphics design e.t.c"
                                icon={GiGuitar}
                />
                    <Feature
                                title="Coding"
                                desc="Get a programmer to solve your coding problems and help you learn how to code"
                                icon={AiOutlineLaptop}
                />
                    <Feature
                                title="Project Help"
                                desc="Find a scholar to help you prepare, and analyse youR thesis"
                                icon={AiOutlineProject}
                />
                
                           
             
                </SimpleGrid>
            </Box>
            </Box>
            <Box>
                    <Stack maxW="70rem" m="auto" spacing={20} >
         <Flex justifyContent="space-between" align="center" >
                <Box w="22rem">
                    <Text fontSize="3xl" color="#161B45" fontWeight="bold">Get Complicated Questions Answered</Text>
                    <Text fontSize="lg">You will only pay after you have concluded your session/minutes with your tutor </Text>
                </Box>
                    <Box align="center" >
                        <Lottie
                            loop
                            animationData={question }
                            play
                            />
                </Box>
                        </Flex>
                        <Divider borderColor="gray.400" />
         <Flex justifyContent="space-between" align="center" >
               
                    <Box align="center" >
                        <Lottie
                            loop
                            animationData={time }
                            play
                            />
                            </Box>
                             <Box w="22rem">
                    <Text fontSize="3xl" color="#161B45" fontWeight="bold">Charge Per Minute</Text>
                    <Text fontSize="lg">No minimum or limits to class you can take, you will only be charged for the minute of tutoring</Text>
                            </Box>
        </Flex>
                        <Divider borderColor="gray.400" />
                          <Flex justifyContent="space-between" align="center" >
                <Box w="22rem">
                    <Text fontSize="3xl" color="#161B45" fontWeight="bold">Pay After a session</Text>
                    <Text fontSize="lg">You will only pay after you have concluded your session/minutes with your tutor</Text>
                </Box>
                    <Box align="center" >
                        <Lottie
                            loop
                            animationData={cashmoney }
                            play
                            />
                </Box>
                        </Flex>
                </Stack>
            </Box>
                <Box bg="gray.100" py="20"  >
                    <SimpleGrid columns={3} spacing={10} maxW="70rem" m="auto" >
                            <WhatWeDo  title="Post a Request" step="step1" desc="Post a specific topic, or a specific question. Tutors will apply to your request and offer their help." />
                            <WhatWeDo  title="Choose Your Perfect Tutor" desc="Choose your tutor among many of those who apply. You can select depending on reviews, experience, price, and other factors." step="step2" />
                            <WhatWeDo title="Start a Session Online Or Anywhere" desc="Choose Contact me to get a call from the tutor if you want home tutoring, or choose a tutor with Online Now tag, and click Take a Session to take your session online." step="step3" />
                        </SimpleGrid>
                 
                </Box>   
                <Center py="20" maxW="70rem" m="auto" justifyContent="space-between" >
                    <Box >
                       <Heading fontSize="3xl" color="#161B45" fontWeight="bold">Are you intrested in becoming a tutor with Klasshour?</Heading>
                            <Text fontSize="lg" >Find students all over the world,<br />
                        Use Modaris modern VirtualClassroom,<br />
                        Teach on your own time and
                        Get paid securely.</Text>
                    </Box>  
                              <Button 
                       colorScheme="red"
                        rightIcon={<AiOutlineArrowRight />}
                         size="lg" 
                    >Get Started</Button>
                    <a className='btn btn-primary' target='new' href='https://app.learncube.com/api/virtual-classroom/class/start/?pub_key=8d8653d7a394ebd47449fa54&room_token=example-token-CtO2Z2&userid=example-user-14uJfB'>Enter class</a>
                </Center>   
            </Box>
            </>
    )
}


