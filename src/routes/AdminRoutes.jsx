import { Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Navigate } from "react-router-dom";
import AdminLayout from "../pages/admin/components/AdminLayout";
import Dashboard from "../pages/admin/dashboard/Dashboard";
import Orders from "../pages/admin/orders/Orders";
import Add from "../pages/admin/products/Add";
import Product from "../pages/admin/products/Product";
import Customers from "../pages/admin/users/Customers";
import Chart from "../pages/admin/dashboard/Chart";
const AdminRoutes = () =>{

    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if(!token){
        return <Navigate to="/user/login" />;
    }

    if(role!== "ADMIN"){
        return <Navigate to="/" />;
    }
return(
     <>
            <Routes>
                <Route element={<AdminLayout />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/chart" element={<Chart />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/Add" element={<Add />} />
                    <Route path="/Customers" element={<Customers />} />
                    <Route path="/product" element={<Product />} />
                </Route>
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
);

}
export default AdminRoutes;
