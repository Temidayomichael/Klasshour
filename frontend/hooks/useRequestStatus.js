import { useEffect,useState } from "react";

export default function useRequestStatus(data) {
   const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
     if ( data.status == 'open') {
     setIsOpen(true);
    }
    return () => {
     setIsOpen(false);
    };
  });

  return isOpen;
}
