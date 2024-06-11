
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './SideBar.css';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);
  const [isCategoriesActive, setIsCategoriesActive] = useState(false);

  useEffect(() => {
    setActivePath(location.pathname);
    setIsCategoriesActive(location.pathname === '/categories');
  }, [location]);

  return (
    <div className="sidebar-container">
      <div className="profile-section">
  <div className="profile-info">
    <h2 className="username">اسم المستخدم</h2>
    <p className="role">المالك</p>
  </div>
  <img className="avatar" src="/src/assets/images/sidebar/adminPhoto.png" alt="Avatar" />
</div>
<img className="avatar-line " src="/src/assets/images/sidebar/Line 27.png" alt="" />
      
      <nav className="menu">
        <NavLink
          
          to="/"
          className={`menu-item ${activePath === '/' ? 'active' : ''}`}
        >
            <img className="avatar1" src="/src/assets/images/sidebar/main.svg" alt="Avatar" />
          الرئيسية
        </NavLink>
        <NavLink
          to="/brands"
          className={`menu-item ${activePath === '/brands' ? 'active' : ''}`}
        >
            <img className="avatar1" src="/src/assets/images/sidebar/brand.svg" alt="Avatar" />
          العلامات التجارية
        </NavLink>
        <NavLink
          to="/products"
          className={`menu-item ${activePath === '/products' ? 'active' : ''}`}
        >
            <img className="avatar1" src="/src/assets/images/sidebar/product_icon.svg" alt="Avatar" />
          المنتجات
        </NavLink>
        <NavLink
          to="/categories"
          className={`menu-item ${activePath === '/categories' ? 'active' : ''}`}
        >
          <img className="avatar1" src="/src/assets/images/sidebar/category_icon.svg" alt="Avatar" />
          الفئات
        </NavLink>
        {isCategoriesActive && (
          <div className="menu-item sub-item">
            إضافة فئة جديدة
            <img className="avatar2" src="/src/assets/images/sidebar/arrow.png" alt="Avatar" />

          </div>
        )}
        
        <NavLink
          to="/users"
          className={`menu-item ${activePath === '/users' ? 'active' : ''}`}
        >
          <img className="avatar1" src="/src/assets/images/sidebar/user.svg" alt="Avatar" />
          المستخدمون
          <img className="avatar2" src="/src/assets/images/sidebar/arrow.png" alt="Avatar" />
        </NavLink>
        <NavLink
          to="/contacts"
          className={`menu-item ${activePath === '/contacts' ? 'active' : ''}`}
        >
            <img className="avatar1" src="/src/assets/images/sidebar/contact.svg" alt="Avatar" />
          جهات الإتصال
        </NavLink>
        <NavLink
          to="/settings"
          className={`menu-item ${activePath === '/settings' ? 'active' : ''}`}
        >
            <img className="avatar1" src="/src/assets/images/sidebar/sitting.svg" alt="Avatar" />
          الإعدادات
        </NavLink>
        <NavLink
          to="/info"
          className={`menu-item ${activePath === '/info' ? 'active' : ''}`}
        >
            <img className="avatar1" src="/src/assets/images/sidebar/information.svg" alt="Avatar" />
          معلومات
        </NavLink>

        
      </nav>
    </div>
  );
};

export default Sidebar;

