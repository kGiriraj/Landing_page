import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon, MenuIcon, XIcon } from "@heroicons/react/solid";
import { useMediaQuery } from "react-responsive";
import Dropdown from "./Dropdown";
import Sidebar from "./Sidebar";
import logo from "../assets/Mainlogo.png";
import profileImage from "../assets/Dropdown.png";

function Navbar() {
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isResourceDropdownOpen, setIsResourceDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  
  const isLargeScreen = useMediaQuery({ query: "(min-width: 768px)" });

  const toggleProductDropdown = () => {
    if (isLargeScreen) {
      setIsProductDropdownOpen(!isProductDropdownOpen);
      setIsResourceDropdownOpen(false); 
    }
  };

  const toggleResourceDropdown = () => {
    if (isLargeScreen) {
      setIsResourceDropdownOpen(!isResourceDropdownOpen);
      setIsProductDropdownOpen(false); 
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left Section: Logo and Navigation Links */}
        <div className="flex items-center space-x-8">
          {/* Logo and Name */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-10 w-10" />
            <h1 className="text-xl font-bold text-gray-800">Untitled UI</h1>
          </div>

        
          <ul
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8 text-gray-700 md:static absolute top-16 left-0 w-full bg-white md:w-auto md:bg-transparent z-10`}
          >
            <li className="hover:text-gray-900 cursor-pointer">Home</li>

           
            <li
              className="hover:text-gray-900 cursor-pointer relative"
              onClick={toggleProductDropdown}
            >
              Product
              {isProductDropdownOpen && isLargeScreen ? (
                <ChevronUpIcon className="h-5 w-5 ml-1 inline-block text-gray-500" />
              ) : (
                <ChevronDownIcon className="h-5 w-5 ml-1 inline-block text-gray-500" />
              )}
              {isProductDropdownOpen && isLargeScreen && <Dropdown />}
            </li>

            
            <li
              className="hover:text-gray-900 cursor-pointer relative"
              onClick={toggleResourceDropdown}
            >
              Resource
              {isResourceDropdownOpen && isLargeScreen ? (
                <ChevronUpIcon className="h-5 w-5 ml-1 inline-block text-gray-500" />
              ) : (
                <ChevronDownIcon className="h-5 w-5 ml-1 inline-block text-gray-500" />
              )}
              {isResourceDropdownOpen && isLargeScreen && <Dropdown />}
            </li>

            <li className="hover:text-gray-900 cursor-pointer">Pricing</li>
          </ul>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden flex items-center">
          {isMenuOpen ? (
            <XIcon className="h-6 w-6 text-gray-700 cursor-pointer" onClick={toggleMenu} />
          ) : (
            <MenuIcon className="h-6 w-6 text-gray-700 cursor-pointer" onClick={toggleMenu} />
          )}
        </div>

        {/* Profile Logo */}
        <div onClick={toggleSidebar} className="cursor-pointer hidden md:block">
          <img src={profileImage} alt="Profile" className="h-10 w-10 rounded-full" />
        </div>
      </div>

      {/* Mobile Menu Hamberger Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden absolute top-0 left-0 w-full h-screen bg-white z-50 shadow-lg px-4`}
      >
        <div className="flex items-center justify-between py-4 border-b border-gray-200">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-10 w-10" />
            <h1 className="text-xl font-bold text-gray-800">Untitled UI</h1>
          </div>
       
          <XIcon
            className="h-6 w-6 text-gray-700 cursor-pointer"
            onClick={toggleMenu}
          />
        </div>

      
        <ul className="mt-6 space-y-6 text-gray-700 text-lg">
          <li className="hover:text-gray-900 cursor-pointer">Home</li>

       
          <li
            className="hover:text-gray-900 cursor-pointer flex justify-between items-center"
            onClick={toggleProductDropdown}
          >
            Product
            {isProductDropdownOpen ? (
              <ChevronUpIcon className="h-5 w-5 text-gray-500" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 text-gray-500" />
            )}
          </li>
          {isProductDropdownOpen && (
            <ul className="ml-6 mt-2 space-y-2 text-gray-600">
              
            </ul>
          )}

         
          <li
            className="hover:text-gray-900 cursor-pointer flex justify-between items-center"
            onClick={toggleResourceDropdown}
          >
            Resource
            {isResourceDropdownOpen ? (
              <ChevronUpIcon className="h-5 w-5 text-gray-500" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 text-gray-500" />
            )}
          </li>
          {isResourceDropdownOpen && (
            <ul className="ml-6 mt-2 space-y-2 text-gray-600">
             
            </ul>
          )}

          <li className="hover:text-gray-900 cursor-pointer">Pricing</li>
        </ul>

      
        <div className="mt-8 space-y-4 border-t border-gray-200 pt-4 text-gray-600 text-sm">
          <div className="grid grid-cols-2 gap-4">
            <a href="#">About us</a>
            <a href="#">Support</a>
            <a href="#">Press</a>
            <a href="#">Contact</a>
            <a href="#">Careers</a>
            <a href="#">Sitemap</a>
            <a href="#">Legal</a>
            <a href="#">Cookie settings</a>
          </div>
          <button className="w-full bg-purple-600 text-white py-2 rounded-md">
            Sign up
          </button>
          <button className="w-full border border-gray-300 text-gray-700 py-2 rounded-md">
            Log in
          </button>
        </div>
      </div>

      {isSidebarOpen && <Sidebar onClose={toggleSidebar} />}
    </nav>
  );
}

export default Navbar;
