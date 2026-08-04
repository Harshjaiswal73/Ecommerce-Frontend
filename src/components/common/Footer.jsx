import React from "react"
import {Row,Container} from "reactstrap";
import "./footer.css";
import payment from "../common/image/image.png";
function Footer(){
    return(
        <footer className="bg-primary-subtle pt-5 pb-3 mt-5">
      <div className="container">

        {/* TOP SECTION */}
        <div className="row mb-4">

          {/* Logo + About */}
          <div className="col-md-4">
            <h5 className="fw-bold">E-Comm</h5>
            <p className="text-muted small">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem ipsum has been the industry's standard dummy text.
            </p>
          </div>

          {/* Follow Us */}
          <div className="col-md-4">
            <h6 className="fw-bold">Follow Us</h6>
            <p className="text-muted small">
              Since the 1500s, when an unknown printer took a galley of type and scrambled.
            </p>
            <div className="d-flex gap-3">
              <i className="bi bi-facebook"></i>
              <i className="bi bi-twitter"></i>
            </div>
          </div>

          {/* Contact */}
          <div className="col-md-4">
            <h6 className="fw-bold">Contact Us</h6>
            <p className="text-muted small">
              E-Comm, 4578 <br />
              Marmora Road, <br />
              Glasgow D04 89GR
            </p>
          </div>

        </div>

        {/* MIDDLE LINKS */}
        <div className="row mb-4">

          <div className="col-md-3">
            <h6 className="fw-bold">Information</h6>
            <ul className="list-unstyled text-muted small">
              <li>About Us</li>
              <li>Information</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div className="col-md-3">
            <h6 className="fw-bold">Service</h6>
            <ul className="list-unstyled text-muted small">
              <li>About Us</li>
              <li>Information</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div className="col-md-3">
            <h6 className="fw-bold">My Account</h6>
            <ul className="list-unstyled text-muted small">
              <li>About Us</li>
              <li>Information</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div className="col-md-3">
            <h6 className="fw-bold">Our Offers</h6>
            <ul className="list-unstyled text-muted small">
              <li>About Us</li>
              <li>Information</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="d-flex justify-content-between align-items-center border-top pt-3">

          <p className="text-muted small mb-0">
            © 2026 E-commerce theme
          </p>

          <div className="d-flex gap-2">
             <img  src={payment} alt="" height={30} />
          </div>

        </div>

      </div>
    </footer>
    )
}
export default Footer