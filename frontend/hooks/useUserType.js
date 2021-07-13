import { useState, useEffect, useContext } from 'react';
import UserContext from '../contexts/UserContext';
import { parseCookies } from 'nookies'

export default function useUserType() {
      const userData = useContext(UserContext)
    const jwt = parseCookies().jwt
   
  const [isStudent, setIsStudent] = useState(false);

  useEffect(() => {
    if (jwt) {
      
      if (userData.role.name == "Student") {
        setIsStudent(true);
      }
    }
    return () => {
      setIsStudent(false);
    };
  });

  return isStudent;
}
