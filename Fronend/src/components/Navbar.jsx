import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/fresh_go_logo.png';
import profile from '../assets/profileicon.jpeg';
import { useAppContext } from '../context/AppContext';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const {
    user,
    setUser,
    setShowUserLogin,
    navigate,
    searchQuery,
    setSearchQuery,
    getCartCount,
  } = useAppContext();

  const logout = () => {
    setUser(null);
    navigate('/');
  };

  useEffect(() => {
    if (searchQuery.length > 0) {
      navigate('/products');
    }
  }, [searchQuery]);

  return (
    <nav className="px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white flex justify-between items-center relative z-50">
      {/* Logo */}
      <NavLink to="/" onClick={() => setOpen(false)}>
        <img className="w-40 object-contain" src={logo} alt="logo" />
      </NavLink>

      {/* Desktop Navigation */}
      <div className="hidden sm:flex items-center gap-6">
        <NavLink to="/" className="hover:text-primary">Home</NavLink>
        <NavLink to="/products" className="hover:text-primary">All Products</NavLink>
        <NavLink to="/" className="hover:text-primary">Contact</NavLink>

        {/* Search */}
        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 py-1.5 rounded-full">
          <input
            type="text"
            className="bg-transparent outline-none placeholder-gray-500 w-full"
            placeholder="Search products"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
            <path d="M10.836 10.615 15 14.695" stroke="#7A7B7D" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783" stroke="#7A7B7D" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </div>

        {/* Cart */}
        <div onClick={() => navigate('/cart')} className="relative cursor-pointer">
          <svg width="18" height="18" fill="none" viewBox="0 0 14 14">
            <path d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0" stroke="#615fff" strokeLinecap="round" />
          </svg>
          <span className="absolute -top-2 -right-3 text-xs text-white bg-primary w-5 h-5 flex items-center justify-center rounded-full">
            {getCartCount()}
          </span>
        </div>

        {/* Login / Profile */}
        {!user ? (
          <button
            onClick={() => setShowUserLogin(true)}
            className="bg-primary text-white px-6 py-2 rounded-full hover:bg-indigo-600 transition"
          >
            Login
          </button>
        ) : (
          <div className="relative group">
            <img src={profile} className="w-10 h-10 rounded-full cursor-pointer" alt="profile" />
            <ul className="absolute right-0 top-12 w-32 bg-white shadow-md rounded-md text-sm hidden group-hover:block z-50">
              <li onClick={() => navigate('/my-orders')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">My Orders</li>
              <li onClick={logout} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
            </ul>
          </div>
        )}
      </div>

      {/* Mobile Menu Toggle */}
      <div className="sm:hidden flex items-center gap-4">
        {/* Cart (Mobile) */}
        <div onClick={() => navigate('/cart')} className="relative cursor-pointer">
          <svg width="18" height="18" fill="none" viewBox="0 0 14 14">
            <path d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0" stroke="#615fff" strokeLinecap="round" />
          </svg>
          <span className="absolute -top-2 -right-3 text-xs text-white bg-primary w-5 h-5 flex items-center justify-center rounded-full">
            {getCartCount()}
          </span>
        </div>

        {/* Hamburger Icon */}
        <button onClick={() => setOpen(!open)} aria-label="Toggle Menu">
          <svg width="24" height="18" fill="none" viewBox="0 0 24 18">
            <rect width="24" height="2" rx="1" fill="#333" />
            <rect y="8" width="18" height="2" rx="1" fill="#333" />
            <rect y="16" width="20" height="2" rx="1" fill="#333" />
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white py-4 px-6 shadow-md sm:hidden flex flex-col gap-4">
          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/products" onClick={() => setOpen(false)}>All Products</NavLink>
          <NavLink to="/" onClick={() => setOpen(false)}>Contact</NavLink>
          {user && (
            <NavLink to="/my-orders" onClick={() => setOpen(false)}>My Orders</NavLink>
          )}
          {!user ? (
            <button onClick={() => {
              setOpen(false);
              setShowUserLogin(true);
            }} className="bg-primary text-white py-2 rounded-full">Login</button>
          ) : (
            <button onClick={logout} className="bg-primary text-white py-2 rounded-full">Logout</button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
