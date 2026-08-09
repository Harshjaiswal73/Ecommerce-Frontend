import {Row,Col,Form,FormGroup,Input,Button} from "reactstrap";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify';
function Register(){

    const[firstname,setfirstname] = useState("");
    const[lastname, setlastname] = useState("");
    const[mobileNumber,setmobileNumber] = useState("");
    const[email,setemail] = useState("");
    const[password,setpassword] = useState("");
    const[address,setaddress] = useState("");
    const[city,setcity] = useState("");
    const[state,setstate] = useState("");
    const[pincode,setpincode] = useState("");

    const navigate = useNavigate();

    const handleRegister = async(e)=>{
        e.preventDefault();

        try {
            const response = await axios.post("https://backend-ecommerce-3g3a.onrender.com/api/auth/register",
                {
                    firstname : firstname,
                    lastname : lastname,
                    mobileNumber : mobileNumber,
                    email : email,
                    password : password,
                    address : address,
                    city : city,
                    state : state,
                    pincode : pincode
                }
            )
            console.log("Response",response.data);
            localStorage.setItem("token",response.data);
            // alert("Register successfully");
            toast.success("Registered successfully");
            navigate("/");
        } catch (error) {
            console.log(error);
            const errorMessage = error.response?.data?.message || error.response?.data || "Registration Failed";
            toast.error(errorMessage);
        }
    }
 
return(
    <>
    <Row className="w-100" style={{height:'54vw'}}>
        <Col sm="3"></Col>
            <Col sm="6">
                <div className="new-customer-registration-form-card mt-5" style={{backgroundColor:'red', height:'47vw', borderRadius:'20px'}}>
                <Form onSubmit={handleRegister}>
                     <FormGroup>
                        <Row className="mt-5">
                        <Col sm="1"></Col>
                        <Col sm="5" className="mt-5">
                            <label htmlFor="Fullname">Fullname*</label>
                            <Input className="form-control" placeholder="FirstName" onChange={(e) => setfirstname(e.target.value)}></Input>
                        </Col>
                        <Col sm="5" className="mt-5">
                            <label htmlFor="Fullname"></label>
                            <Input className="form-control" placeholder="LastName" onChange={(e) => setlastname(e.target.value)}></Input><br />
                        </Col>
                        <Col sm="1"></Col>
    </Row>

    <Row>
        <Col sm="1"></Col>
            <Col sm="10">
                    <label htmlFor="address">Address*</label>
                    <Input className="form-control" placeholder="Street Address" onChange={(e)=> setaddress(e.target.value)}></Input><br />
            </Col>
            <Col sm="1"></Col>
    </Row>

    <Row>
            <Col sm="1"></Col>
                <Col sm="5">
                    <label htmlFor="city">City</label>
                    <Input className="form-control" placeholder="City" onChange={(e)=> setcity(e.target.value)}></Input>
                </Col>
                <Col sm="5">
                    <label htmlFor="State">State</label>
                     <Input className="form-control" placeholder="State" onChange={(e)=> setstate(e.target.value)}></Input><br />
                </Col>
            <Col sm="1"></Col>
    </Row>

    <Row>
            <Col sm="1"></Col>
                <Col sm="10">
                    <label htmlFor="pincode">ZipCode/Postal Code</label>
                    <Input className="form-control" placeholder="Postal Code" onChange={(e) => setpincode(e.target.value)}></Input><br />
                </Col>
            <Col sm="1"></Col>
    </Row>

    <Row>
            <Col sm="1"></Col>
                <Col sm="5">
                    <label htmlFor="phone">Phone Number</label>
                    <Input className="form-control" placeholder="Phone Number" onChange={(e)=> setmobileNumber(e.target.value)}></Input>
                </Col>
                <Col sm="5">
                    <label htmlFor="Email">Email</label>
                    <Input className="form-control" placeholder="Email" onChange={(e) => setemail(e.target.value)}></Input><br />
                </Col>
            <Col sm="1"></Col>
    </Row>

    <Row>
            <Col sm="1"></Col>
                <Col sm="10">
                    <label htmlFor="password">Password</label>
                    <Input placeholder="password" type="password" className="form-control" onChange={(e) => setpassword(e.target.value)}></Input><br />
                </Col>
            <Col sm="1"></Col>
    </Row>

    <Row>
            <Col sm="5"></Col>
                <Col sm="2">
                    <Button type="submit" color="primary">Register</Button>
                </Col>
            <Col sm="5"></Col>
    </Row>
                                    
                                    
                    </FormGroup>
                </Form>

        </div>
        </Col>
        <Col sm="3"></Col>
            </Row>
        </>
    )
}
export default Register;
