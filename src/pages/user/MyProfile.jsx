import React, {useEffect, useState} from "react";
import {Row,Col, Form, FormGroup,Input,Button,Container,Card,CardBody,Label} from "reactstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function MyProfile() {

  const navigate = useNavigate();
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
        const fetchprofile = async () =>{
          try {
              const token = localStorage.getItem("token");

              const response = await axios.get(`http://localhost:8080/userprofile/showprofile`,
              {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
              }
            );
            console.log("profile data:",response.data);
            setProfiles(response.data);
          } catch (error) {
              console.log("Error fetching profile", error);
          }
        }
        fetchprofile();
  },[]);

  return (
    <>
        <Container className="mt-4">
      <Card style={{borderRadius: "20px",overflow: "hidden",border: "none",boxShadow: "0 4px 20px rgba(0,0,0,0.1)"}}>
        
        <div style={{background:"linear-gradient(135deg,#5B4BFF,#8A2BE2)",height: "95px",position: "relative"}}>
          <div style={{position: "absolute",top: "55px",left: "30px",width: "90px",height: "90px",borderRadius: "50%",
              background: "#5B4BFF",border: "4px solid white",display: "flex",justifyContent: "center",alignItems: "center",color: "white",
              fontSize: "28px",fontWeight: "bold"}}>
            👤
          </div>
        </div>
          
        {/* {profiles.map((profile)=>( */}

       
        <CardBody className="p-4">
          
          <div style={{ marginLeft: "110px" }}>
            <h3 className="fw-bold mb-1">{profiles.firstname}</h3>
            <p className="text-muted">
              Manage your account details & address
            </p>
          </div>

          
          <div className="mt-4">
            <h6 style={{color: "#5B4BFF",letterSpacing: "1px",fontWeight: "bold"}}>PERSONAL INFORMATION</h6>

            <Row className="mt-3">
              <Col md={6} className="mb-3">
                <Label>First Name</Label>
                <Input value={profiles.firstname} disabled />
              </Col>

              <Col md={6} className="mb-3">
                <Label>Last Name</Label>
                <Input value={profiles.lastname} disabled />
              </Col>

              <Col md={6} className="mb-3">
                <Label>Email Address</Label>
                <Input value={profiles.email} disabled />
              </Col>

              <Col md={6} className="mb-3">
                <Label>Mobile Number</Label>
                <Input value={profiles.mobileNumber} disabled />
              </Col>

              <Col md={6} className="mb-3">
                <Label>Address</Label>
                <Input value={profiles.address} disabled>
                  {/* <option>India</option> */}
                </Input>
              </Col>
            </Row>
          </div>

          {/* Address */}
          <div className="mt-3">
            <h6 style={{color: "#5B4BFF",letterSpacing: "1px",fontWeight: "bold"}}>DELIVERY ADDRESS</h6>

            <Row className="mt-3">
              <Col md={4} className="mb-3">
                <Label>State</Label>
                <Input value={profiles.state} disabled>
                </Input>
              </Col>

              <Col md={4} className="mb-3">
                <Label>City</Label>
                <Input value={profiles.city} disabled />
              </Col>

              <Col md={4} className="mb-3">
                <Label>Pincode</Label>
                <Input value={profiles.pincode} disabled/>
              </Col>
            </Row>
          </div>

          <hr />

          {/* Buttons */}
          <Row>
            <Col md={3} xs={12} className="mb-2">
              {/* <Button outlinecolor="secondary"className="w-100">Discard Changes</Button> */}
            </Col>

            <Col md={9} xs={12}>
              <Button className="w-100" onClick={() => navigate("/user/update")} style={{background:"linear-gradient(135deg,#5B4BFF,#8A2BE2)",border: "none",height: "45px"}}>
              Edit Profile
              </Button>
            </Col>
          </Row>
        </CardBody>
         {/* ))} */}
      </Card>
    </Container>
    </>
  );
}

export default MyProfile;