import React from 'react'
import address_man from '../assets/address_man.png'

// input field component
const inputField = (() => (
    <input type='text' />
))


const AddAddress = () => {

const onsubmitHandler = async (e) => {
    e.preventDefault();
}


  return (
    <div className='mt-16 pb-16'>
      
        <p className='text-2xl md:text-3xl text-gray-500'>Add Shipping <span className='font-medium text-primary'>Address</span></p>
        <div className='flex flex-col-reverse md:flex-row justify-between mt-10'>
            <div className='flex-1 max-w-md'>
            <form onClick={onsubmitHandler} className='space-y-3'></form>
            </div>
            <img className='md:mr-16 mb-16 md:mt-0' src={address_man} alt="Add Address" />
        </div>
    
    </div>
  )
}

export default AddAddress
