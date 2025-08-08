import React, { useState } from 'react'
import address_man from '../assets/address_man.png'

// input field component
const inputField = ({ type, placeholder, name, handleChange, address}) => (
    <input className='w-full px-2 py-2.5 border border-gray-500/30 rounded outline-none text-gray-500 focus:border-primary transition'
     type={type} 
    placeholder={placeholder}
    onChange={handleChange}
    name={name}
    value={address[name]}
    required

    />
)


const AddAddress = () => {


  const [address, setAddress] = useState({
    firstName:'',
    lastName:'',
    email:'',
    street:'',
    city:'',
    state:'',
    zipcode:'',
    country:'',
    phone:'',
  })






  
const onsubmitHandler = async (e) => {
    e.preventDefault();
}


  return (
    <div className='mt-16 pb-16'>
      
        <p className='text-2xl md:text-3xl text-gray-500'>Add Shipping <span className='font-medium text-primary'>Address</span></p>
        <div className='flex flex-col-reverse md:flex-row justify-between mt-10'>
            <div className='flex-1 max-w-md'>
            <form onClick={onsubmitHandler} className='space-y-3 mt-6 text-sm'>
              <div>
                <inputField handleChange={handleChange} address={address} name="firstName" type="text" placeholder="first Name" />
                <inputField handleChange={handleChange} address={address} name="lastName" type="text" placeholder="last Name" />

              </div>
            </form>
            </div>
            <img className='md:mr-16 mb-16 md:mt-0' src={address_man} alt="Add Address" />
        </div>
    
    </div>
  )
}

export default AddAddress
