import './SideBar.css';
import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import user_name from './../../assets/images/sidebar/user_Name_Admin.png';
import icon_Main from './../../assets/images/sidebar/icon_main.svg';
import icon_brand from './../../assets/images/sidebar/brand.svg';
import icon_product from './../../assets/images/sidebar/icon_products.svg';
import icon_category from './../../assets/images/sidebar/icon_category.svg';
import icon_settings from './../../assets/images/sidebar/settings.svg';
import icon_information from './../../assets/images/sidebar/information.svg';
import icon_user from './../../assets/images/sidebar/user.svg';
import icon_contacts from './../../assets/images/sidebar/contact.svg';
import arrow_small from './../../assets/images/sidebar/arrow_small.svg';
import arrow from './../../assets/images/sidebar/arrow.svg';

const Sidebar: React.FC = () => {
  const location = useLocation();

  const [activePath, setActivePath] = useState<string>(location.pathname);
  const [isCategoriesActive, setIsCategoriesActive] = useState<boolean>(false);
  const [isAddCategoryActive, setIsAddCategoryActive] = useState<boolean>(false);
  const [isSettingsActive, setIsSettingsActive] = useState<boolean>(false);
  const [isCertidicationsActive, setIsCertidicationsActive] = useState<boolean>(false);
  const [isPolocyActive, setIsPolicyActive] = useState<boolean>(false);
  const [isSystemSettingsActive, setIsSystemSettingsActive] = useState<boolean>(false);
  const [isSettingsHomeActive, setIsSettingsHomeActive] = useState<boolean>(false);
  const [isSettingsAboutActive, setIsSettingsAboutActive] = useState<boolean>(false);
  const [isPagesActive, setIsPagesActive] = useState<boolean>(false);


  useEffect(() => {
    setActivePath(location.pathname);
    setIsCategoriesActive(location.pathname === '/categories');
    setIsAddCategoryActive(location.pathname === '/categories/addCategory'); 

    setIsSettingsActive(location.pathname === '/settings'); 
    setIsCertidicationsActive(location.pathname === '/settings/certificates'); 
    setIsSystemSettingsActive(location.pathname === '/settings/system_settingsy'); 
    setIsPolicyActive(location.pathname === '/settings/privacy_policy'); 

    setIsPagesActive(location.pathname === '/settings/pages_settings'); 
    setIsSettingsHomeActive(location.pathname === '/settings/pages_settings/home'); 
    setIsSettingsAboutActive(location.pathname === '/settings/pages_settings/about'); 

  }, [location]);


  return (
    <div className="IB_sidebar-container">
      <div className="IB_profile-section">
        <div className="IB_profile-info">
          <h2 className="IB_username">اسم المستخدم</h2>
          <p className="IB_role">المالك</p>
        </div>
        <img className="IB_userName_Photo" src={user_name} alt="userName_Photo" />
      </div>
      <div className="IB_line"></div>

      <div className="IB_menu">
        <NavLink
          to="/"
          className={`menu-item IB_lineHeight22 ${activePath === '/' ? 'active' : ''}`}
        >
          <img className="IB_img_sidebar" src={icon_Main} alt="icon_Main" />
          <span>الرئيسية</span>
        </NavLink>
        <NavLink
          to="/brands"
          className={`menu-item IB_lineHeight22 ${activePath === '/brands' ? 'active' : ''}`}
        >
          <img className="IB_img_sidebar" src={icon_brand} alt="icon_brand" />
          <span>العلامات التجارية</span>
        </NavLink>
        <NavLink
          to="/products"
          className={`menu-item  IB_lineHeight22 ${activePath === '/products' ? 'active' : ''}`}
        >
          <img className="IB_img_sidebar" src={icon_product} alt="icon_product" />
          <span>المنتجات</span>





        </NavLink>
        <NavLink
          to="/categories"
          className={`menu-item  IB_lineHeight20 ${activePath === '/categories' ? 'active' : ''}`}
        >
          <img className="IB_img_sidebar" src={icon_category} alt="icon_category" />
          <span>الفئات</span>
          <img className="IB_Img_sub_menu" src={arrow} alt="arrow" />
        </NavLink>

        {isCategoriesActive && (
          <div className="menu-item">
            <Link to='/categories/addCategory'
              className={`IB_SubMenu_LinkTo ${isAddCategoryActive ? 'HJ_active' : ''}`}
            >
              <img className="IB_arrow" src={arrow_small} alt="arrow" />
              <span className='IB_Space'>اضافة فئة جديدة</span>
            </Link>
          </div>
        )}

        <NavLink
          to="/users"
          className={`menu-item IB_lineHeight22 ${activePath === '/users' ? 'active' : ''}`}
        >
          <img className="IB_img_sidebar" src={icon_user} alt="icon_user" />
          <span>المستخدمون</span>

        </NavLink>
        <NavLink
          to="/contacts"
          className={`menu-item IB_lineHeight22 ${activePath === '/contacts' ? 'active' : ''}`}
        >
          <img className="IB_img_sidebar" src={icon_contacts} alt="icon_contacts" />
          <span>جهات الاتصال</span>
        </NavLink>
        <NavLink
          to="/settings"
          className={`menu-item IB_lineHeight22 ${activePath === '/settings' ? 'active' : ''}`}
        >
          <img className="IB_img_sidebar" src={icon_settings} alt="icon_settings" />
          <span>الاعدادات</span>
          <img className="IB_Img_sub_menu" src={arrow} alt="arrow" />
        </NavLink>

        {isSettingsActive && (
          <div className='HJ_AllSettings'>
            <div className="menu-item">
              <Link to='/settings/system_settings' 
                  className={`IB_SubMenu_LinkTo ${isSystemSettingsActive ? 'HJ_active' : ''}`}>
                <img className="IB_arrow" src={arrow_small} alt="arrow" />
                <span className='IB_Space'>اعدادات النظام</span>
              </Link>
            </div>

            <div className="menu-item">
              <Link to='/settings/certificates' 
                className={`IB_SubMenu_LinkTo ${isCertidicationsActive? 'HJ_active' : ''}`}>
                <img className="IB_arrow" src={arrow_small} alt="arrow" />
                <span className='IB_Space'>الشهادات</span>
              </Link>
            </div>

            <div className="menu-item">
              <Link to='/settings/privacy_policy' 
                className={`IB_SubMenu_LinkTo ${isPolocyActive ? 'HJ_active' : ''}`}>
                <img className="IB_arrow" src={arrow_small} alt="arrow" />
                <span className='IB_Space'>سياسة الخصوصية</span>
              </Link>
            </div>


            <div className="menu-item">
              <Link to='/settings/pages_settings' 
                className={`IB_SubMenu_LinkTo ${isPagesActive ? 'HJ_active' : ''}`}>
                <img className="IB_arrow" src={arrow_small} alt="arrow" />
                <span className='IB_Space'>صفحات</span>
              </Link>
            </div>

            { isPagesActive && (
              <div className='HJ_settings_Pages'>
                <div className="menu-item">
                  <Link to='/settings/pages_settings/home'
                    className={`IB_SubMenu_LinkTo ${isSettingsHomeActive ? 'HJ_active' : ''}`}
                  >
                    <img className="IB_arrow" src={arrow_small} alt="arrow" />
                    <span className='IB_Space'>الصفحة الرئيسية</span>
                  </Link>
                </div>


                <div className="menu-item">
                  <Link to='/settings/pages_settings/about'
                    className={`IB_SubMenu_LinkTo ${isSettingsAboutActive ? 'HJ_active' : ''}`}
                  >
                    <img className="IB_arrow" src={arrow_small} alt="arrow" />
                    <span className='IB_Space'>صفحة حول</span>
                  </Link>
                </div>

              </div>

            )}

          </div>

        )}
        <NavLink
          to="/info"
          className={`menu-item IB_lineHeight22  ${activePath === '/info' ? 'active' : ''}`}
        >
          <img className="IB_img_sidebar" src={icon_information} alt="icon_information" />
          <span>معلومات</span>
        </NavLink>
      </div>

    </div>
  );
};

export default Sidebar;