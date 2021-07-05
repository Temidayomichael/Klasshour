import { useState, useEffect } from 'react';
import { parseCookies } from 'nookies'


export default function useLoginStatus() {
    const jwt = parseCookies().jwt
  const [isLoggedin, setIsLoggedIn] = useState(false);

  useEffect(() => {
     if (jwt) {
     setIsLoggedIn(true);
    }
    return () => {
     setIsLoggedIn(false);
    };
  });

  return isLoggedin;
}
