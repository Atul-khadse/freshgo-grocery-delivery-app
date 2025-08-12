import React,{ use, useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext';
import { dummyAddresses } from '../assets/assets';

const MyOrders = () => {

  const [myOrders, setMyOrders] = useState([]);
  const {currency } = useAppContext();

const fetchOrders = async () => {
  setMyOrders(dummyAddresses);
}

useEffect(() => {
  fetchOrders()
},[])


  return (
    <div className='mt-16 pb-16 '>
      <div className='flex flex-col items-end w-max mb-8'>
        <p className='text-2xl font-medium uppercase'> My orders</p>
        <div className='w-16 h-0.5 bg-primary rounded-full'>

        </div>
      </div>

      
    </div>
  )
}

export default MyOrders
