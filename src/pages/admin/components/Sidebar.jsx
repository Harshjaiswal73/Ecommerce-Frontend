import {
  LayoutDashboard,
  BarChart3,
  ShoppingCart,
  Package,
  Users,
  Mail,
  ChartBar,
  File,
  Home,
  HomeIcon,
  Handshake,
  Rocket,
  ChartScatter,
  LucideChartScatter,
  Hamburger,
  HamburgerIcon,
  LucideHamburger
} from "lucide-react";

function Sidebar() {

  // let side = document.getElementById('sidebar');
  

  return (
    <aside id="sidebar" className="w-64 border-r min-h-screen hidden lg:block" style={{backgroundColor:"oklch(98.5% 0 0)"}}>
      
      <div className="p-5 border-b" style={{marginTop:"-2.4vw"}}>
        <h2 className="font-bold text-2xl absolute" >
          DashBoard
        </h2>
      </div>

      <div className="p-4" style={{overflowY:'auto',height:'100vh'}}>

        <p className="text-xs text-gray-400 mb-3">
          OVERVIEW
        </p>

        <ul className="space-y-2">

          <li className="bg-gray-100 rounded-lg">
            <a href="/admin/" className="flex items-center gap-3 p-3">
              <LayoutDashboard size={18}/>
              Dashboard
            </a>
          </li>
          <li>
            <a href="/admin/chart" className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg">
              <LucideChartScatter size={18}/>
              Charts
            </a>
          </li>
        </ul>

        <p className="text-xs text-gray-400 mt-8 mb-3">
          COMMERCE
        </p>

        <ul className="space-y-2">

          <li>
            <a href="/admin/orders" className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg">
              <ShoppingCart size={18}/>
              Orders
            </a>
          </li>

          <li>
            <a href="/admin/product" className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg">
              <Package size={18}/>
              Products
            </a>
          </li>

          <li>
            <a href="/admin/Customers" className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg">
              <Users size={18}/>
              Customers
            </a>
          </li>


        </ul>

        <p className="text-xs text-gray-400 mt-8 mb-3">
          APPS
        </p>

        <ul>
          <li>
            <a className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg">
              <Mail size={18}/>
              Mail
            </a>
        </li>

        <li>
            <a className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg">
              <ChartBar size={18}/>
              Chat
            </a>
        </li>

        <li>
            <a className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg">
              <File size={18}/>
              Files
            </a>
        </li>

        <li>
            <a className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg">
              <Users size={18}/>
              Forms
            </a>
        </li>

        </ul>
      </div>

      {/* <div className="p-5 border-b" style={{marginTop:"-2.4vw"}}>
        <h2 className="font-bold text-2xl absolute" >
          DashBoard
        </h2>
      </div> */}
    </aside>
  );
}
export default Sidebar;