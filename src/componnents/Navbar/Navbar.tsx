import "./Navbar.css";
import React from 'react';
import logout from "../../assets/images/navbar/logoutbtn.svg";
import logo from "../../assets/images/navbar/logo.svg";
import language from './../../assets/images/navbar/Vector.svg'

const Navbar = () => {
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
        <div className="logout  d-flex align-center">
          <span className="logout-text">تسجيل الخروج</span>
          <img src={logout} alt="logout icon" className="ne-logout-img" />
        </div>
      </div>

    </div>
  );
};

export default Navbar;