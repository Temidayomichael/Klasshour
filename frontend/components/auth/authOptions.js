import { Button } from '@chakra-ui/react'
import { AiOutlineArrowRight } from "react-icons/ai";
import { useRouter } from 'next/router'
import { destroyCookie, parseCookies } from 'nookies'

export default function AuthOptions(ctx) {
    const router = useRouter()
    
    const register = () => router.push("/register");
    const login = () => router.push("/login");
    const jwt = parseCookies(ctx).jwt
    
    function logout() {
        destroyCookie(null, 'jwt')
        router.push("/login")
   }
    return (
        <div>
            {
                jwt  ?
                    <Button onClick={logout} size="sm" rightIcon={<AiOutlineArrowRight />} ml="3" colorScheme="red" variant="outline">
                        Logout
                </Button> :
                    <>
           
                        <Button
                            borderColor="#161B45"
                            rightIcon={<AiOutlineArrowRight />}
                            color="#161B45" _hover={{ opacity: "0.9" }} variant="outline"
                            _active={{
                                bg: "#E7E8EC",
                           
                            }}
                            size="sm" onClick={login} mr={4}
                        >Log In </Button>
                        <Button
                            bg="#161B45"
                            rightIcon={<AiOutlineArrowRight />}
                            color="white" _hover={{ opacity: "0.9" }}
                            _active={{
                                bg: " #211221",
                           
                            }}
                            size="sm" onClick={register}
                        >Register</Button>
                      
                    </>
            }
        </div>
    )
}
