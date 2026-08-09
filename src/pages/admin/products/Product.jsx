import {
  Search,
  Plus,
  SlidersHorizontal,
  Download,
  MoreHorizontal,
  Package,
  Delete,
  DeleteIcon,
  LucideDelete,
  DropletIcon,
  TrashIcon,
  Trash2Icon,
} from "lucide-react";
import axios from "axios";
import { Row,Col } from "reactstrap";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import {toast} from "react-toastify";
function Product(){

    // product showing api
    const[products, setproducts] = useState([]);

    useEffect(()=>{
      axios.get(`https://backend-ecommerce-3g3a.onrender.com/api/upload/allProduct`)
      .then(res =>{
        console.log(res.data);
        setproducts(res.data);
      })
      .catch(err =>{
        console.log("error fetch in product:", err);
      })
    },[]);

    // Delete api call
    const token = localStorage.getItem("token");

    const deleteProduct = async(id) =>{
      try {
           await axios.delete(`https://backend-ecommerce-3g3a.onrender.com/api/upload/product/${id}`,
            {
              headers:{
                Authorization : `Bearer ${token}`
              }
            }
          );
          // console.log(response.data);
          setproducts((prevProducts) =>prevProducts.filter((Product)=> Product.id !==id));
          toast.success("Product Deleted Successfully");
      } catch (error) {
        console.log(error);
         toast.error("Delete failed");
      }
    }

    return(
        <>
         <div className="container-fluid py-4 px-2 px-md-4 bg-white min-vh-100">

      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">

        <div>
          <h1 className="fw-bold mb-1">Products</h1>
          <p className="text-secondary mb-0">
            Browse and manage your product catalog.
          </p>
        </div>

        <button className="btn btn-dark rounded-3 px-4 d-flex align-items-center gap-2">
          <Plus size={18} />
          <Link to="/admin/Add" style={{color:"white",textDecoration:"none"}}>Add Product</Link>
        </button>

      </div>

      {/* Tabs */}
      {/* <div className="d-flex gap-2 flex-wrap mb-4">

        <button className="btn btn-light rounded-pill border fw-semibold">
          All
        </button>

        <button className="btn btn-light rounded-pill text-secondary">
          Active
        </button>

        <button className="btn btn-light rounded-pill text-secondary">
          Draft
        </button>

        <button className="btn btn-light rounded-pill text-secondary">
          Archived
        </button>

      </div> */}

      {/* Search + Actions */}
      <div className="row g-3 mb-4">

        <div className="col-lg-5">

          <div className="input-group">
            <span className="input-group-text bg-white border-end-0">
              <Search size={18} />
            </span>

            <input
              type="text"
              placeholder="Search products..."
              className="form-control border-start-0 shadow-none"
            />
          </div>

        </div>

        <div className="col-lg-2">

          <button className="btn btn-light border w-100 d-flex align-items-center justify-content-center gap-2 rounded-3">
            <Package size={18} />
            Category
          </button>

        </div>

        <div className="col-lg-5">

          <div className="d-flex justify-content-lg-end gap-2">

            <button className="btn btn-light border rounded-3 d-flex align-items-center gap-2">
              <SlidersHorizontal size={18} />
              Columns
            </button>

            <button className="btn btn-light border rounded-3 d-flex align-items-center gap-2">
              <Download size={18} />
              Export
            </button>

          </div>

        </div>

      </div>

      {/* Table */}
      <div className="card border-0 shadow-sm rounded-4 overflow-hidden">

        <div className="table-responsive">
         
          <table className="table align-middle mb-0">

            <thead className="bg-white">
              <tr>
                <th>
                  <input type="checkbox" />
                </th>

                <th>Product</th>
                <th>Product Name</th>
                <th>Category</th>
                {/* <th>Status</th> */}
                {/* <th>Stock</th> */}
                <th>Price</th>
                <th>Created</th>
                <th>Operations</th>
              </tr>
            </thead>

            <tbody>

              {/* API Data */}
              
              {products.map((p)=>(

                <tr key={p.id}>

                  <td>
                    <input type="checkbox" />
                  </td>

                  {/* Product */}
                  <td>

                    <div className="d-flex align-items-center gap-3">

                      <div
                        className="bg-light rounded-4 d-flex align-items-center justify-content-center"
                        style={{
                          width: "55px",
                          height: "55px",
                        }}
                      >
                        <img
                          src={p.imageUrl}
                          alt={p.name}
                          className="img-fluid rounded-3"
                        />
                      </div>

                      <div>

                        

                        <small className="text-secondary">
                          {/* {p.description} */}
                        </small>

                      </div>

                    </div>

                  </td>

                    <td>
                    <span className="badge rounded-pill text-dark bg-light border">
                      {p.name}
                    </span>
                  </td>     
                  {/* Category */}
                  <td>
                    <span className="badge rounded-pill text-dark bg-light border">
                      {p.category}
                    </span>
                  </td>

                  {/* Status */}
                  {/* <td>

                    <span className={`badge rounded-pill px-3 py-2 `}></span>

                  </td> */}

                  {/* Stock */}
                  {/* <td></td> */}

                  {/* Price */}
                  <td className="fw-semibold">
                    ₹{p.price}
                  </td>

                  {/* Created */}
                  <td>{p.createdAt}</td>

                  {/* Action */}
                  <td>
                    <button onClick={() =>deleteProduct(p.id)}  className="btn btn-sm text-danger"><Trash2Icon size={18} /></button>
                  </td>

                </tr>
))}
            </tbody>

          </table>
        </div>

      </div>

    </div>
        </>
    )

}
export default Product;
