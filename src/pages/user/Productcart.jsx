import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Productcart() {

    const [cart, setcart] = useState([]);

    useEffect(() => {
        // if(! userId) return
        const fetchcart = async () => {
            try {
                const token = localStorage.getItem("token");
                const userId = localStorage.getItem("userId");

                console.log("UserId:", userId);

                const response = await axios.get(
                    `http://localhost:8080/api/cart/get-cart-product/${userId}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                console.log("Cart Data:", response.data);

                setcart(response.data);

            } catch (err) {
                console.log("Error fetching cart", err);
            }
        };

        fetchcart(); 

    }, []);
     
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const shipping = 20;
  const total = subtotal + shipping;


    return (
        <div className="container mt-5">
      <div className="row">

        
        <div className="col-md-8">

          
          <div className="d-flex justify-content-between fw-bold border-bottom pb-2 mb-3">
            <span>PRODUCT</span>
            <span>PRICE</span>
            <span>QTY</span>
            <span>UNIT PRICE</span>
          </div>

          
          {cart.map((item, index) => (
            <div
              key={index}
              className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-3"
            >
            
              {/* <button className="btn btn-link text-danger">✖</button> */}

              {/* Product */}
              <div className="d-flex align-items-center gap-3">
                <img
                  src={item.imageUrl}   
                  alt="product"
                  width="60"
                />
                <span>{item.productName}</span>
              </div>

             
              <span>${item.price * item.quantity}</span>

             
              <div className="d-flex align-items-center gap-2">
                <button className="btn btn-outline-secondary btn-sm">-</button>
                <span>{item.quantity}</span>
                <button className="btn btn-outline-secondary btn-sm">+</button>
              </div>

             
              <span>${item.price}</span>
            </div>
          ))}

        </div>

        {/* RIGHT SIDE */}
        <div className="col-md-4">

          {/* Coupon */}
          {/* <div className="input-group mb-3">
            <input type="text"className="form-control"placeholder="Voucher code"/>
            <button className="btn btn-primary">Redeem</button>
          </div> */}

         
          <div className="card p-3 shadow-sm">

            <div className="d-flex justify-content-between mb-2">
              <span>Subtotal</span>
              <span>${subtotal}</span>
            </div>

            <div className="d-flex justify-content-between mb-2">
              <span>Shipping fee</span>
              <span>${shipping}</span>
            </div>

            <div className="d-flex justify-content-between mb-3">
              <span>Coupon</span>
              <span>No</span>
            </div>

            <h5 className="d-flex justify-content-between">
              TOTAL <span>${total}</span>
            </h5>

            <button className="btn btn-primary w-100 mt-3">
              <Link to="/user/checkout" className="nav-link">Checkout</Link>
            </button>

          </div>
        </div>

      </div>
    </div>
    );
}

export default Productcart;