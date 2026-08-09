import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
function Add() {
  // Product states
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [wrongprice, setWrongPrice] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState(null);

  // Handle Product Upload
  const handleproduct = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("file", imageUrl);
      formData.append("name", name);
      formData.append("description", description);
      formData.append("brand", brand);
      formData.append("category", category);
      formData.append("wrongprice", wrongprice);
      formData.append("price", price);

      const response = await axios.post(
        "https://backend-ecommerce-3g3a.onrender.com/api/upload/addproduct",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Response :", response.data);
      // alert("Product Added Successfully");
      toast.success("Product Added successfully");

      // Reset Form
      // setName("");
      // setDescription("");
      // setBrand("");
      // setCategory("");
      // setWrongPrice("");
      // setPrice("");
      // setImageUrl(null);
    } catch (error) {
      console.error(error);
      const errorMessage = error.response?.data?.message || error.response?.data || "Product upload Failed";
      // alert("Failed to add product");
      toast.error(errorMessage);
    }
  };

  return (
    <div className="container-fluid py-4 bg-white min-vh-100">
      <form onSubmit={handleproduct}>
        <div className="row g-4">

          {/* Left Card */}
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-body p-4">

                <h3 className="fw-bold">Product Information</h3>

                <p className="text-secondary mb-4">
                  Enter the basic details for the new product.
                </p>

                {/* Product Name */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Product Name
                  </label>

                  <input
                    type="text"
                    className="form-control rounded-3 py-3"
                    placeholder="Product name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                {/* Brand */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Brand
                  </label>

                  <input
                    type="text"
                    className="form-control rounded-3 py-3"
                    placeholder="Brand"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    required
                  />
                </div>

                {/* Description */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Description
                  </label>

                  <textarea
                    rows="4"
                    className="form-control rounded-3"
                    placeholder="Product description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  ></textarea>
                </div>

                {/* Prices */}
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label className="form-label fw-semibold">
                      Price (₹)
                    </label>

                    <input
                      type="number"
                      className="form-control rounded-3 py-3"
                      placeholder="0"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-4">
                    <label className="form-label fw-semibold">
                      Wrong Price
                    </label>

                    <input
                      type="number"
                      className="form-control rounded-3 py-3"
                      placeholder="0"
                      value={wrongprice}
                      onChange={(e) => setWrongPrice(e.target.value)}
                    />
                  </div>
                </div>

                {/* Image */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Product Image
                  </label>

                  <input
                    type="file"
                    className="form-control rounded-3 py-3"
                    accept="image/*"
                    onChange={(e) => setImageUrl(e.target.files[0])}
                    required
                  />
                </div>

              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="col-lg-4">

            <div className="card border-0 shadow-sm rounded-4 mb-4">
              <div className="card-body p-4">

                <h3 className="fw-bold mb-4">
                  Organization
                </h3>

                {/* Category */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Category
                  </label>

                  <select
                    className="form-select rounded-3 py-3"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                  >
                    <option value="">Select Category</option>
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                    <option value="Electronic">Electronic</option>
                  </select>
                </div>

              </div>
            </div>

            {/* Buttons */}
            <button
              type="submit"
              className="btn btn-dark w-100 rounded-4 py-3 fw-bold mb-3"
            >
              Create Product
            </button>

            <button
              type="reset"
              className="btn btn-outline-secondary w-100 rounded-4 py-3 fw-semibold"
            >
              Cancel
            </button>

          </div>
        </div>
      </form>
    </div>
  );
}

export default Add;
