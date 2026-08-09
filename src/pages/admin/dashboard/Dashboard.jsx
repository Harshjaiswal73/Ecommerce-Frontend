import Statcards from "../dashboard/Statcards";
// import StatCard from "../dashboard/Statcards";
import axios from "axios";
import React,{ useState, useEffect } from "react";

import Customers from "../users/Customers";
import TrafficChart from "../Charts/TrafficChart";
import Revenuecharts from "../Charts/RevenueCharts";
// import {User2, User2Icon} from "lucide-react";
function Dashboard() {

  const[stats, setStats] = useState({users:0, products:0, orders:0});
  const[loading, setLoading] = useState(true);
  const[error, setError] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchDashboardData = async () => {
      try{
        setLoading(true);

        const response = await axios.get('https://backend-ecommerce-3g3a.onrender.com/admin/pannel/TotalUserProduct',
          {
            headers: {
            Authorization: `Bearer ${token}`
            }
          }
        );
        console.log(response.data);
        setStats({
          users: response.data.totalUsers,
          products: response.data.totalProducts,
          orders: response.data.totalOrders
        });
        setError(null);
      }catch(err){
        console.error("Api fetch error:", err);
        setError("Data load karne mein dikkat aa rhi hai");
      }finally{
        setLoading(false);
      }
    };
    fetchDashboardData();
  },[]);
  useEffect(() => {
  console.log(stats);
}, [stats]);
  if (loading) return <h1>Loading...</h1>;

if (error) return <h1>{error}</h1>;
  return (
    <div className="p-6">

      <h1 className="text-4xl font-bold">
        Dashboard
      </h1>

      <p className="text-gray-500 mt-2">
        Welcome back.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">

        <Statcards
          title="Total Users"
          value={stats.users}
          // growth="+12.5%"

        />

        <Statcards
          title="Total Products"
          value={stats.products}
          // growth="+8.2%"
        />

        <Statcards
          title="Orders"
          value={stats.orders}
          // growth="-3.1%"
        />

        <Statcards
          title="Page Views"
          // value="284K"
          // growth="+24.7%"
        />

      </div>

      <div className="grid lg:grid-cols-3 gap-6 mt-8">

        <div className="lg:col-span-2 bg-white border rounded-2xl p-6 h-96">
          Revenue Chart
          <Revenuecharts />
        </div>

        <div className="bg-white border rounded-2xl p-6 h-96">
          Traffic Sources
          <p className="text-gray-500">Where your visitors come from</p>
          <TrafficChart/>
        </div>

      </div>


    </div>

    

  );
}
export default Dashboard;
