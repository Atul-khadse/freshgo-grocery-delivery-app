import React, { useState } from 'react';
import address_man from '../assets/address_man2.png';

// Reusable Input Field Component
const InputField = ({ type, placeholder, name, handleChange, address }) => (
  <input
    className="w-full px-3 py-3 border border-gray-300 rounded-lg outline-none text-gray-600 focus:border-primary focus:ring-1 focus:ring-primary transition"
    type={type}
    placeholder={placeholder}
    onChange={handleChange}
    name={name}
    value={address[name]}
    required
  />
);

const AddAddress = () => {
  const [address, setAddress] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log("Address Saved:", address);
  };

  return (
    <div className="mt-16 pb-16 px-4">
      {/* Heading */}
      <p className="text-2xl md:text-3xl text-gray-700 font-semibold">
        Add Shipping <span className="text-primary">Address</span>
      </p>

      {/* Layout */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center md:items-start mt-10 gap-10">
        
        {/* Form Section */}
        <div className="flex-1 w-full max-w-lg bg-white p-6 rounded-xl shadow-lg">
          <form onSubmit={onSubmitHandler} className="space-y-4 text-sm">
            {/* First & Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField handleChange={handleChange} address={address} name="firstName" type="text" placeholder="First Name" />
              <InputField handleChange={handleChange} address={address} name="lastName" type="text" placeholder="Last Name" />
            </div>

            {/* Email */}
            <InputField handleChange={handleChange} address={address} name="email" type="email" placeholder="Email address" />

            {/* Street */}
            <InputField handleChange={handleChange} address={address} name="street" type="text" placeholder="Street" />

            {/* City & State */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField handleChange={handleChange} address={address} name="city" type="text" placeholder="City" />
              <InputField handleChange={handleChange} address={address} name="state" type="text" placeholder="State" />
            </div>

            {/* Zip & Country */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField handleChange={handleChange} address={address} name="zipcode" type="number" placeholder="Zip code" />
              <InputField handleChange={handleChange} address={address} name="country" type="text" placeholder="Country" />
            </div>

            {/* Phone */}
            <InputField handleChange={handleChange} address={address} name="phone" type="text" placeholder="Phone" />

            {/* Submit */}
            <button
              type="submit"
              className="w-full mt-4 bg-primary text-white py-3 hover:bg-primary/80 transition-all duration-300 rounded-lg uppercase tracking-wide shadow-md"
            >
              Save address
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className="flex justify-center w-full md:w-1/2">
          <img
            className="w-48 sm:w-64 md:w-72  object-contain"
            src={address_man}
            alt="Add Address"
          />
        </div>
      </div>
    </div>
  );
};

export default AddAddress;
