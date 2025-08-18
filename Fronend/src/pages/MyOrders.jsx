import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext';



const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { currency, axios, user } = useAppContext();

  const fetchMyOrders = async () => {
    try {
      const { data } = await axios.get('/api/order/user');

      if (data.success) {
        setMyOrders(data.orders)
      }
    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    if (user) {
      fetchMyOrders();
    }
  }, [user])

  return (
    <div className="mt-16 pb-16 px-4 md:px-8 max-w-screen-xl mx-auto">
      <div className="flex flex-col items-start md:items-end w-full md:w-max mb-8">
        <p className="text-2xl font-medium uppercase mb-1">My Orders</p>
        <div className="w-16 h-0.5 bg-primary rounded-full"></div>
      </div>

      <div className="flex flex-col gap-10">
        {myOrders.map((order) => (
          <div
            key={order._id}
            className="border border-gray-300 rounded-lg p-4 sm:p-6 w-full mx-auto"
          >
            <p className="flex flex-col sm:flex-row sm:items-center sm:gap-6 text-sm sm:text-base mb-6 flex-wrap">
              <span className="truncate max-w-xs">OrderId: {order._id}</span>
              <span>
  Payment: {order.paymentType} 
  {order.paymentType === "Online" && (
    <span className="ml-1">
      ({order.isPaid ? "Paid" : "Pending"})
    </span>
  )}
</span>

              <span>Total Amount: {currency}{order.amount}</span>
            </p>

            <div className="flex flex-col divide-y divide-gray-300">
              {order.items.map((item, idx) => (
                <div
                  key={item.product._id || idx}
                  className="flex flex-col md:flex-row md:items-center justify-between py-4 md:py-5 gap-4 md:gap-16"
                >
                  <div className="flex items-center w-full md:w-auto gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                      <img
                        src={item.product.image[0]}
                        alt={item.product.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                    </div>
                    <div className="ml-0 md:ml-4 min-w-0">
                      <h2 className="text-lg sm:text-xl font-medium text-gray-800 truncate">{item.product.name}</h2>
                      <p className="text-sm truncate">Category: {item.product.category}</p>
                    </div>
                  </div>

                  <div className="text-primary text-sm sm:text-lg font-medium flex flex-col gap-1 whitespace-nowrap">
                    <p>Quantity: {item.quantity || "1"}</p>
                    <p>Status: {order.status}</p>
                    <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
                  </div>

                  <p className="text-primary text-sm sm:text-lg font-medium whitespace-nowrap">
                    Amount: {currency}{item.product.offerPrice * (item.quantity || 1)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyOrders;
