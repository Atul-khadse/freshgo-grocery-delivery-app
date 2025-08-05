import React, {  useContext, useEffect, useState } from 'react'
import { createContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { dummyProducts } from '../assets/assets';
import toast from 'react-hot-toast';



export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

  const currency  = import.meta.env.VITE_CURRENCY;

  const navigate  = useNavigate();
  const [user, setUser] = useState(null);
  const [isSeller, setIsSeller] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [products, setProducts] = useState([]);

  const [cartItems, setCartItems] = useState({});


// fatch all product
  const fetchProducts = async () => {
    setProducts([dummyProducts]);
  }

  // add product to cart
  const addToCart = () => {
    let cartData = structuredClone(cartItems);

    if(cartData[itemId]){
      cartData[itemId] += 1;
    }else{
      cartData[itemId] = 1;
    }
    setCartItems(cartData);
    toast.success("Added to cart")
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const value = {navigate, user, setUser, isSeller, setIsSeller,
     showUserLogin, setShowUserLogin, products, currency
    };
  return <AppContext.Provider value={value}>
    {children}
  </AppContext.Provider>
}


export const useAppContext = () => {
  return useContext(AppContext);
}