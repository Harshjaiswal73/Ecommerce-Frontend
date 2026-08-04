import 'bootstrap/dist/css/bootstrap.min.css';
import Userroutes from './routes/Userroutes';
import AdminRoutes from './routes/AdminRoutes';
import { Routes, Route } from "react-router-dom";
import UserLayout from './layout/UserLayout';

function App() {
  
  return (
    <>
    
    {/* <Navbar /> */}

      <Routes>
        {/* User Routes */}
        <Route element={<UserLayout />}>
            <Route path="/*" element={<Userroutes />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin/*" element={<AdminRoutes />} />
      </Routes>
    </>
  );
}

export default App;