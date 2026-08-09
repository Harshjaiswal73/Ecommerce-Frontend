import {Row,Col,Form,FormGroup,Input,Button} from "reactstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from "axios";
import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
// import { useNavigate } from "react-router-dom";
function Checkout(){

    const[cartItems, setcartItems] = useState([]);
    // const[loading,setLoading] = useState(true);
    const user = cartItems.length > 0 ? cartItems[0].user : null;

    useEffect(()=>{
      const fetchCheckout = async () =>{
        try{
          const token = localStorage.getItem("token");

          const response = await axios.get("https://backend-ecommerce-3g3a.onrender.com/api/cart/checkout",
            {
              headers:{
                Authorization: `Bearer ${token}`
              }
            }
          );
          console.log(response.data);
          setcartItems(response.data);
        }catch(error){
          console.log("checkout Error", error);
        }
      };
      fetchCheckout();
    },[]);

    const subtotal = cartItems.reduce((total, item) =>{
      return total + (item.product.price * item.quantity);
    },0);

    const shipping = 0;
    // const gst = Math.round(subtotal + 0.18);
    const totalAmount = subtotal + shipping;
    const navigate = useNavigate();
    // placeorder
    const handlePlaceOrder = async () =>{
       try {
        const token = localStorage.getItem("token");
        const response = await axios.post("https://backend-ecommerce-3g3a.onrender.com/api/order/place-order",
          {},
          {
            headers:{
              Authorization : `Bearer ${token}`
            }
          }
        );
        console.log(response.data);
        navigate("/user/ordersuccess");
       } catch (error) {
         console.log(error);
         alert("Order Failed");
       }
    }

    return(

        <>
        
            <Row className="w-100">
                <Col sm="1"></Col>
                <Col sm="6">
                   <div className="user-card-section" style={{backgroundColor:"whitesmoke",marginTop:"3vw",borderRadius:"20px",height: "43vw"}}>
                    <h5 className="fw-bold mb-4 p-4">📦 Shipping Address</h5>

                     <Row>
                        <div className="col-md-6 mb-3">
                         <label style={{marginLeft:"1vw"}}>First Name</label>
                         <input type="text"className="form-control"value={user?.firstname || ""} style={{width:"90%",marginLeft:"1vw"}}/>
                        </div>

                        <div className="col-md-6 mb-3">
                         <label style={{marginLeft:"-1vw"}}>Last Name</label>
                         <input type="text"className="form-control"value={user?.lastname || ""} style={{marginLeft:"-1vw"}}/>
                        </div>

                        <div className="col-md-12 mb-3">
                         <label style={{marginLeft:"1vw"}}>Email</label>
                         <input style={{width:"95.5%",marginLeft:"1vw"}} type="email"className="form-control"value={user?.email || ""}/>
                        </div>

                        <div className="col-md-12 mb-3">
                         <label style={{marginLeft:"1vw"}}>Phone</label>
                         <input style={{width:"95.5%",marginLeft:"1vw"}} type="text"className="form-control"value={user?.mobileNumber || ""}/>
                        </div>

                        <div className="col-md-12 mb-3">
                         <label style={{marginLeft:"1vw"}}>Address</label>
                         <textarea style={{width:"95.5%",marginLeft:"1vw"}} className="form-control"rows="3"value={user?.address || ""}></textarea>
                        </div>

                        <div className="col-md-4 mb-3">
                         <label>City</label>
                         <input type="text"className="form-control"value={user?.city || ""}/>
                        </div>

                        <div className="col-md-4 mb-3">
                         <label>State</label>
                         <select className="form-select">
                         <option>Uttar Pradesh</option>
                         </select>
                        </div>

                        <div className="col-md-4 mb-3">
                         <label>Pincode</label>
                         <input type="text"className="form-control"value={user?.pincode || ""}/>
                        </div>

                     </Row>
                     {/* Payment Section */}
                    {/* <Row>
                        <Col sm="1"></Col>
                        <Col sm="6">
                        
                            
                        </Col>
                        <Col sm="1"></Col>
                    </Row> */}

                   </div>
                </Col>
                <Col sm="4">
                      <div className="order-section-card" style={{backgroundColor:"whitesmoke",height: "50vw",marginTop:"3vw",borderRadius:"20px"}}>
                           <div className="card-body p-4">
                            <h5 className="fw-bold mb-4">🛒 Order Summary</h5>
                                {
                                  cartItems.map((item)=>(
                        <div key={item.id}className="d-flex align-items-center mb-3">
                            <img src={item.product.imageUrl}alt=""className="rounded"
                              width="60"height="60"/>

                            <div className="ms-3 flex-grow-1">
                              <h6 className="mb-1">{item.product.name}</h6>

                              <small>Qty : {item.quantity}</small>
                            </div>

                            <strong>₹{item.product.price * item.quantity}</strong>
                        </div>
                                  ))
                                }
                                <hr />
                                <div className="d-flex justify-content-between">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>

              <div className="d-flex justify-content-between">
                <span>Shipping</span>
                <span className="text-success">{shipping === 0 ? "Free" : `₹${shipping}`}</span>
              </div>

               <div className="d-flex justify-content-between">
                {/* <span>GST(18%)</span> */}
                {/* <span>₹{gst}</span> */}
              </div>

              <hr />

              <div className="d-flex justify-content-between fw-bold fs-5">
                <span>Total</span>
                <span>₹{totalAmount}</span>
              </div>
                        <button
    onClick={handlePlaceOrder}
    className="btn btn-primary w-100 mt-4 py-3 rounded-3"
>
    Place Order
</button>

                           </div>

                      </div>
                </Col>
                <Col sm="1"></Col>
            </Row>
            {/* <Row className="w-100">
                <Col sm="1"></Col>
                <Col sm="6">
                    <div className="card border-0 shadow-sm rounded-4" style={{backgroundColor:"whitesmoke",marginTop:"-5vw"}}>
            <div className="card-body p-4">

              <h5 className="fw-bold mb-4">💳 Payment</h5>

              <div className="mb-3">
                <label>Name on Card</label>
                <input type="text"className="form-control"placeholder="Harsh Jaiswal"/>
              </div>

              <div className="mb-3">
                <label>Card Number</label>
                <input type="text"className="form-control"placeholder="1234 5678 9012 3456"/>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <label>Expiry</label>
                  <input type="text"className="form-control"placeholder="MM/YY"/>
                </div>

                <div className="col-md-6">
                  <label>CVV</label>
                  <input type="password"className="form-control"placeholder="***"/>
                </div>

                <div className="mb-3">
                    <label>Payment Method</label><br />
                    <input type="checkbox" name="" id="" />
                    Cash On Delivery
                </div>

              </div>

            </div>
          </div>

         </div> 

                            
                        </Col>
                        <Col sm="1"></Col>
                    </Row> */}

        </>

    )

}
export default Checkout;
