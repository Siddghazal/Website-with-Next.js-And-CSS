import { AiOutlineShopping } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { RiMenu2Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <div className="navbar">
        <div className="navbar-container">
          {/* Logo and Search */}
          <div className="logo-search">
            <h2 className="logo">Logo</h2>
            <input
              type="text"
              className="search-bar"
              placeholder="Search..."
            />
          </div>

          {/* Icons */}
          <div className="icons">
            <CiUser />
            <div className="cart-icon">
              <AiOutlineShopping />
              <div className="cart-count">0</div>
            </div>
            <RiMenu2Line />
          </div>
        </div>

        {/* Menu */}
        <div className="menu">
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">Blog</a>
          <a href="#">Pages</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
