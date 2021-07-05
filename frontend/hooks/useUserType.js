import { useState, useEffect, useContext } from 'react';
import UserContext from '../contexts/UserContext';


export default function useUserType() {
      const userData = useContext(UserContext)
   
  const [isStudent, setIsStudent] = useState(false);

    useEffect(() => {
     if (userData.role.name=="Student") {
     setIsStudent(true);
    }
    return () => {
     setIsStudent(false);
    };
  });

  return isStudent;
}
