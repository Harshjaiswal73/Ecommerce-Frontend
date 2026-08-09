import { useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {toast} from "react-toastify";

function UpdateProfile() {
  const navigate = useNavigate();

  const[formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobileNumber: "",
    address: "",
    city: "",
    state: "",
    pincode: ""
  });

  useEffect(() =>{
    const fetchProfile = async () =>{
      try{
        const token = localStorage.getItem("token");

        const response = await axios.get("https://backend-ecommerce-3g3a.onrender.com/userprofile/showprofile",
          {
            headers:{
              Authorization : `Bearer ${token}`
            }
          }
        );
        console.log(response.data);
        setFormData(response.data);
      }catch(error){
        console.log(error);
        toast.error("Failed to load profile");
      }
    };
    fetchProfile();
  },[]);

  const handleChange = (e) =>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // update api
  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
       const token = localStorage.getItem("token");
       const response = await axios.put("https://backend-ecommerce-3g3a.onrender.com/userprofile/updateprofile",formData,
        {
          headers:{
            Authorization : `Bearer ${token}`
          }
        }
       );
       console.log(response.data);
       toast.success("profile updated Successfully");

       // Navbar me name update
       localStorage.getItem("firstname", response.data.firstname);
    }catch(error){
      console.log(error);
      toast.error("profile update failed");
    }
  };

  return (
    <div className="container-fluid bg-light min-vh-100 py-5">
      <div className="container">

        <div
          className="bg-white shadow rounded-4 p-5 mx-auto"
          style={{ maxWidth: "950px" }}
        >

          <h1 className="fw-bold mb-1">
            Update Profile
          </h1>

          <p className="text-secondary mb-4">
            Manage your account details & address
          </p>

          <form onSubmit={handleSubmit}>

            <h6
              className="fw-bold text-uppercase mb-4"
              style={{
                color: "#4338ca",
                fontSize: "13px",
                letterSpacing: "1px",
              }}
            >
              Personal Information
            </h6>

            <div className="row">

              <div className="col-md-6 mb-4">

                <label className="form-label">
                  First Name
                </label>

                <input
                  type="text"
                  className="form-control rounded-3 p-3"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                />

              </div>

              <div className="col-md-6 mb-4">

                <label className="form-label">
                  Last Name
                </label>

                <input
                  type="text"
                  className="form-control rounded-3 p-3"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                />

              </div>

              <div className="col-md-6 mb-4">

                <label className="form-label">
                  Email Address
                </label>

                <input
                  type="email"
                  className="form-control rounded-3 p-3"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />

              </div>

              <div className="col-md-6 mb-4">

                <label className="form-label">
                  Mobile Number
                </label>

                <input
                  type="text"
                  className="form-control rounded-3 p-3"
                  name="mobilenumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                />

              </div>

              <div className="col-12 mb-4">

                <label className="form-label">
                  Address
                </label>

                <input
                  type="text"
                  className="form-control rounded-3 p-3"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />

              </div>

            </div>

            <h6
              className="fw-bold text-uppercase mb-4 mt-3"
              style={{
                color: "#4338ca",
                fontSize: "13px",
                letterSpacing: "1px",
              }}
            >
              Delivery Address
            </h6>

            <div className="row">

              <div className="col-md-4 mb-4">

                <label className="form-label">
                  State
                </label>

                <input
                  type="text"
                  className="form-control rounded-3 p-3"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                />

              </div>

              <div className="col-md-4 mb-4">

                <label className="form-label">
                  City
                </label>

                <input
                  type="text"
                  className="form-control rounded-3 p-3"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />

              </div>

              <div className="col-md-4 mb-4">

                <label className="form-label">
                  Pincode
                </label>

                <input
                  type="text"
                  className="form-control rounded-3 p-3"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                />

              </div>

            </div>

            <div className="d-flex justify-content-end gap-3 mt-4">

              <button
                type="button"
                className="btn btn-light border px-4"
                onClick={() => navigate("/user/profile")}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="btn px-4 text-white"
                style={{
                  background:
                    "linear-gradient(to right,#4f46e5,#6d28d9)",
                }}
              >
                Save Changes
              </button>

            </div>

          </form>

        </div>

      </div>
    </div>
  );
}

export default UpdateProfile;
