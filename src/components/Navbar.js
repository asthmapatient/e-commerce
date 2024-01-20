import React from "react";
import {
  FaBars,
  FaCross,
  FaSearch,
  FaShoppingBag,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import logo from "../logo.png";

export const Navbar = () => {
  const navItems = [
    "Jewelry & Accessories",
    "Clothing & Shoes",
    "Home & Living",
    "Wedding & Party",
    "Toys & Entertainment",
    "Art & Collectibles",
    "Craft Supplies & Tools",
  ];

  const [menuCLick, setMenuClick] = React.useState(false);
  function isMenuClicked() {
    setMenuClick(!menuCLick);
  }
  return (
    <header>
      <nav className=" md:mx-28 flex justify-between items-center md:py-4 pt-6 pb-3 ">
        <FaSearch className=" hidden sm:block" />
        <img className="ps-4 sm:ps-0" src={logo} alt="" />
        <div className=" items-center gap-4 font-black  sm:flex hidden ">
          <a href="" className=" flex gap-2 items-center">
            <FaUser />
            Account
          </a>
          <a href="" className=" flex gap-2 items-center">
            <FaShoppingBag />
            Shopping
          </a>
        </div>

        <button onClick={isMenuClicked} className="sm:hidden pe-5">
          {menuCLick ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
      <hr />
      <div className="md:mx-28 lg:flex justify-between hidden">
        {navItems.map((navItem) => {
          return (
            <a href="" key={navItem} className=" hover:text-yellow-300">
              {navItem}
            </a>
          );
        })}
      </div>

      {/* on small device only */}
      <div
        className={`${
          menuCLick
            ? "bg-black text-white flex-col px-10 py-5 mx-4 justify-center sm:hidden rounded-lg  "
            : "hidden"
        }`}
      >
        {navItems.map((navItem) => {
          return (
            <a
              href=""
              key={navItem}
              className=" text-center block hover:text-yellow-300"
            >
              {navItem}
            </a>
          );
        })}
      </div>
    </header>
  );
};
