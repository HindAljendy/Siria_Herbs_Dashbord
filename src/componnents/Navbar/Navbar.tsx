import "./Navbar.css";
import React from 'react';
import logout from "../../assets/images/navbar/logoutbtn.svg";
import logo from "../../assets/images/navbar/logo.svg";
import language from './../../assets/images/navbar/Vector.svg'
import { Navigate, useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    // Remove the user's authentication token from storage
    localStorage.removeItem('token');
  
    // Navigate the user to the login page
    navigate('/login', { replace: true });
  };
  
  
  return (
    <div className="ne-navbar d-flex align-center justify-between">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="ne-info-nav">
        <div className="ne-language">
          <img src={language} alt="language" />
          <span className="ne-lanuage-text">Ar</span>
        </div>
        <div className="logout  d-flex align-center " onClick={handleLogout}>
          <span className="logout-text">تسجيل الخروج</span>
          <img src={logout} alt="logout icon" className="ne-logout-img" />
        </div>
      </div>

    </div>
  );
};

export default Navbar;