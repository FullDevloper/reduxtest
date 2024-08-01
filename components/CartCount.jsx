// "use client"
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux'

export default function CartCount() {
 
const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);




  const cartItems=useSelector((store)=>store.cartItems)
    return <>
      {isClient && cartItems.length}
    </>
}
