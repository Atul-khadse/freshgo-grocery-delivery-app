import React, { useEffect } from 'react'
import { Navigate, NavLink } from 'react-router-dom'
import logo from '../assets/fresh_go_logo.png'
import profile from '../assets/profileicon.jpeg'
import { useAppContext } from '../context/AppContext.jsx'

const Navbar = () => {
    const [open, setOpen] = React.useState(false)
    const { user, setUser, setShowUserLogin,navigate,searchQuery, setSearchQuery } = useAppContext();

    const logout = async () => {
        setUser(null);
        navigate('/');
    }


useEffect(() => {
    if(searchQuery.length > 0){
        navigate('/products');
    }
}, [searchQuery])





    return (
        <div>
            <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">

                <NavLink to='/' onClick={() => setOpen(false)}>
                    <img className=' w-50 h-auto object-contain' src={logo} alt="logo" />
                </NavLink>

                {/* Desktop Menu */}
                <div className="hidden sm:flex items-center gap-8">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/products'>All Product</NavLink>
                    <NavLink to='/'>Contact</NavLink>


                    <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                        <input onChange={(e) => setSearchQuery(e.target.value)} className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.836 10.615 15 14.695" stroke="#7A7B7D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                            <path clipRule="evenodd" d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783" stroke="#7A7B7D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                    <div onClick={() => navigate('/cart')} className="relative cursor-pointer">
                        <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0" stroke="#615fff" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">3</button>
                    </div>

                {!user ?(    <button onClick={() => setShowUserLogin(true)} className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary transition text-white rounded-full">
                        Login
                    </button>
                    ): (
                        <div className='relative group'>
                            <img className='h-auto w-10 ' src={profile} alt="profile" />
                            <ul className='hidden group-hover:block absolute top-10 right-0 bg-white shadow-md rounded-md py-2.5 w-30 text-sm z-40'>
                                <li onClick={() => navigate("my-orders")} className='p-1.5 pl-3 hover:bg-primary/10 cursor-pointer'>My Orders</li>
                                <li onClick={logout} className='p-1.5 pl-3 hover:bg-primary/10 cursor-pointer'>Logout</li>
                            </ul>

                        </div>
                    )}
                </div>

                <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
                    {/* Menu Icon SVG */}
                    <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="21" height="1.5" rx=".75" fill="#426287" />
                        <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
                        <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
                    </svg>
                </button>

                {/* Mobile Menu */}
                {open && (
                <div className={`${open ? 'flex' : 'hidden'} absolute top-[64px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
                    <NavLink to='/' onClick={() => setOpen(false)}>Home</NavLink>
                    <NavLink to='/products' onClick={() => setOpen(false)}>All Product</NavLink>
                    {user &&
                        <NavLink to='/products' onClick={() => setOpen(false)}>My Orders</NavLink>
                    }
                    <NavLink to='/' onClick={() => setOpen(false)}>Contact</NavLink>
                    {!user ? (
                        <button onClick={() => {
                            setOpen(false);
                            setShowUserLogin(true);
                        }
                        } className="cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-primary transition text-white rounded-full text-sm">
                            Login
                        </button>
                    ) : (
                        <button onClick={logout} className="cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-primary transition text-white rounded-full text-sm">
                            Logout
                        </button>
                    )}

                </div>
                )}

            </nav>
        </div>
    )
}

export default Navbar
