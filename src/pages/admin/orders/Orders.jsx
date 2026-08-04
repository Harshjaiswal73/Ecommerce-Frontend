import React from "react";
import axios from "axios";
import { useEffect,useState } from "react";
import { toast } from "react-toastify";
const Orders = () => {

  const getStatusColor = (status) => {
  switch (status) {
    case "PENDING":
      return "bg-yellow-100 text-yellow-700";

    case "CONFIRMED":
      return "bg-blue-100 text-blue-700";

    case "SHIPPED":
      return "bg-purple-100 text-purple-700";

    case "OUT_FOR_DELIVERY":
      return "bg-orange-100 text-orange-700";

    case "DELIVERED":
      return "bg-green-100 text-green-700";

    case "CANCELLED":
      return "bg-red-100 text-red-700";

    default:
      return "bg-gray-100 text-gray-700";
  }
};

 const [orders, setOrders] = useState([]);

const fetchOrders = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8080/admin/pannel/AllOrders",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    console.log(response.data);
    setOrders(response.data);

  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  fetchOrders();
}, []);


  // const[selectedOrderId, setSelectedOrderId] = useState(null);
  // const[status, setStatus] = useState("");

  const updateOrderStatus = async (orderId, status) =>{
    const token = localStorage.getItem("token");

    try {
       const response = await axios.put(`http://localhost:8080/admin/pannel/orderStatusUpdate/${orderId}`,
        {
          orderStatus : status
        },
        {
          headers:{
            Authorization : `Bearer ${token}`
          }
        }
       );
       toast.success(response.data);
       fetchOrders(); // order dubara load kar lo
    } catch (error) {
      console.log(error);
      toast.error("Status Update Failed");
    }
  }

  return (
    <div className="p-6 bg-white-50 min-h-screen">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        <div>
          <h1 className="text-3xl font-bold">Orders</h1>
          <p className="text-gray-500 text-sm">
            Manage and track all customer orders.
          </p>
        </div>

        <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium">
          + New Order
        </button>
      </div>

      {/* Filters */}
      <div className="mt-6 flex flex-wrap gap-2">
        <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm">
          All
        </button>

        <button className="px-4 py-2 bg-white border rounded-lg text-sm">
          Completed
        </button>

        <button className="px-4 py-2 bg-white border rounded-lg text-sm">
          Processing
        </button>

        <button className="px-4 py-2 bg-white border rounded-lg text-sm">
          Pending
        </button>

        <button className="px-4 py-2 bg-white border rounded-lg text-sm">
          Cancelled
        </button>
      </div>

      {/* Search + Actions */}
      <div className="mt-4 flex flex-col md:flex-row justify-between gap-4">

        <input
          type="text"
          placeholder="Search orders..."
          className="border rounded-lg px-4 py-2 w-full md:w-80"
        />

        <div className="flex gap-2">
          <button className="border px-4 py-2 rounded-lg text-sm">
            Columns
          </button>

          <button className="border px-4 py-2 rounded-lg text-sm">
            Export
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border mt-6 overflow-x-auto">

        <table className="w-full min-w-[1000px]">

          <thead className="bg-gray-50 border-b">
            <tr className="text-left text-sm text-gray-600">

              <th className="p-4">Order</th>
              <th className="p-4">Customer</th>
              <th className="p-4">Product</th>
              <th className="p-4">Status</th>
              <th className="p-4">Date</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Operation</th>

            </tr>
          </thead>

          <tbody>

            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-4 font-medium">
                  {order.orderId}
                </td>

                <td className="p-4">
                  <div>
                    <p className="font-medium">
                      {order.userEmail}
                    </p>

                    <p className="text-xs text-gray-500">
                      {/* {order.userEmail} */}
                    </p>
                  </div>
                </td>

                <td className="p-4">
                  {order.productNames}
                </td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      order.status
                    )}`}
                  >
                    {order.status}
                  </span>
                </td>

                <td className="p-4">
                  {/* {order.orderDate} */}
                  {new Date(order.orderDate).toLocaleString()}
                </td>

                <td className="p-4 font-semibold">
                  {order.totalAmount}
                </td>

<td className="p-4">

  <select
    className="form-select"
    value={order.status}
    onChange={(e) => updateOrderStatus(order.orderId, e.target.value)}
  >
    <option value="PENDING">Pending</option>
    <option value="CONFIRMED">Confirmed</option>
    <option value="SHIPPED">Shipped</option>
    <option value="OUT_FOR_DELIVERY">Out For Delivery</option>
    <option value="DELIVERED">Delivered</option>
    <option value="CANCELLED">Cancelled</option>
  </select>

</td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

      {/* Pagination */}
      {/* <div className="flex flex-col md:flex-row justify-between items-center mt-5 gap-3">

        <p className="text-sm text-gray-500">
          Showing 1-10 of 20 results
        </p>

        <div className="flex items-center gap-2">

          <button className="border px-3 py-1 rounded">
            Previous
          </button>

          <button className="bg-black text-white px-3 py-1 rounded">
            1
          </button>

          <button className="border px-3 py-1 rounded">
            2
          </button>

          <button className="border px-3 py-1 rounded">
            Next
          </button>

        </div>
      </div> */}

    </div>
  );
};

export default Orders;