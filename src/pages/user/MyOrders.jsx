import React, { useEffect, useState } from "react";
import axios from "axios";
function MyOrders(){

  const[myorder, setmyorders] = useState([]);
  useEffect(() =>{
    const fetchorder = async () =>{
       try{
          const token = localStorage.getItem("token");
          // const useId = localStorage.getItem("userId");
          const response = await axios.get("http://localhost:8080/api/order/myorders",
            {
              headers:{
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log(response.data);
          setmyorders(response.data);
       }catch(err){
         console.log("Error fetching cart",err);
       }
    };
    fetchorder();
  },[]);

  return (
    <div className="max-w-6xl mx-auto p-4">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-4xl font-bold">
            My Orders
            <span className="text-gray-400 text-2xl font-normal ml-3">
              {/* 5 orders */}
            </span>
          </h1>
        </div>

        {/* <div className="w-full md:w-72">
          <input
            type="text"
            placeholder="Search orders..."
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
          />
        </div> */}
      </div>

      {/* Order Card */}
      {myorder.map((item)=>(
      <div className="bg-white rounded-2xl border overflow-hidden shadow-sm" style={{height:"30vw"}}>

        {/* Green Top Border */}
        <div className="h-1 bg-green-600"></div>

        <div className="p-5">

          {/* Order Info */}
          <div className="flex flex-col lg:flex-row justify-between gap-5">

            <div>
              <p className="text-gray-400 font-semibold">
                #{item.orderId}
              </p>

              <p className="text-gray-600 text-lg">
                Placed on Jun 10, 2025
              </p>
            </div>

            <div>
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium text-sm">
                ● {item.orderStatus}
              </span>
            </div>
          </div>

          {/* Product Section */}
          <div className="mt-6 flex flex-col lg:flex-row justify-between items-center gap-5">

            <div className="flex items-center gap-3">

              <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-100 rounded-xl flex items-center justify-center text-4xl">
                <img src={item.productImage} alt="" />
              </div>

              {/* <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-100 rounded-xl flex items-center justify-center text-4xl">
                👕
              </div> */}

              <div>
                <h3 className="font-bold text-lg">
                  {item.productName}
                </h3>

                <p className="text-gray-500">
                  3 items · Standard delivery
                </p>
              </div>
            </div>

            <div className="text-4xl font-bold">
              ₹{item.totalAmount}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t bg-gray-50 px-5 py-4">

          <div className="flex flex-col lg:flex-row justify-between gap-5">

            <div className="flex flex-wrap gap-10">

              <div>
                <p className="text-gray-400 text-sm font-semibold">
                  DELIVERED
                </p>

                <p className="font-bold">
                  Jun 12, 2025
                </p>
              </div>

              <div>
                <p className="text-gray-400 text-sm font-semibold">
                  PAYMENT
                </p>

                <p className="font-bold">
                  UPI · {item.paymentStatus}
                </p>
              </div>

            </div>

            <div className="flex gap-3">

              <button className="border px-5 py-2 rounded-lg font-medium hover:bg-gray-100">
                Rate
              </button>

              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg font-medium">
                Reorder
              </button>

            </div>

          </div>
        </div>

      </div>
))}
    </div>
  );
};

export default MyOrders;