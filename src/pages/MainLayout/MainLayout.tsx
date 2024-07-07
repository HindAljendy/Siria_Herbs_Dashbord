import React from 'react';
import './MainLayout.css';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Navbar from '../../componnents/Navbar/Navbar';
import Sidebar from '../../componnents/Sidebar/SideBar';

const MainLayout = () => {
  const location = useLocation();
  const isAuthenticated = () => {
    // Your authentication check logic here
    return localStorage.getItem('token') !== null;
  };

  // Define paths that should not have Navbar and Sidebar
  const isErrorPage = location.pathname === '/error' || location.pathname === '/404' || location.pathname === '/login';
  const isLoginPage = location.pathname === '/login';

  if (!isAuthenticated() && !isLoginPage) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      {!isErrorPage && <Navbar />}
      <div className={!isErrorPage ? 'HJ_container' : ''}>
        {!isErrorPage && <Sidebar />}
        <div className={!isErrorPage ? 'HJ_outlet' : 'full_page'}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
