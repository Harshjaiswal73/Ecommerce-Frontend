import {
  Search,
  Plus,
  SlidersHorizontal,
  Download,
  MoreHorizontal,
  Package,
} from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect,useState } from "react";
function Customers(){

    // get all customer api calling
    const[customers, setcustomers] = useState([]);

    useEffect(()=>{
      const fetchusers = async ()=>{
          try{
             const token = localStorage.getItem("token");

             const response = await axios.get("https://backend-ecommerce-3g3a.onrender.com/admin/pannel/AllUsers",
              {
                headers:{
                   Authorization : `Bearer ${token}`
                }
              }
             );
             console.log(response.data);
             setcustomers(response.data);
          }catch(error){
            console.log("Customer Error", error);
          }
      };
      fetchusers();
    },[]);

    return(
        <>
         <div className="container-fluid py-4 px-2 px-md-4 bg-white min-vh-100">

      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">

        <div>
          <h1 className="fw-bold mb-1">Customers</h1>
          <p className="text-secondary mb-0">
            View and manage your customer base.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="d-flex gap-2 flex-wrap mb-4">

        <button className="btn btn-light rounded-pill border fw-semibold">
          All
        </button>

        <button className="btn btn-light rounded-pill text-secondary">
          Active
        </button>

        <button className="btn btn-light rounded-pill text-secondary">
          Inactive
        </button>

      </div>

      {/* Search + Actions */}
      <div className="row g-3 mb-4">

        <div className="col-lg-5">

          <div className="input-group">
            <span className="input-group-text bg-white border-end-0">
              <Search size={18} />
            </span>

            <input
              type="text"
              placeholder="Search Customers..."
              className="form-control border-start-0 shadow-none"
            />
          </div>

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

                <th>Customers Name</th>
                <th>Joined</th>
                <th>Role</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>State</th>
                <th></th>
              </tr>
            </thead>

            <tbody>

              {/* API Data */}
              
            {customers.map((users)=>(
                <tr>

                  <td>
                    <input type="checkbox" />
                  </td>

                  {/* Product */}
                  <td>

                    <div className="d-flex align-items-center gap-3">

                      <div>
                        <h6>{users.firstname} {users.lastname}</h6>
                      </div>
                    </div>

                  </td>
                  {/* Created */}
                  <td>{users.createdAt}</td>
                  <td>{users.role}</td>
                  <td>{users.email}</td>
                  <td>{users.mobileNumber}</td>
                   <td>{users.state}</td>
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
export default Customers;
