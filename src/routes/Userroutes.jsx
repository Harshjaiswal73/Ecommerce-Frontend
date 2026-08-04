import Home from "../components/Home";
import Login from "../pages/user/Login";
import Contact from "../pages/user/Contact";
import Register from "../pages/user/Register";
import Product from "../pages/user/Product";
import Productcart from "../pages/user/Productcart";
import MyProfile from "../pages/user/MyProfile";
import MyOrders from "../pages/user/MyOrders";
import Checkout from "../pages/user/Chekout";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route, Navigate } from "react-router-dom";
import OrderSuccess from "../pages/user/OrderSuccess";
import UpdateProfile from "../pages/user/UpdateProfile";
import ForgetPassword from "../pages/user/ForgetPassword";
function Userroutes(){

    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    return(
        <>
            <Routes>
                <Route path="/" element={<Home />}/> 
                <Route path="/user/login" element={<Login />}/>
                <Route path="/user/register" element={<Register/>}></Route>
                <Route path="/user/contact" element={<Contact />}></Route>
                <Route path="/product/:id" element={<Product/>} />
                <Route path="/user/ordersuccess" element={<OrderSuccess/>} />
                <Route path="/user/forgetpassword" element={<ForgetPassword/>} />

                

                {/* <Route path="/productcart/" element={<Productcart/>}></Route>
                <Route path="/user/checkout" element={<Checkout/>}></Route>
                <Route path="/user/profile" element={<MyProfile/>}></Route>
                <Route path="/user/myorders" element={<MyOrders/>}></Route>         */}
                 <Route
                    path="/user/productcart"
                    element={
                        token && role === "USER"
                            ? <Productcart />
                            : <Navigate to="/user/login" />
                    }
                />

                <Route
                    path="/user/checkout"
                    element={
                        token && role === "USER"
                            ? <Checkout />
                            : <Navigate to="/user/login" />
                    }
                />
                {/* <Route
                    path="/user/orderSuccess"
                    element={
                        token && role === "USER"
                            ? <OrderSuccess />
                            : <Navigate to="/user/login" />
                    }
                /> */}

                <Route
                    path="/user/profile"
                    element={
                        token && role === "USER"
                            ? <MyProfile />
                            : <Navigate to="/user/login" />
                    }
                />
                 <Route
                    path="/user/update"
                    element={
                        token && role === "USER"
                            ? <UpdateProfile />
                            : <Navigate to="/user/login" />
                    }
                />

                <Route
                    path="/user/myorders"
                    element={
                        token && role === "USER"
                            ? <MyOrders />
                            : <Navigate to="/user/login" />
                    }
                />
            </Routes>
            
            <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
        />
        </>
    )

}
export default Userroutes;