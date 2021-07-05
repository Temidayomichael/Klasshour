import * as Yup from "yup";
import {
   Stack,
   FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
 Text
} from '@chakra-ui/react'
import axios from 'axios'

export default function BasicInfo({
    useFormik,
    fullname,
    email,
    setUserFormData,
    isLoading,

}) {
    const profileForm = useFormik({
    initialValues: {
      name: fullname,
      email: email,
      userImage: '',
      password: '',
      confirm_password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string(),
      fullname: Yup.string(),
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
      <>
    <form onSubmit={profileForm.handleSubmit}>
      <Stack  spacing={3}>
    
                <FormControl id="userImage" textAlign="center">
          <FormLabel>Change Profile Picture</FormLabel>
              <Input type="file" id="userImage"  values={profileForm.values.userImage} onChange={(event) => {
  setUserFormData({...userFormData,userImage: event.currentTarget.files[0]});
          }} />
          <FormErrorMessage>{profileForm.errors.userImage}</FormErrorMessage>
         </FormControl>
        <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" value={email} isDisabled  values={profileForm.values.email}/>
          <FormHelperText>We'll never share your email.</FormHelperText>
          <FormErrorMessage>{profileForm.errors.email}</FormErrorMessage>
          </FormControl>
        <FormControl>
            <FormLabel>Full Name</FormLabel>
          <Input type="text"
             id="name"
            value={fullname}
             onChange={profileForm.handleChange}
            values={profileForm.values.fullname}
            onInput={(e) => setUserFormData({ ...userFormData, fullname: e.target.value })} />
          
           <FormErrorMessage>{profileForm.errors.fullname}</FormErrorMessage>
        </FormControl>

   
        <FormControl isInvalid={profileForm.errors.password && profileForm.touched.password}>
            <FormLabel>Password</FormLabel>
          <Input id="password" type="password"
            onChange={profileForm.handleChange}
            onInput={(e) => setUserFormData({ ...userFormData, password: e.target.value })}
            values={profileForm.values.password} />
           <FormErrorMessage>{profileForm.errors.password}</FormErrorMessage>
          </FormControl>
        <FormControl id="confirm_password" isInvalid={profileForm.errors.confirm_password && profileForm.touched.confirm_password}>
            <FormLabel>Confirm Password</FormLabel>
          <Input type="password"
             id="confirm_password" 
            onChange={profileForm.handleChange}
            values={profileForm.values.confirm_password}
            onInput={(e) => setUserFormData({ ...userFormData, confirm_password: e.target.value })}
            values={profileForm.values.confirm_password}
          />
           <FormErrorMessage>{profileForm.errors.confirm_password}</FormErrorMessage>
        </FormControl>
        <Button type="submit" colorScheme="blue" isLoading={isLoading} >
            Update Profile
        </Button>
      </Stack>
         
        </form>

        </>
    )
}
