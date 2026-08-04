import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="d-flex">
      
      <Sidebar/>

      <div className="flex-grow-1" style={{backgroundColor:'white'}}>
        
      <Navbar />
        {/* Content Area */}
        <div className="p-4" style={{backgroundColor:'white'}}>
          <Outlet />
        </div>
      </div>

    </div>
  );
}

export default AdminLayout;