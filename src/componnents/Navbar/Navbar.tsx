import "./Navbar.css";
import logout from "../../assets/images/navbar/logoutbtn.svg";
import logo from "../../assets/images/navbar/logo.svg";
const Navbar = () => {
  return (
    <div className="ne-navbar d-flex justify-between align-center">
      <div></div>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="logout d-flex align-center">
        <p className="logout-text">تسجيل الخروج</p>
        <div className="ne-logout-img">
          <img src={logout} alt="logout icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
