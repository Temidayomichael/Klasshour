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


export default function RequestTab({
    useFormik,
    isLoading
}) {
    
      const { isOpen, onOpen, onClose } = useDisclosure()
 
const nigStates =["Abia","Adamawa","Akwa Ibom","Anambra","Bauchi","Bayelsa","Benue","Borno","Cross River","Delta","Ebonyi","Edo","Ekiti","Enugu","Gombe","Imo","Jigawa","Kaduna","Kano","Katsina","Kebbi","Kogi","Kwara","Lagos","Nasarawa","Niger","Ogun","Ondo","Osun","Oyo","Plateau","Rivers","Sokoto","Taraba","Yobe","Zamfara"]

  const requestForm = useFormik({
       initialValues: {
      type: '',
      subject: '',
      requesDesc: '',
      location: ''
      },
    validationSchema: Yup.object({
      type: Yup.string(),
      subject: Yup.string(),
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

  return (
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
          <FormErrorMessage>{requestForm.errors.state}</FormErrorMessage>
          </FormControl>
        <FormControl>
                  <FormLabel>Type</FormLabel>
                     <Select  values={requestForm.values.type}>
             <option value='hometutoring'>Home tutoring</option>
             <option value='onlinetutoring'>Online tutoring</option>
          </Select>
           <FormErrorMessage>{requestForm.errors.type}</FormErrorMessage>
        </FormControl>
        <FormControl>
                  <FormLabel>Request Details</FormLabel>
                    <Textarea
                      // value={value}
                      // onChange={handleInputChange}
                   
                      size="sm"
                    />
              <FormErrorMessage>{requestForm.errors.requesDesc}</FormErrorMessage>
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
  );
}
