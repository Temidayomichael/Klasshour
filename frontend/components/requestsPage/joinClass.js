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
} from "@chakra-ui/react"
import useRequestStatus from "../../hooks/useRequestStatus";


export default function JoinClass(data) {
     const isOpen = useRequestStatus(data);
     console.log("request data:",data)
  return (
    <>
        <Popover placement="right" >
                                                <PopoverTrigger>
                  <Button ml="2"
                      color="gray.600"
                      fontSize="sm"
                      w="30"
                      isDisabled={isOpen }
                                                            > Join Class  </Button>
                                                </PopoverTrigger>
                                                <PopoverContent>
                                                    <PopoverArrow />
                                                    <PopoverCloseButton />
                                                    <PopoverHeader>Confirmation!</PopoverHeader>
                                                    <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
                                                    <PopoverFooter d="flex" justifyContent="flex-end">
                                                        <Button onClick={() => {
                                                           
                                                            const postRequest = {
                                                                method: 'POST', // Method itself
                                                                headers: {
                                                                    'Content-type': 'application/json; charset=UTF-8',
                                                                    'Authorization': `Bearer ${jwt}`     // Indicates the content
                                                                },
                                                                body: JSON.stringify({
                                                                    students: data.user.id,
                                                                    details: data.id,
                                                                        
                                                                }),   //send data in JSON format
                                                            }
                                                            fetch(`${publicRuntimeConfig.API_URL}/classes`, postRequest)
                                                                .then(response => response.json())
                                                                .then(data => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
                                                                .catch(err => console.log(err))
                                                        }} size="sm" colorScheme="red">Join class</Button>
                                                    </PopoverFooter>
                                                </PopoverContent>
                                            </Popover>
    </>
  );
}
