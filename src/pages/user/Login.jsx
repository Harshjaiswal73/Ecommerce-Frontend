import {Row,Col, Form, FormGroup,Input,Button} from "reactstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify';
function Login (){

    // call login api 
    const [mobileNumber, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const role = localStorage.getItem("role");

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8080/api/auth/login",
                {
                    mobileNumber: mobileNumber,
                    password: password
                }
            );
            console.log("Response:",response.data);
            // token save karna hai
            localStorage.setItem("token",response.data.token);
            localStorage.setItem("userId",response.data.userId);
            localStorage.setItem("firstname",response.data.firstname);
            localStorage.setItem("role",response.data.role);

            if(role !== "ADMIN"){
                navigate("/login");
            }

            if(response.data.role === "ADMIN"){
                navigate("/admin");
            }else{
                navigate("/");
            }
            toast.success("Login Successfully");
        } catch (error) {
            console.log(error);
            const errorMessage = error.response?.data?.message || error.response?.data || "Login Failed";
            toast.error(errorMessage);
        }

    };

    return(

        <>
            <Row className="w-100">

                <Col sm="4"></Col>
                <Col sm="4" className="mt-5">
                  <div className="login-card">

                    <div className="heading-title text-center fw-bold fs-3">Welcome to E-commerce</div>
                    <div className="paragraph-section text-center fw-bold">Sign in to continue</div>
                    
                    <Form className="mt-5" onSubmit={handleLogin} >
                        <FormGroup>
                            <label htmlFor="forNumber">Mobile Number</label>
                            <Input type="number" placeholder="Your Number" className="form-control"
                            onChange={(e) => setNumber(e.target.value)}/><br />

                            <label htmlFor="forPassword">Password</label>
                            <Input type="password" placeholder="Your Password" className="form-control"
                            onChange={(e) => setPassword(e.target.value)}/> <br />
                            
                            <Button className="w-100" type="submit" color="primary">Sign in</Button><br />

                            <div className="login mt-3">
                                <Button className="w-100" color="light"><i class="bi bi-google"></i> Login With Google</Button>
                            </div>

                             <div className="login mt-3">
                                <Button className="w-100" color="light"><i class="bi bi-facebook"></i> Login With Facebook</Button>
                            </div><br />

                            <div className="hero-section-links text-center">
                                <a href="/user/forgetpassword" className="text-center text-blue text-decoration-none">Forget Password</a>
                            </div>

                            <div className="hero-section-another-links">
                                <p className="text-center mt-2">Don't have an account? <a className="text-blue text-decoration-none" href="/user/register">Register</a></p>
                            </div>

                        </FormGroup>
                    </Form>
                  </div>
                </Col>
                <Col sm="4"></Col>
            </Row>
        </>

    )
}
export default Login;