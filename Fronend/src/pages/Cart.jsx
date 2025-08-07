import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { dummyAddresses } from "../assets/assets";

const Cart = () => {
    const [showAddress, setShowAddress] = useState(false);
    const { products, cartItems, currency, removeCartItem, getCartCount, updateCartItem, getCartAmount, navigate } = useAppContext();

    const [cartArray, setCartArray] = useState([]);
    const [addresses, setAddresses] = useState(dummyAddresses);
    const [selectAddress, setSelectedAddress] = useState(dummyAddresses[0]);
    const [paymentOption, setPaymentOption] = useState("COD");

    const getCart = () => {
        let tempArray = [];
        for (const key in cartItems) {
            const product = products.find((item) => item._id === key);
            if (product) {
                product.quantity = cartItems[key];
                tempArray.push(product);
            }
        }
        setCartArray(tempArray);
    };

    const placeOrder = async () => {};

    useEffect(() => {
        if (products.length > 0 && cartItems) {
            getCart();
        }
    }, [products, cartItems]);

    return products.length > 0 && cartItems ? (
        <div className="flex flex-col md:flex-row mt-16 px-4 md:px-8 lg:px-16">
            {/* Left Section - Cart Items */}
            <div className='flex-1 max-w-4xl w-full'>
                <h1 className="text-2xl md:text-3xl font-medium mb-6">
                    Shopping Cart <span className="text-sm text-primary">({getCartCount()} Items)</span>
                </h1>

                <div className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 text-sm md:text-base font-medium pb-3 border-b border-gray-300">
                    <p className="text-left">Product Details</p>
                    <p className="text-center">Subtotal</p>
                    <p className="text-center">Action</p>
                </div>

                {cartArray.map((product, index) => (
                    <div key={index} className="grid grid-cols-[2fr_1fr_1fr] items-center text-gray-600 text-sm md:text-base py-4 border-b">
                        <div className="flex items-center gap-4">
                            <div onClick={() => navigate(`/products/${product.category.toLowerCase()}/${product._id}`)} className="cursor-pointer w-20 h-20 md:w-24 md:h-24 border rounded overflow-hidden">
                                <img src={product.image[0]} alt={product.name} className="object-cover w-full h-full" />
                            </div>
                            <div>
                                <p className="font-medium">{product.name}</p>
                                <p className="text-xs text-gray-400">Weight: {product.weight || "N/A"}</p>
                                <div className='flex items-center mt-1'>
                                    <p className="mr-2 text-sm">Qty:</p>
                                    <select
                                        className='border px-1 py-0.5 rounded text-sm'
                                        onChange={(e) => updateCartItem(product._id, Number(e.target.value))}
                                        value={cartItems[product._id]}
                                    >
                                        {Array(Math.max(9, cartItems[product._id])).fill('').map((_, i) => (
                                            <option key={i} value={i + 1}>{i + 1}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <p className="text-center">{currency}{product.offerPrice * product.quantity}</p>
                        <button onClick={() => removeCartItem(product._id)} className="mx-auto">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="m12.5 7.5-5 5m0-5 5 5m5.833-2.5a8.333 8.333 0 1 1-16.667 0 8.333 8.333 0 0 1 16.667 0" stroke="#FF532E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                ))}

                <button onClick={() => { navigate("/products"); scrollTo(0, 0); }} className="mt-6 text-primary hover:underline text-sm flex items-center gap-2">
                    <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.09 5.5H1M6.143 10 1 5.5 6.143 1" stroke="#615fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Continue Shopping
                </button>
            </div>

            {/* Right Section - Order Summary */}
            <div className="max-w-md w-full mt-10 md:mt-0 md:ml-8 p-5 bg-white border border-gray-300 rounded shadow-sm">
                <h2 className="text-lg md:text-xl font-semibold mb-4">Order Summary</h2>

                <div className="mb-5">
                    <p className="text-sm font-medium">Delivery Address</p>
                    <div className="mt-1 relative text-sm text-gray-600">
                        <p>{selectAddress ? `${selectAddress.street}, ${selectAddress.city}, ${selectAddress.state}, ${selectAddress.country}` : "No address found"}</p>
                        <button onClick={() => setShowAddress(!showAddress)} className="text-primary hover:underline text-sm absolute top-0 right-0">Change</button>
                        {showAddress && (
                            <div className="absolute top-8 left-0 w-full border bg-white z-10 shadow-md rounded">
                                {addresses.map((address, i) => (
                                    <p key={i} onClick={() => { setSelectedAddress(address); setShowAddress(false); }} className="p-2 hover:bg-gray-100 cursor-pointer">
                                        {address.street}, {address.city}, {address.state}, {address.country}
                                    </p>
                                ))}
                                <p onClick={() => navigate("/add-address")} className="p-2 text-center text-primary hover:bg-indigo-50 cursor-pointer">
                                    + Add Address
                                </p>
                            </div>
                        )}
                    </div>

                    <p className="text-sm font-medium mt-4">Payment Method</p>
                    <select onChange={e => setPaymentOption(e.target.value)} className="w-full mt-1 p-2 border border-gray-300 rounded text-sm">
                        <option value="COD">Cash On Delivery</option>
                        <option value="Online">Online Payment</option>
                    </select>
                </div>

                <hr className="my-4" />

                <div className="text-sm text-gray-600 space-y-2">
                    <p className="flex justify-between"><span>Price</span><span>{currency}{getCartAmount()}</span></p>
                    <p className="flex justify-between"><span>Shipping</span><span className="text-green-600">Free</span></p>
                    <p className="flex justify-between"><span>Tax (2%)</span><span>{currency}{(getCartAmount() * 0.02).toFixed(2)}</span></p>
                    <p className="flex justify-between font-semibold text-base mt-3">
                        <span>Total</span><span>{currency}{(getCartAmount() * 1.02).toFixed(2)}</span>
                    </p>
                </div>

                <button onClick={placeOrder} className="w-full mt-6 py-3 bg-primary text-white rounded hover:bg-primary/40 transition">
                    {paymentOption === "COD" ? "Place Order" : "Proceed to Checkout"}
                </button>
            </div>
        </div>
    ) : null;
};

export default Cart;
