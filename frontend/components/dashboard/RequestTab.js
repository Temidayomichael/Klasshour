import * as Yup from "yup";
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
import { parseCookies } from 'nookies'
import { useFormik } from "formik";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import AddRequest from "./AddRequest";


export default function RequestTab({jwt}) {
console.log(jwt)
  const userData = useContext(UserContext)
  
  return (
   
      <Stack spacing={3}>
     <AddRequest
                useFormik={useFormik}
                jwt={jwt}
                user={userData.id}
              />
               <Text>jdbnfjbdhyfbdfhybfhd</Text>
      </Stack>
      
  );
}

