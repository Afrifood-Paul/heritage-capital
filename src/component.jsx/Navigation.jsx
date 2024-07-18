import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import logo from "../assets/logo.png";
import { TiArrowRightOutline } from "react-icons/ti";
import { FaBars, FaTimes } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import { FiPlus } from "react-icons/fi";

const Navigation = () => {
  // state for activeness
  const [activeItem, setActiveItem] = useState("home");

  //menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // State variables to track open/close state of each section
  const [isOpenAbout, setIsOpenAbout] = useState(false);
  const [isOpenProduct, setIsOpenProduct] = useState(false);
  const [isOpenResearch, setIsOpenResearch] = useState(false);
  const [isOpenReg, setIsOpenReg] = useState(false);
  const [isOpenDownload, setIsOpenDownload] = useState(false);

  // Function to toggle section open/close based on section name
  const handleMouseToggle = (section, isOpen) => {
    switch (section) {
      case "about":
        setIsOpenAbout(isOpen);
        break;
      case "product":
        setIsOpenProduct(isOpen);
        break;
      case "research":
        setIsOpenResearch(isOpen);
        break;
      case "reg":
        setIsOpenReg(isOpen);
        break;
      case "download":
        setIsOpenDownload(isOpen);
        break;
      default:
        break;
    }
  };

  // Event handler for mouse enter
  const handleMouseEnter = (section) => {
    handleMouseToggle(section, true);
  };

  // Event handler for mouse leave
  const handleMouseLeave = (section) => {
    handleMouseToggle(section, false);
  };

  //Active Item action
  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  const handleMouseEnterContact = () => {
    setIsOpenContact(true);
  };

  const handleMouseLeaveContact = () => {
    setIsOpenContact(false);
  };

  const handleFiPlusClick = () => {
    setIsOpenAbout(!isOpenAbout); // Toggle dropdown visibility
  };

  const handleFiPlusClickPro = () => {
    setIsOpenProduct(!isOpenProduct);
  };

  const handleFiPlusClickRes = () => {
    setIsOpenResearch(!isOpenResearch);
  };

  const handleFiPlusClickReg = () => {
    setIsOpenReg(!isOpenReg);
  };

  const handleFiPlusClickDown = () => {
    setIsOpenDownload(!isOpenDownload);
  };

  return (
    <header className="xl:px-10 px-4 fixed bg-[#fff] border-t-4 border-[#B49132] z-10 top-0 right-0 left-0">
      <nav className="flex justify-between items-center container md:py-0">
        <div className="logo py-5 cursor-pointer">
          <img src={logo} alt="logo" className="w-[150px]" />
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes />
            ) : (
              <FaBars className="w-10 h-8 text-[#fff] bg-[#B49132] p-1" />
            )}
          </button>
        </div>

        <div className="hidden lg:block text-[#9d9d9d] text-[17px] font-semibold cursor-pointer">
          <ul className="flex 2xl:gap-10 lg:gap-2 gap-5">
            <li
              className={activeItem === "home" ? "active" : ""}
              onClick={() => handleItemClick("home")}
            >
              <Link to="/">Home</Link>
            </li>

            <li
              className="relative flex items-center gap-2"
              // onMouseEnter={handleMouseEnterAbout}
              // onMouseLeave={handleMouseLeaveAbout}
              onMouseEnter={() => handleMouseEnter("about")}
              onMouseLeave={() => handleMouseLeave("about")}
            >
              <Link
                to="/about/WhoweAre"
                className={`hover:text-[#B49132] hover:border-b-[3px] hover:border-[#B49132] ${
                  activeItem === "about" ? "active" : ""
                }`}
                onClick={() => handleItemClick("about")}
              >
                About Us
              </Link>
              <IoIosArrowDown className="text-xl" />
              {isOpenAbout && (
                <div className="bg-[#03003a] absolute top-7 flex flex-col items-start rounded-lg p-2 w-[190%]">
                  <ul className="text-white font-medium flex flex-col gap-5 ps-2 relative">
                    <li
                      className={` border-gray-500 hover:text-gray-500 w-[75%] ${
                        activeItem === "who we are" ? "active" : ""
                      }`}
                    >
                      <Link to="/about/WhoweAre">Who We Are</Link>
                    </li>
                    <li className=" border-gray-500 hover:text-gray-500 w-[75%]">
                      Our Company
                    </li>
                    <li className="hover:border-b-2 border-gray-500 hover:text-gray-500">
                      Management Team
                    </li>
                    <li className="hover:border-b-2 border-gray-500 hover:text-gray-500">
                      Board Of Directors
                    </li>
                  </ul>
                </div>
              )}
            </li>

            <li
              className="relative flex items-center gap-2"
              onMouseEnter={() => handleMouseEnter("product")}
              onMouseLeave={() => handleMouseLeave("product")}
            >
              <Link
                to="/about"
                className={`hover:text-[#B49132] hover:border-b-[3px] hover:border-[#B49132] ${
                  activeItem === "product" ? "active" : ""
                }`}
                onClick={() => handleItemClick("product")}
              >
                Product & Services
              </Link>
              <IoIosArrowDown className="text-xl" />
              {isOpenProduct && (
                <div className="bg-[#03003a] absolute top-7 flex flex-col items-start rounded-lg p-2 w-[140%]">
                  <ul className="text-white font-medium flex flex-col gap-5 ps-2">
                    <li className="border-gray-500 hover:text-gray-500 w-[50%]">
                      Our Products
                    </li>
                    <li className="border-gray-500 hover:text-gray-500">
                      Stock Brokerage & Dealing
                    </li>
                    <li className="border-gray-500 hover:text-gray-500 w-[80%]">
                      Investment Advisory
                    </li>
                    <li className="border-gray-500 hover:text-gray-500 w-[70%]">
                      Financial Planning
                    </li>
                    <li className="border-gray-500 hover:text-gray-500">
                      Fixed Income Investment
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li
              className="relative flex items-center gap-2"
              onMouseEnter={() => handleMouseEnter("research")}
              onMouseLeave={() => handleMouseLeave("research")}
            >
              <Link
                to="/about"
                className={`hover:text-[#B49132] hover:border-b-[3px] hover:border-[#B49132] ${
                  activeItem === "research" ? "active" : ""
                }`}
                onClick={() => handleItemClick("research")}
              >
                Research
              </Link>
              <IoIosArrowDown className="text-xl" />
              {isOpenResearch && (
                <div className="bg-[#03003a] absolute top-7 flex flex-col items-start rounded-lg p-2 w-[200%]">
                  <ul className="text-white font-medium flex flex-col gap-5 ps-2">
                    <li className="border-gray-500 hover:text-gray-500">
                      Current Price List
                    </li>
                    <li className="border-gray-500 hover:text-gray-500 w-[70%]">
                      Top Gainers
                    </li>
                    <li className="border-gray-500 hover:text-gray-500 w-[65%]">
                      Top Losers
                    </li>
                    <li className="border-gray-500 hover:text-gray-500 w-[80%]">
                      Our Research
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li
              className="relative flex items-center gap-2"
              onMouseEnter={() => handleMouseEnter("reg")}
              onMouseLeave={() => handleMouseLeave("reg")}
            >
              <Link
                to="/about"
                className={`hover:text-[#B49132] hover:border-b-[3px] hover:border-[#B49132] ${
                  activeItem === "reg" ? "active" : ""
                }`}
                onClick={() => handleItemClick("reg")}
              >
                Registrations
              </Link>
              <IoIosArrowDown className="text-xl" />
              {isOpenReg && (
                <div className="bg-[#03003a] absolute top-7 flex flex-col items-start rounded-lg p-2 w-[170%]">
                  <ul className="text-white font-medium flex flex-col gap-5 ps-2">
                    <div className="flex gap-5 items-center">
                      <li className="hover:text-gray-500">
                        Online Registration
                      </li>
                      <TiArrowRightOutline />
                    </div>
                    <li className="hover:text-gray-500">
                      Offline Registration
                    </li>
                  </ul>
                </div>
              )}
            </li>

            <li
              className="relative flex items-center gap-2"
              onMouseEnter={() => handleMouseEnter("download")}
              onMouseLeave={() => handleMouseLeave("download")}
            >
              <Link
                to="/about"
                className={`hover:text-[#B49132] hover:border-b-[3px] hover:border-[#B49132] ${
                  activeItem === "download" ? "active" : ""
                }`}
                onClick={() => handleItemClick("download")}
              >
                Download
              </Link>
              <IoIosArrowDown className="text-xl" />
              {isOpenDownload && (
                <div className="bg-[#03003a] absolute top-7 flex flex-col items-start rounded-lg p-2 w-[170%]">
                  <ul className="text-white font-medium flex flex-col gap-5 ps-2">
                    <li className="hover:border-b-2 border-gray-500 hover:text-gray-500">
                      Individual Account
                    </li>
                    <li className="border-gray-500 hover:text-gray-500">
                      Corporate Account
                    </li>
                    <li className="border-gray-500 hover:text-gray-500 w-[75%]">
                      Joint Account
                    </li>
                    <li className="border-gray-500 hover:text-gray-500 w-[80%]">
                      Minor Account
                    </li>
                    <li className="border-gray-500 hover:text-gray-500 w-[80%]">
                      Minor Account
                    </li>
                  </ul>
                </div>
              )}
            </li>

            <li
              className={`hover:text-[#B49132] hover:border-b-[3px] hover:border-[#B49132] ${
                activeItem === "contact" ? "active" : ""
              }`}
              onClick={() => handleItemClick("contact")}
              onMouseEnter={handleMouseEnterContact}
              onMouseLeave={handleMouseLeaveContact}
            >
              <Link to="/contact">Contact Us</Link>
            </li>
            {/* Other menu items */}
          </ul>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-[#fff] absolute left-0 top-[0px] w-[100%] h-screen">
            <div className="lg:hidden flex justify-between items-center border-b-[1px] border-gray-200 shadow-sm">
              <div className="logo py-5 cursor-pointer px-2">
                <img src={logo} alt="logo" className="w-[150px]" />
              </div>

              <button onClick={toggleMenu} className="px-2">
                {isMenuOpen ? (
                  <LiaTimesSolid className="w-11 h-11 text-[] p-1" />
                ) : (
                  <FaBars className="w-10 h-8 text-[#fff] bg-[#B49132] p-1" />
                )}
              </button>
            </div>

            <ul className="flex flex-col gap-4 mt-4 space-y-2">
              <li
                className={`px-3 font-semibold text-lg text-gray-400 ${
                  activeItem === "home" ? "active" : ""
                }`}
                onClick={() => handleItemClick("home")}
              >
                <Link to="/">Home</Link>
              </li>

              <li
                className="relative flex items-center justify-between px-3 font-semibold text-lg text-gray-400 z-50 "
                onClick={handleFiPlusClick}
              >
                <Link to="/about">About Us</Link>
                <FiPlus
                  className={`text-lg font-extrabold text-gray-600`}
                  onClick={handleFiPlusClick}
                />
                {isOpenAbout && (
                  <div className="bg-gray-300 absolute top-7 flex flex-col items-start p-2 w-[190%] ">
                    <ul className="text-gray-500 text-sm font-medium flex flex-col gap-5 ps-2 relative">
                      <li
                        className={`hover:border-b-2 border-gray-500 hover:text-gray-500 w-[65%] ${
                          activeItem === "who we are" ? "active" : ""
                        }`}
                      >
                        Who we are
                      </li>
                      <li className="hover:border-b-2 border-gray-500 hover:text-gray-500 w-[75%]">
                        Our Company
                      </li>
                      <li className="hover:border-b-2 border-gray-500 hover:text-gray-500">
                        Management Team
                      </li>
                      <li className="hover:border-b-2 border-gray-500 hover:text-gray-500">
                        Board Of Directors
                      </li>
                    </ul>
                  </div>
                )}
              </li>

              <li
                className="relative flex items-center justify-between px-3 font-semibold text-lg text-gray-400 z-40"
                onClick={handleFiPlusClickPro}
              >
                <Link to="/about">Product & Services</Link>
                <FiPlus className="text-lg font-extrabold text-gray-600" />
                {isOpenProduct && (
                  <div className="bg-gray-300 absolute top-7 flex flex-col items-start rounded-lg p-2 w-[140%]">
                    <ul className="text-gray-500 text-sm font-medium flex flex-col gap-5 ps-2">
                      <li className="border-gray-500 hover:text-gray-500 w-[50%]">
                        Our Products
                      </li>
                      <li className="border-gray-500 hover:text-gray-500">
                        Stock Brokerage & Dealing
                      </li>
                      <li className="border-gray-500 hover:text-gray-500 w-[80%]">
                        Investment Advisory
                      </li>
                      <li className="border-gray-500 hover:text-gray-500 w-[70%]">
                        Financial Planning
                      </li>
                      <li className="border-gray-500 hover:text-gray-500">
                        Fixed Income Investment
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li
                className="relative flex items-center justify-between px-3 font-semibold text-lg text-gray-400 z-30"
                onClick={handleFiPlusClickRes}
              >
                <Link to="/about">Research</Link>
                <FiPlus className="text-lg font-extrabold text-gray-600" />
                {isOpenResearch && (
                  <div className="bg-gray-300 absolute top-7 flex flex-col items-start rounded-lg p-2 w-[200%]">
                    <ul className="text-gray-500 text-sm font-medium flex flex-col gap-5 ps-2">
                      <li className="border-gray-500 hover:text-gray-500">
                        Current Price List
                      </li>
                      <li className="border-gray-500 hover:text-gray-500 w-[70%]">
                        Top Gainers
                      </li>
                      <li className="border-gray-500 hover:text-gray-500 w-[65%]">
                        Top Losers
                      </li>
                      <li className="border-gray-500 hover:text-gray-500 w-[80%]">
                        Our Research
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li
                className="relative flex items-center justify-between px-3 font-semibold text-lg text-gray-400 z-20"
                onClick={handleFiPlusClickReg}
              >
                <Link to="/about">Registrations (Online)</Link>
                <FiPlus className="text-lg font-extrabold text-gray-600" />
                {isOpenReg && (
                  <div className="bg-gray-300 absolute top-7 flex flex-col items-start rounded-lg p-2 w-[170%]">
                    <ul className="text-gray-500 text-sm font-medium flex flex-col gap-5 ps-2">
                      <div className="flex gap-5 items-center">
                        <li className="hover:text-gray-500">
                          Online Registration
                        </li>
                        <TiArrowRightOutline />
                      </div>
                      <li className="hover:text-gray-500">
                        Offline Registration
                      </li>
                    </ul>
                  </div>
                )}
              </li>

              <li
                className="relative flex items-center justify-between px-3 font-semibold text-lg text-gray-400 z-10"
                onClick={handleFiPlusClickDown}
              >
                <Link to="/about">Download (Offline Registration)</Link>
                <FiPlus className="text-lg font-extrabold text-gray-600" />
                {isOpenDownload && (
                  <div className="bg-gray-300 absolute top-7 flex flex-col items-start rounded-lg p-2 w-[170%]">
                    <ul className="text-gray-500 text-sm font-medium flex flex-col gap-5 ps-2">
                      <li className="hover:border-b-2 border-gray-500 hover:text-gray-500">
                        Individual Account
                      </li>
                      <li className="border-gray-500 hover:text-gray-500">
                        Corporate Account
                      </li>
                      <li className="border-gray-500 hover:text-gray-500 w-[75%]">
                        Joint Account
                      </li>
                      <li className="border-gray-500 hover:text-gray-500 w-[80%]">
                        Minor Account
                      </li>
                      <li className="border-gray-500 hover:text-gray-500 w-[80%]">
                        Minor Account
                      </li>
                    </ul>
                  </div>
                )}
              </li>

              <li
                className={`hover:text-[#B49132] hover:border-b-[3px] hover:border-[#B49132] px-3 font-semibold text-lg text-gray-400 ${
                  activeItem === "contact" ? "active" : ""
                }`}
                onClick={() => handleItemClick("contact")}
                onMouseEnter={handleMouseEnterContact}
                onMouseLeave={handleMouseLeaveContact}
              >
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
