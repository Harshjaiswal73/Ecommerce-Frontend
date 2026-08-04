import React, { useState } from "react";
import {
  Navbar as ReactstrapNavbar,
  Nav,
  NavItem,
  NavLink,
  Container,
  Form
} from "reactstrap";
import { Link,} from "react-router-dom";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify';
function Navbar() {
  
  const navigate = useNavigate();
  const[keyword,setKeyword] = useState("");

  const handleSearch =(e) =>{
    if(e.key === "Enter"){
      e.preventDefault();

      if(keyword.trim() === ""){
        navigate("/");
      }else{
        navigate(`/?keyword=${keyword}`);
      }
    }
  };


  function handleLogout() {

    localStorage.clear();

    // ya agar sab remove karna ho
    // localStorage.clear();
    toast.success("log out successfully");
    navigate("/user/login", {replace: true});
}


  const firstname = localStorage.getItem("firstname")
  
  return (

    <>
      
      {/* <div className="top-bar">
        <div className="left">EN ▾ &nbsp; USD ▾</div>
        <div className="right">
          <NavItem>
              <Link to="/user/profile" className="nav-link">MyProfile</Link>
            </NavItem>
          <span>Items</span>
          <span>$0.00</span>
        </div>
      </div> */}

      
      <ReactstrapNavbar expand="md" className="main-navbar">
        <Container className="nav-container">

         
          <div className="logo">
            <div className="logo-icon"></div>
            <span>E-Comm</span>
          </div>

           <NavItem>
                <form
  className="form-inline"
  style={{ width: "177%", marginLeft: "2vw" }}
>
  <input
    className="form-control w-100"
    type="search"
    placeholder="Search Products..."
    value={keyword}
    onChange={(e) => setKeyword(e.target.value)}
    onKeyDown={handleSearch}
  />
</form>
            </NavItem>
          
          <Nav className="menu" navbar>
            <NavItem>
              <NavLink href="/" className="active-link">HOME</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">BAGS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">SNEAKERS</NavLink>
            </NavItem>
            <NavItem>
              <Link to="/user/contact" className="nav-link">CONTACT</Link>
            </NavItem>
            {/* <NavItem>
              <Link to="/login" className="nav-link">{username}</Link>
            </NavItem> */}
            <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             {firstname ? firstname.toUpperCase() : "Login"}
          </a>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="/user/profile">My Profile</Link></li>
            <li><Link class="dropdown-item" to="/user/myorders">My Orders</Link></li>
            {/* <li><Link class="dropdown-item" href={handleLogout}>Log out</Link></li>
             */}
             <li>
    <Link
        className="dropdown-item"
        to="#"
        onClick={handleLogout}
    >
        Log out
    </Link>
</li>
          </ul>
        </li>
          </Nav>

        </Container>
      </ReactstrapNavbar>
    </>
  );
}

export default Navbar;