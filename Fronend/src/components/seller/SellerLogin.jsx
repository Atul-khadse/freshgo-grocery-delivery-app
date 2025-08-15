import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast';

const SellerLogin = () => {
  const {isSeller, setIsSeller, navigate, axios} = useAppContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isSeller) {
      navigate("/seller");
    }
  }, [isSeller]);

  const onSubmitHandler = async (event) => {
    try {
      event.preventDefault();
      const {data} = await axios.post('/api/seller/login', {email, password})
      if (data.success) {
        setIsSeller(true);
        navigate('/seller')
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
    
  };

  return !isSeller && (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-50">
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-sm sm:max-w-md bg-white p-6 sm:p-8 rounded-xl shadow-lg flex flex-col gap-5"
      >
        <p className="text-2xl sm:text-3xl font-semibold text-center">
          <span className="text-primary">Seller</span> Login
        </p>

        <div className="w-full">
          <p className="text-sm font-medium text-gray-700 mb-1">Email</p>
          <input
          onChange={(e) => setEmail(e.target.value)} value={email}
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
            required
          />
        </div>

        <div className="w-full">
          <p className="text-sm font-medium text-gray-700 mb-1">Password</p>
          <input onChange={(e) => setPassword(e.target.value)} value={password}
            type="password"
            placeholder="Enter your password"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
            required
          />
        </div>

        <button
          className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition font-medium"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default SellerLogin;
