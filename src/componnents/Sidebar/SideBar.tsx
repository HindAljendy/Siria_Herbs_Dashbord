import './SideBar.css';
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import user_name from './../../assets/images/sidebar/user_Name_Admin.png';
import arrow_small from './../../assets/images/sidebar/arrow_small.svg';
import { IoIosArrowBack } from "react-icons/io";


const Sidebar: React.FC = () => {
  
  const [selectedItem, setSelectedItem] = useState('');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenPages = (item: React.SetStateAction<string>) => {
    setIsOpen((prevState) => !prevState);
    setSelectedItem(item);
  };

  const handleItemClick = (item: React.SetStateAction<string>) => {
    setSelectedItem(item);
  };

  const location = useLocation();

  // حالة المسار النشط وحالة القائمة الفرعية المفتوحة
  const [activePath, setActivePath] = useState<string>(location.pathname);
  const [openSubMenu, setOpenSubMenu] = useState<string>('');

  // تحديث المسار النشط عند تغيير الموقع
  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

  // التعامل مع تبديل القائمة الفرعية
  const handleSubMenuToggle = (menu: string) => {
    setOpenSubMenu((prev) => (prev === menu ? '' : menu));
  };

  return (
    <div className="IB_sidebar-container">
      {/* قسم الملف الشخصي */}
      <div className="IB_profile-section">
        <div className="IB_profile-info">
          <h2 className="IB_username">اسم المستخدم</h2>
          <p className="IB_role">المالك</p>
        </div>
        <img className="IB_userName_Photo" src={user_name} alt="userName_Photo" />
      </div>
      <div className="IB_line"></div>

      {/* قائمة الروابط */}
      <div className="IB_menu">

        <NavLink to="/" className={`menu-item IB_lineHeight22 ${activePath === '/' ? 'active' : ''}`}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.3035 1.88685C12.8519 2.0734 12.4481 2.47841 11.6394 3.28597C10.8306 4.09599 10.4257 4.49977 10.2403 4.95019C10.117 5.24804 10.0534 5.56728 10.0534 5.88968C10.0534 6.21208 10.117 6.53133 10.2403 6.82918C10.4257 7.28082 10.8294 7.6846 11.6394 8.49339C12.4469 9.30218 12.8519 9.70719 13.3035 9.89251C13.9046 10.1414 14.58 10.1414 15.1811 9.89251C15.6328 9.70719 16.0365 9.30341 16.8452 8.49339C17.6552 7.6846 18.0577 7.28082 18.2443 6.82918C18.4931 6.22799 18.4931 5.55259 18.2443 4.95141C18.0577 4.49977 17.6552 4.09599 16.8452 3.2872C16.0365 2.47718 15.6328 2.0734 15.1811 1.88685C14.58 1.63798 13.9046 1.63798 13.3035 1.88685ZM5.49223 9.69737C5.04184 9.88392 4.63686 10.2877 3.82935 11.0965C3.01938 11.9065 2.61563 12.3103 2.42909 12.7607C2.3057 13.0586 2.24219 13.3778 2.24219 13.7002C2.24219 14.0226 2.3057 14.3418 2.42909 14.6397C2.61563 15.0913 3.02061 15.4951 3.82812 16.3039C4.63809 17.1127 5.04184 17.5165 5.49223 17.703C5.79006 17.8264 6.10929 17.8899 6.43167 17.8899C6.75405 17.8899 7.07327 17.8264 7.37111 17.703C7.82272 17.5165 8.22648 17.1127 9.03522 16.3039C9.84518 15.4951 10.2477 15.0913 10.4342 14.6397C10.6831 14.0385 10.6831 13.3631 10.4342 12.7619C10.2477 12.3103 9.84518 11.9053 9.03522 11.0965C8.22648 10.2877 7.82272 9.88392 7.37111 9.69737C6.76996 9.44849 6.09338 9.44849 5.49223 9.69737ZM19.4494 11.0965C18.6407 11.9065 18.2369 12.3103 18.0504 12.7607C17.927 13.0586 17.8635 13.3778 17.8635 13.7002C17.8635 14.0226 17.927 14.3418 18.0504 14.6397C18.2369 15.0913 18.6407 15.4951 19.4494 16.3039C20.2581 17.1127 20.6631 17.5165 21.1135 17.703C21.7147 17.9519 22.39 17.9519 22.9912 17.703C23.4428 17.5165 23.8478 17.1127 24.6565 16.3039C25.4652 15.4951 25.8678 15.0913 26.0555 14.6397C26.3044 14.0385 26.3044 13.3631 26.0555 12.7619C25.8678 12.3103 25.4652 11.9053 24.6565 11.0965C23.8465 10.2877 23.4428 9.88392 22.9924 9.69737C22.6946 9.57397 22.3753 9.51046 22.053 9.51046C21.7306 9.51046 21.4114 9.57397 21.1135 9.69737C20.6631 9.88392 20.2581 10.2877 19.4494 11.0965ZM13.3035 17.5079C12.8519 17.6944 12.4481 18.0994 11.6394 18.907C10.8306 19.717 10.4257 20.1208 10.2403 20.5724C9.99149 21.1736 9.99149 21.849 10.2403 22.4502C10.4257 22.9019 10.8294 23.3056 11.6394 24.1144C12.4469 24.9232 12.8519 25.3282 13.3035 25.5135C13.9046 25.7624 14.58 25.7624 15.1811 25.5135C15.6328 25.3282 16.0365 24.9244 16.8452 24.1144C17.6552 23.3056 18.0577 22.9019 18.2443 22.4502C18.4934 21.8488 18.4934 21.1738 18.2443 20.5724C18.0577 20.1208 17.6552 19.7158 16.8452 18.9082C16.0365 18.0982 15.6328 17.6944 15.1811 17.5079C14.58 17.259 13.9046 17.259 13.3035 17.5079Z" stroke="#283760" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <span>الرئيسية</span>
        </NavLink>
        <NavLink to="/brands" className={`menu-item IB_lineHeight22 ${activePath === '/brands' ? 'active' : ''}`}>
          <svg width="29" height="21" viewBox="0 0 29 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.117 2.10181L22.117 2.1018L22.1122 2.09925C21.8054 1.93541 21.4994 1.87354 21.2081 1.84645C20.9472 1.82219 20.6417 1.82223 20.3201 1.82226L20.2833 1.82227H5.54459C5.52456 1.82227 5.50459 1.82226 5.48468 1.82226C4.90053 1.82219 4.36614 1.82213 3.93166 1.88058C3.45341 1.94492 2.94982 2.09609 2.53565 2.51026C2.12148 2.92443 1.97031 3.42802 1.90597 3.90627C1.84752 4.34075 1.84758 4.87514 1.84765 5.45929C1.84765 5.4792 1.84766 5.49917 1.84766 5.5192V16.3069L1.84765 16.3668C1.84758 16.951 1.84752 17.4854 1.90597 17.9199C1.97031 18.3981 2.12148 18.9017 2.53565 19.3159C2.94982 19.73 3.45341 19.8812 3.93166 19.9455C4.36614 20.004 4.90053 20.0039 5.48467 20.0039L5.54459 20.0039H20.2833L20.3201 20.0039C20.6417 20.0039 20.9472 20.0039 21.2081 19.9797C21.4994 19.9526 21.8054 19.8907 22.1122 19.7269L22.1153 19.7252C22.4207 19.5608 22.6416 19.3412 22.8259 19.114C22.9923 18.9088 23.163 18.6529 23.3426 18.3833L23.3592 18.3584L23.3593 18.3583L26.9543 12.9645L26.9547 12.9638L26.984 12.9198C27.2022 12.5921 27.4078 12.2832 27.5529 12.0044C27.7159 11.6915 27.8477 11.336 27.8477 10.9131C27.8477 10.4911 27.7168 10.1359 27.5536 9.82209C27.4061 9.53875 27.1967 9.22559 26.9741 8.8927L26.9543 8.86301L26.9535 8.86184L23.3593 3.46914L23.3589 3.46861L23.3415 3.44243C23.1615 3.17275 22.991 2.91729 22.8252 2.71271C22.6415 2.48593 22.4213 2.26641 22.117 2.10181Z" stroke="#283760" stroke-width="2" />
            <path d="M19.0282 13.2614C20.3252 13.2614 21.3766 12.2099 21.3766 10.9129C21.3766 9.6159 20.3252 8.56445 19.0282 8.56445C17.7311 8.56445 16.6797 9.6159 16.6797 10.9129C16.6797 12.2099 17.7311 13.2614 19.0282 13.2614Z" stroke="#283760" stroke-width="2" />
          </svg>
          <span>العلامات التجارية</span>
        </NavLink>
        <NavLink to="/products" className={`menu-item IB_lineHeight22 ${activePath === '/products' ? 'active' : ''}`}>
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8735 1.85364C11.1504 1.85364 11.3748 2.07806 11.3748 2.35493V11.8795C11.3748 12.1563 11.1504 12.3808 10.8735 12.3808H1.34895C1.07208 12.3808 0.847656 12.1563 0.847656 11.8795V2.35493C0.847656 2.07806 1.07208 1.85364 1.34895 1.85364H10.8735ZM9.24432 3.98413H2.97815V10.2503H9.24432V3.98413ZM24.7008 6.7314C24.8966 6.92715 24.8966 7.24457 24.7008 7.44032L19.0293 13.1118C18.8336 13.3076 18.5162 13.3076 18.3204 13.1118L12.6489 7.44032C12.4532 7.24457 12.4532 6.92715 12.6489 6.7314L18.3204 1.0599C18.5162 0.864147 18.8336 0.864147 19.0294 1.0599L24.7008 6.7314ZM22.0423 7.08584L18.6749 3.71844L15.3075 7.08588L18.6749 10.4533L22.0423 7.08584ZM10.8735 14.3859C11.1504 14.3859 11.3748 14.6104 11.3748 14.8872V24.4118C11.3748 24.6887 11.1504 24.9131 10.8735 24.9131H1.34895C1.07208 24.9131 0.847656 24.6887 0.847656 24.4118V14.8872C0.847656 14.6104 1.07208 14.3859 1.34895 14.3859H10.8735ZM9.24432 16.5164H2.97815V22.7826H9.24432V16.5164ZM23.4058 14.3859C23.6827 14.3859 23.9071 14.6104 23.9071 14.8872V24.4118C23.9071 24.6887 23.6827 24.9131 23.4058 24.9131H13.8813C13.6044 24.9131 13.38 24.6887 13.38 24.4118V14.8872C13.38 14.6104 13.6044 14.3859 13.8813 14.3859H23.4058ZM21.7766 16.5164H15.5105V22.7826H21.7766V16.5164Z" fill="#283760" />
          </svg>
          <span>المنتجات</span>
        </NavLink>

        {/* قسم الفئات مع القائمة الفرعية */}
        <NavLink to='/categories' className={`menu-item IB_lineHeight20 `} onClick={() => handleSubMenuToggle('categories')}>
          <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.8477 1.91309V4.57975M13.8477 23.2464V25.9131M13.8477 8.57975V19.2464M7.84766 20.5798V23.2464M1.84766 12.5798V15.2464M25.8477 12.5798V15.2464M7.84766 4.57975V15.2464M19.8477 7.24642V4.57975M19.8477 23.2464V12.5798" stroke="#283760" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <span>الفئات</span>
          <span className="icon-row">
            <IoIosArrowBack />
          </span>        </NavLink>
        {openSubMenu === 'categories' && (
          <div className="menu-subitem">
            <NavLink to='/categories/addCategory' className={`IB_SubMenu_LinkTo`}>
              <img className="IB_arrow" src={arrow_small} alt="arrow" />
              <span className='IB_Space'>اضافة فئة جديدة</span>
            </NavLink>
          </div>
        )}

        <NavLink to="/users" className={`menu-item IB_lineHeight22 ${activePath === '/users' ? 'active' : ''}`}>
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.6477 15.1631C16.1102 15.1631 15.3709 15.9131 12.8477 15.9131C10.3244 15.9131 9.59051 15.1631 8.04766 15.1631C4.07266 15.1631 0.847656 17.985 0.847656 21.4631V22.6631C0.847656 23.9053 1.99944 24.9131 3.41908 24.9131H22.2762C23.6959 24.9131 24.8477 23.9053 24.8477 22.6631V21.4631C24.8477 17.985 21.6227 15.1631 17.6477 15.1631ZM22.2762 22.6631H3.41908V21.4631C3.41908 19.2318 5.49766 17.4131 8.04766 17.4131C8.8298 17.4131 10.0994 18.1631 12.8477 18.1631C15.6173 18.1631 16.8602 17.4131 17.6477 17.4131C20.1977 17.4131 22.2762 19.2318 22.2762 21.4631V22.6631ZM12.8477 14.4131C17.1066 14.4131 20.5619 11.3896 20.5619 7.66309C20.5619 3.93652 17.1066 0.913086 12.8477 0.913086C8.58873 0.913086 5.13337 3.93652 5.13337 7.66309C5.13337 11.3896 8.58873 14.4131 12.8477 14.4131ZM12.8477 3.16309C15.6816 3.16309 17.9905 5.1834 17.9905 7.66309C17.9905 10.1428 15.6816 12.1631 12.8477 12.1631C10.0137 12.1631 7.7048 10.1428 7.7048 7.66309C7.7048 5.1834 10.0137 3.16309 12.8477 3.16309Z" fill="#283760" />
          </svg>          <span>المستخدمون</span>
        </NavLink>
        <NavLink to="/contacts" className={`menu-item IB_lineHeight22 ${activePath === '/contacts' ? 'active' : ''}`}>
          <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.513 20.3629C20.513 19.7264 20.2321 19.1159 19.732 18.6658C19.2319 18.2157 18.5536 17.9629 17.8464 17.9629H9.84635C9.13911 17.9629 8.46083 18.2157 7.96074 18.6658C7.46064 19.1159 7.17969 19.7264 7.17969 20.3629" stroke="#283760" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M23.181 3.56348H4.51432C3.04156 3.56348 1.84766 4.63799 1.84766 5.96348V22.7635C1.84766 24.089 3.04156 25.1635 4.51432 25.1635H23.181C24.6537 25.1635 25.8477 24.089 25.8477 22.7635V5.96348C25.8477 4.63799 24.6537 3.56348 23.181 3.56348Z" stroke="#283760" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M13.8464 13.1633C15.3191 13.1633 16.513 12.0888 16.513 10.7633C16.513 9.4378 15.3191 8.36328 13.8464 8.36328C12.3736 8.36328 11.1797 9.4378 11.1797 10.7633C11.1797 12.0888 12.3736 13.1633 13.8464 13.1633Z" stroke="#283760" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8.51562 1.16309V3.56309M19.1823 1.16309V3.56309" stroke="#283760" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>            <span>جهات الاتصال</span>
        </NavLink>
        <NavLink to="/contactMessages" className={`menu-item IB_lineHeight22 ${activePath === '/contactMessages' ? 'active' : ''}`}>
          <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.513 20.3629C20.513 19.7264 20.2321 19.1159 19.732 18.6658C19.2319 18.2157 18.5536 17.9629 17.8464 17.9629H9.84635C9.13911 17.9629 8.46083 18.2157 7.96074 18.6658C7.46064 19.1159 7.17969 19.7264 7.17969 20.3629" stroke="#283760" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M23.181 3.56348H4.51432C3.04156 3.56348 1.84766 4.63799 1.84766 5.96348V22.7635C1.84766 24.089 3.04156 25.1635 4.51432 25.1635H23.181C24.6537 25.1635 25.8477 24.089 25.8477 22.7635V5.96348C25.8477 4.63799 24.6537 3.56348 23.181 3.56348Z" stroke="#283760" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M13.8464 13.1633C15.3191 13.1633 16.513 12.0888 16.513 10.7633C16.513 9.4378 15.3191 8.36328 13.8464 8.36328C12.3736 8.36328 11.1797 9.4378 11.1797 10.7633C11.1797 12.0888 12.3736 13.1633 13.8464 13.1633Z" stroke="#283760" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8.51562 1.16309V3.56309M19.1823 1.16309V3.56309" stroke="#283760" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>          <span>رسائل جهات الاتصال</span>
        </NavLink>

        {/* قسم الإعدادات مع القائمة الفرعية */}
        <NavLink to='/settings/system_settings' className={`menu-item IB_lineHeight22 ${activePath === '/settings' ? 'active' : ''}`} onClick={() => handleSubMenuToggle('settings')}>
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.4096 0.00683594C10.2234 0.00684181 10.042 0.0659466 9.89154 0.175638C9.74107 0.28533 9.62929 0.439948 9.57231 0.617224L8.60484 3.62343C8.1985 3.8222 7.80975 4.0456 7.43859 4.29714L4.34971 3.63223C4.16759 3.59334 3.97783 3.61327 3.80775 3.68914C3.63768 3.76501 3.49608 3.8929 3.40335 4.0544L0.965311 8.27434C0.872211 8.43575 0.832779 8.62255 0.852695 8.80781C0.872614 8.99307 0.950851 9.16722 1.07613 9.30514L3.19578 11.6447C3.1649 12.0933 3.1649 12.5435 3.19578 12.9921L1.07613 15.3351C0.950851 15.4731 0.872614 15.6472 0.852695 15.8325C0.832779 16.0177 0.872211 16.2045 0.965311 16.3659L3.40335 20.5877C3.49633 20.7488 3.63805 20.8764 3.8081 20.9519C3.97815 21.0274 4.16778 21.0471 4.34971 21.0081L7.43859 20.3431C7.80799 20.5929 8.1985 20.8181 8.60308 21.0169L9.57231 24.0231C9.62929 24.2003 9.74107 24.355 9.89154 24.4647C10.042 24.5743 10.2234 24.6335 10.4096 24.6335H15.2857C15.4719 24.6335 15.6533 24.5743 15.8038 24.4647C15.9542 24.355 16.066 24.2003 16.123 24.0231L17.0887 21.0186C17.4939 20.8204 17.8848 20.5941 18.2585 20.3414L21.3456 21.0081C21.5277 21.047 21.7175 21.027 21.8876 20.9512C22.0576 20.8753 22.1992 20.7474 22.292 20.5859L24.73 16.3659C24.8231 16.2045 24.8625 16.0177 24.8426 15.8325C24.8227 15.6472 24.7445 15.4731 24.6192 15.3351L22.4995 12.9921C22.5302 12.5447 22.5302 12.0956 22.4995 11.6482L24.6192 9.30514C24.7445 9.16722 24.8227 8.99307 24.8426 8.80781C24.8625 8.62255 24.8231 8.43575 24.73 8.27434L22.292 4.05264C22.199 3.89146 22.0573 3.76393 21.8872 3.68839C21.7172 3.61285 21.5275 3.59318 21.3456 3.63223L18.2585 4.2989C17.8856 4.04736 17.4951 3.82044 17.0887 3.62167L16.1212 0.617224C16.0644 0.440519 15.9532 0.28631 15.8034 0.176672C15.6537 0.0670329 15.4731 0.00758471 15.2875 0.00683594H10.4114H10.4096ZM11.0534 1.76588H14.6419L15.641 4.87411L16.3147 5.20305C16.6459 5.36512 16.9657 5.54966 17.2717 5.75539L17.8944 6.17756L21.0888 5.48802L22.883 8.59801L20.693 11.022L20.7458 11.7678C20.7711 12.1356 20.7711 12.5047 20.7458 12.8725L20.693 13.6183L22.8865 16.0423L21.0905 19.1523L17.8961 18.4645L17.2734 18.8849C16.9674 19.0906 16.6477 19.2752 16.3165 19.4372L15.6428 19.7662L14.6419 22.8744H11.0499L10.0473 19.7644L9.3753 19.4372C9.04446 19.2756 8.72529 19.091 8.42014 18.8849L7.7992 18.4645L4.60301 19.1523L2.80879 16.0423L5.00056 13.6183L4.94779 12.8725C4.92242 12.5041 4.92242 12.1344 4.94779 11.766L5.00056 11.0202L2.80703 8.59801L4.60301 5.48802L7.7992 6.17405L8.42014 5.75539C8.72529 5.54929 9.04446 5.36473 9.3753 5.20305L10.0473 4.87587L11.0517 1.76588H11.0534ZM12.8477 7.04301C11.4481 7.04301 10.1058 7.599 9.11616 8.58865C8.1265 9.5783 7.57052 10.9206 7.57052 12.3201C7.57052 13.7197 8.1265 15.062 9.11616 16.0516C10.1058 17.0413 11.4481 17.5973 12.8477 17.5973C14.2472 17.5973 15.5895 17.0413 16.5792 16.0516C17.5688 15.062 18.1248 13.7197 18.1248 12.3201C18.1248 10.9206 17.5688 9.5783 16.5792 8.58865C15.5895 7.599 14.2472 7.04301 12.8477 7.04301ZM12.8477 8.80206C13.7807 8.80206 14.6756 9.17271 15.3353 9.83248C15.9951 10.4923 16.3657 11.3871 16.3657 12.3201C16.3657 13.2532 15.9951 14.148 15.3353 14.8078C14.6756 15.4676 13.7807 15.8382 12.8477 15.8382C11.9146 15.8382 11.0198 15.4676 10.36 14.8078C9.70022 14.148 9.32957 13.2532 9.32957 12.3201C9.32957 11.3871 9.70022 10.4923 10.36 9.83248C11.0198 9.17271 11.9146 8.80206 12.8477 8.80206Z" fill="#283760" />
          </svg>          <span>الاعدادات</span>
          <span className="icon-row">
            <IoIosArrowBack />
          </span>
        </NavLink>

        {openSubMenu === 'settings' && (
          <div className='HJ_AllSettings'>
            <div className="menu-subitem">
              <NavLink to='/settings/system_settings' className={`IB_SubMenu_LinkTo ${activePath === '/settings/system_settings' ? 'HJ_active' : ''}`}>
                <img className="IB_arrow" src={arrow_small} alt="arrow" />
                <span className='IB_Space'>اعدادات النظام</span>
              </NavLink>
            </div>
            <div className="menu-subitem">
              <NavLink to='/settings/certificates' className={`IB_SubMenu_LinkTo ${activePath === '/settings/certificates' ? 'HJ_active' : ''}`}>
                <img className="IB_arrow" src={arrow_small} alt="arrow" />
                <span className='IB_Space'>الشهادات</span>
              </NavLink>
            </div>
            <div className="menu-subitem">
              <NavLink to='/settings/privacy_policy' className={`IB_SubMenu_LinkTo ${activePath === '/settings/privacy_policy' ? 'HJ_active' : ''}`}>
                <img className="IB_arrow" src={arrow_small} alt="arrow" />
                <span className='IB_Space'>سياسة الخصوصية</span>
              </NavLink>
            </div>

            <div className="menu-subitem">
              <li className="IB_SubMenu_LinkTo" >
                <button onClick={() => handleOpenPages('settings/pages_settings/home')} className='HJ_Style_Pages'>
                  <img className="IB_arrow" src={arrow_small} alt="arrow" />
                  <span className='IB_Space'> صفحات</span>
                </button>
                {isOpen && (
                  <ul className='HJ_List_Pages'>
                    <li className={`IB_Pages_LinkToHome IB_Pages_LinkTo  ${selectedItem === 'settings/pages_settings/home' ? 'HJ_active' : ''}`}>
                      <NavLink to="settings/pages_settings/home" onClick={() => handleItemClick('settings/pages_settings/home')}> الصفحة الرئيسية</NavLink>
                    </li>
                    <li className={`IB_Pages_LinkToAbout IB_Pages_LinkTo ${selectedItem === 'settings/pages_settings/about' ? 'HJ_active' : ''}`}>
                      <NavLink to="/settings/pages_settings/about" onClick={() => handleItemClick('settings/pages_settings/about')} > صفحة حول</NavLink>
                    </li>

                  </ul>
                )}
              </li>
            </div>
          </div>

        )}
        <NavLink to="/info" className={`menu-item IB_lineHeight22 ${activePath === '/info' ? 'active' : ''}`}>
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.8477 24.1631C6.22006 24.1631 0.847656 18.7907 0.847656 12.1631C0.847656 5.53549 6.22006 0.163086 12.8477 0.163086C19.4753 0.163086 24.8477 5.53549 24.8477 12.1631C24.8477 18.7907 19.4753 24.1631 12.8477 24.1631ZM12.8477 21.7631C15.3937 21.7631 17.8355 20.7517 19.6359 18.9513C21.4362 17.151 22.4477 14.7092 22.4477 12.1631C22.4477 9.61701 21.4362 7.17521 19.6359 5.37486C17.8355 3.57451 15.3937 2.56309 12.8477 2.56309C10.3016 2.56309 7.85978 3.57451 6.05943 5.37486C4.25908 7.17521 3.24766 9.61701 3.24766 12.1631C3.24766 14.7092 4.25908 17.151 6.05943 18.9513C7.85978 20.7517 10.3016 21.7631 12.8477 21.7631ZM11.6477 6.16309H14.0477V8.56309H11.6477V6.16309ZM11.6477 10.9631H14.0477V18.1631H11.6477V10.9631Z" fill="#283760" />
          </svg>          <span>معلومات</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
