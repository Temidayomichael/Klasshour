import React, { useContext } from 'react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Input,
   FormControl,
  FormLabel,
  FormHelperText,
  NumberInput,
  NumberInputField,
  InputLeftAddon,
  Textarea,
  
} from "@chakra-ui/react"
 import {  useFormik } from 'formik';
 import NumberFormat from 'react-number-format';
import { AddApplication } from '../../Queries/application';
import { useMutation } from 'react-query';


export default function ApplyClass({user,request}) {
    const {mutate,data,status}=useMutation(AddApplication,{
        onSuccess:(err)=>{
            alert("Successfully Posted")
     },
      onError: (err) => {
          console.log(err)
     toast({
            title: "Error getting Uploading request ...",
            status: "error",
            duration: 2000,
            isClosable: true,
        })
   },
     
    });
  
  const format = (val) => `$` + val
  const formik = useFormik({
     initialValues: {
      note: '',
     },
    onSubmit: async (values) => {
      
        try {
        await mutate({
          values: values,
          user: user,
          request: request
        })
      } catch (e) {
    console.log(e)
      }
     },
  });
  	console.log('data.request', user)
  return (
		<>
			<Popover placement='right'>
				<PopoverTrigger>
					<Button size='sm'>
						Apply
					</Button>
				</PopoverTrigger>
				<PopoverContent>
					<PopoverArrow />
					<PopoverCloseButton />
					<PopoverHeader>Class application</PopoverHeader>
					<PopoverBody>
						<form onSubmit={formik.handleSubmit}>
							<FormControl id='note'>
								<FormLabel>Note</FormLabel>
								<Textarea
									type='note'
									name='note'
									onChange={formik.handleChange}
									value={formik.values.note}
								/>
								<FormHelperText>
									have something to add to this request?.
								</FormHelperText>
							</FormControl>
							<Button type='submit'>Submit</Button>
						</form>
					</PopoverBody>
				</PopoverContent>
			</Popover>
		</>
	)
}
