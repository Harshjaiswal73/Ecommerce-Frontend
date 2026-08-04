import React, { useEffect,useState } from "react";
import './Home.css';
import {Row,Col,Card,CardBody,CardTitle,CardSubtitle} from "reactstrap";

import banner from "../assets/images/pexels-webdonut-19090.jpg";
import middel from "../assets/images/features.png";

import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import { Star } from "lucide-react";
import { useSearchParams } from "react-router-dom";
function Home() {

  // product ko home page per show kerne ke liye api call hua hai
  const[products,setproducts] = useState([]);
  const[searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  // useEffect(() => {
  //   axios.get("http://localhost:8080/api/auth/products")
  //   .then(res =>{
  //     console.log("data",res.data);
  //     setproducts(res.data);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
  // },[]);
  useEffect(() => {
  let url = "http://localhost:8080/api/auth/products";

  if (keyword) {
    url = `http://localhost:8080/api/auth/search?keyword=${keyword}`;
  }

  axios
    .get(url)
    .then((res) => {
      console.log(res.data);
      setproducts(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}, [keyword]);
  return (
    <>
      {/* Hero Section */}
      <div className="hero-section">
        <img src={banner} alt="banner" className="hero-img" />
        <div className="hero-content">
          <h1>Super Flash Sale</h1>
          <h2>50% Off</h2>
        </div>
      </div>
      {/* hero section end */}

      <div className="heading-section">
          <h5 className="text-center mt-5">BEST SELLER</h5>
      </div>
{/* Product Card Section */}
<div className="container mt-5">
  <Row className="g-4 justify-content-center">
    {Array.isArray(products) &&
      products.map((p) => (
        <Col
          key={p.id}
          xs="12"
          sm="6"
          md="4"
          lg="3"
          xl="2"
          className="d-flex"
        >
          <Link
            to={`/product/${p.id}`}
            className="text-decoration-none w-100"
          >
            <Card
              className="shadow-sm border-0 rounded-4 h-100 overflow-hidden"
              style={{
                transition: "0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 25px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 .125rem .25rem rgba(0,0,0,.075)";
              }}
            >
              <div
                className="d-flex justify-content-center align-items-center bg-light"
                style={{
                  height: "220px",
                }}
              >
                <img
                  src={p.imageUrl}
                  alt={p.name}
                  className="img-fluid"
                  style={{
                    maxHeight: "180px",
                    maxWidth: "90%",
                    objectFit: "contain",
                  }}
                />
              </div>

              <CardBody className="text-center">

                <CardTitle
                  tag="h6"
                  className="fw-semibold text-dark"
                  style={{
                    minHeight: "48px",
                  }}
                >
                  {p.name}
                </CardTitle>
                   <div className="flex items-center gap-1" style={{justifyContent:'center'}}>
      <Star size={18} fill="#facc15" color="#facc15" />
      <Star size={18} fill="#facc15" color="#facc15" />
      <Star size={18} fill="#facc15" color="#facc15" />
      <Star size={18} fill="#facc15" color="#facc15" />
      <Star size={18} fill="none" color="#9ca3af" />
    </div>
                <CardSubtitle className="text-primary fw-bold fs-5 mt-2">
                  ₹{p.price}
                </CardSubtitle>

              </CardBody>
            </Card>
          </Link>
        </Col>
      ))}
  </Row>
</div>
       
      {/* product card section end  */}

 <div className="container-fluid d-flex align-items-center"
      style={{
        background: "linear-gradient(90deg, #4facfe, #00c6ff)",
        minHeight: "300px",marginTop:"4vw"
      }}
    >
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT TEXT */}
          <div className="col-md-6 text-white">
            <h2 className="fw-bold">
              Adidas Men Running <br /> Sneakers
            </h2>

            <p className="mt-3">
              Performance and design. Taken right to the edge.
            </p>

            <button className="btn btn-light mt-2">
              SHOP NOW
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-md-6 text-center">
            <img
              src={middel}
              alt="shoe"
              className="img-fluid"
              
            />
          </div>

        </div>
      </div>
    </div>

    {/* end middle banner */}

      <div className="container text-center mt-5">

      {/* TOP FEATURES */}
      <div className="row mb-5">

        <div className="col-md-4">
          <i className="bi bi-truck fs-1 text-danger"></i>
          <h6 className="fw-bold mt-3">FREE SHIPPING</h6>
          <p className="text-muted small">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        <div className="col-md-4">
          <i className="bi bi-currency-dollar fs-1 text-danger"></i>
          <h6 className="fw-bold mt-3">100% REFUND</h6>
          <p className="text-muted small">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        <div className="col-md-4">
          <i className="bi bi-headset fs-1 text-danger"></i>
          <h6 className="fw-bold mt-3">SUPPORT 24/7</h6>
          <p className="text-muted small">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

      </div>

      {/* FEATURED PRODUCTS */}
      <h5 className="fw-bold mb-4">FEATURED PRODUCTS</h5>

      <div className="row mb-5">

        {[1, 2, 3].map((item) => (
          <div className="col-md-4" key={item}>
            <div className="card border-0 shadow-sm p-3">

              <img
                src={banner}
                alt="product"
                className="mx-auto"
                style={{ width: "120px" }}
              />

              <h6 className="mt-3">Blue Suede Nike Sneakers</h6>

              {/* Rating */}
              <div className="text-warning">
                ★★★★☆
              </div>

              {/* Price */}
              <div>
                <span className="text-danger fw-bold">$499</span>{" "}
                <span className="text-muted text-decoration-line-through small">
                  $599
                </span>
              </div>

            </div>
          </div>
        ))}

      </div>

      {/* SEARCH BAR */}
      <div className="row justify-content-center mb-5">
        <div className="col-md-6">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search query..."
            />
            <button className="btn btn-primary">Search</button>
          </div>
        </div>
      </div>

    </div>
    </>
  );
}

export default Home;