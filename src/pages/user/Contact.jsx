import {Row,Col,Form,FormGroup,Input,Button} from "reactstrap";
import contactimg from "../user/userimage/contact.png";
import React from "react";

function Contact() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">

        <div className="col-lg-10">

          <div className="bg-white shadow rounded overflow-hidden">

            <div className="row g-0">

              {/* Left Side */}
              <div className="col-md-5 bg-sky-400 text-white position-relative p-4">

                <div className="h-100 d-flex flex-column justify-content-center align-items-center">

                  <img
                    src={contactimg}
                    alt="contact"
                    className="img-fluid"
                    style={{ maxHeight: "330px" }}
                  />

                  <div className="text-center mt-3">

                    <h2 className="fw-bold leading-tight">
                      get in
                      <br />
                      touch
                    </h2>

                    <div className="mt-4 small">

                      <p>contact@company.ng</p>

                      <p>+234 (456) 805 34</p>

                      <p>
                        20 Prince Hakeem
                        <br />
                        Lekki Phase 1, Lagos
                      </p>

                    </div>

                  </div>

                </div>

              </div>

              {/* Right Side */}

              <div className="col-md-7 p-5">

                <form>

                  <div className="mb-4">

                    <label className="form-label fw-semibold">
                      Fullname
                    </label>

                    <input
                      type="text"
                      className="form-control rounded-0"
                      placeholder="James Doe"
                    />

                  </div>

                  <div className="mb-4">

                    <label className="form-label fw-semibold">
                      Email
                    </label>

                    <input
                      type="email"
                      className="form-control rounded-0"
                      placeholder="james@gmail.com"
                    />

                  </div>

                  <div className="mb-4">

                    <label className="form-label fw-semibold">
                      Message
                    </label>

                    <textarea
                      rows="6"
                      className="form-control rounded-0"
                      placeholder="Type your message"
                    ></textarea>

                  </div>

                </form>

              </div>

            </div>

          </div>

          {/* Search Box */}

          <div className="d-flex justify-content-center mt-5">

            <div
              className="input-group"
              style={{ maxWidth: "520px" }}
            >

              <input
                type="text"
                className="form-control rounded-start-pill"
                placeholder="Search query..."
              />

              <button
                className="btn btn-info text-white px-4 rounded-end-pill"
              >
                Search
              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Contact;