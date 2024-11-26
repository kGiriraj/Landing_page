import React from "react";
import profileImage from "../assets/Dropdown.png";
import squaredImage from "../assets/square.png";
import arrow from "../assets/arrow_up.png";
import alt from "../assets/alt.png"; 
import happy from "../assets/happy.png"; 
import home from "../assets/home.png"; 
import stack from "../assets/stack.png"; 

import {
  UserIcon,
  CogIcon,
  UsersIcon,
  UserAddIcon,
  QuestionMarkCircleIcon,
  CubeIcon,
  LogoutIcon,
  LightningBoltIcon,
} from "@heroicons/react/outline";

function Sidebar() {
  return (
    <div className="absolute top-16 right-32 w-64 bg-white shadow-lg rounded-lg z-50">
      {/* Profile Section Above Menu Items */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-4 mb-4">
          <img
            src={profileImage}
            alt="Profile"
            className="h-10 w-10 rounded-full"
          />
          <div>
            <p className="text-gray-800 font-semibold">Olive Rhye</p>
            <p className="text-gray-600 text-sm">olivia@untitledui.com</p>
          </div>
        </div>
      </div>

      {/* Menu Items Below Profile */}
      <ul className="p-4 space-y-4 text-gray-700">
        {/* View Profile */}
        <li className="flex items-center justify-between hover:text-gray-900 cursor-pointer">
          <div className="flex items-center space-x-3">
            <UserIcon className="h-5 w-5 text-gray-500" />
            <span>View Profile</span>
          </div>
          <div className="flex items-center space-x-1">
            <img
              src={squaredImage} 
              alt="Square Icon"
              className="h-3 w-3"
            />
            <span className="text-gray-500 text-sm">K→P</span>
          </div>
        </li>

        {/* Settings */}
        <li className="flex items-center justify-between hover:text-gray-900 cursor-pointer">
          <div className="flex items-center space-x-3">
            <CogIcon className="h-5 w-5 text-gray-500" />
            <span>Settings</span>
          </div>
          <div className="flex items-center space-x-1">
            <img
              src={squaredImage} 
              alt="Square Icon"
              className="h-3 w-3"
            />
            <span className="text-gray-500 text-sm">S</span>
          </div>
        </li>

   
        <li className="flex items-center justify-between hover:text-gray-900 cursor-pointer border-b border-gray-200 pb-4">
          <div className="flex items-center space-x-3">
            <LightningBoltIcon className="h-5 w-5 text-gray-500" />
            <span>Keyboard Shortcuts</span>
          </div>
          <span className="text-gray-500 text-sm">?</span>
        </li>

    
        <li className="flex items-center justify-between hover:text-gray-900 cursor-pointer">
  <div className="flex items-center space-x-3">
  
    <img
      src={home}
      alt="Home Icon"
      className="h-4 w-4" 
    />
    <span>Company Profile</span>
  </div>
  <div className="flex items-center space-x-1">
    <img
      src={squaredImage} 
      alt="Square Icon"
      className="h-3 w-3"
    />
    <span className="text-gray-500 text-sm">K→C</span>
  </div>
</li>


      
        <li className="flex items-center justify-between hover:text-gray-900 cursor-pointer">
          <div className="flex items-center space-x-3">
            <UsersIcon className="h-5 w-5 text-gray-500" />
            <span>Team</span>
          </div>
          <div className="flex items-center space-x-1">
            <img
              src={squaredImage} 
              alt="Square Icon"
              className="h-3 w-3"
            />
            <span className="text-gray-500 text-sm">K→T</span>
          </div>
        </li>

        
        <li className="flex items-center justify-between hover:text-gray-900 cursor-pointer border-b border-gray-200 pb-4">
          <div className="flex items-center space-x-3">
            <UserAddIcon className="h-5 w-5 text-gray-500" />
            <span>Invite Colleagues</span>
          </div>
          <div className="flex items-center space-x-1">
            <img
              src={squaredImage} 
              alt="Square Icon"
              className="h-3 w-3"
            />
            <span className="text-gray-500 text-sm">I</span>
          </div>
        </li>

      
        <li className="flex items-center justify-between hover:text-gray-900 cursor-pointer">
  <div className="flex items-center space-x-3">
 
    <img
      src={stack} 
      alt="Stack Icon"
      className="h-5 w-5" 
    />
    <span>Changelog</span>
  </div>
  <div className="flex items-center space-x-1">
    <img
      src={squaredImage} 
      alt="Square Icon"
      className="h-3 w-3"
    />
    <span className="text-gray-500 text-sm">K→C</span>
  </div>
</li>


       
        <li className="flex items-center justify-between hover:text-gray-900 cursor-pointer">
  <div className="flex items-center space-x-3">
   
    <img
      src={happy}
      alt="Happy Icon"
      className="h-3 w-3"
    />
    <span>Slack Community</span>
  </div>
  <div className="flex items-center space-x-1">
    <img
      src={squaredImage} 
      alt="Square Icon"
      className="h-3 w-3"
    />
    <span className="text-gray-500 text-sm">K→S</span>
  </div>
</li>


     
        <li className="flex items-center justify-between hover:text-gray-900 cursor-pointer">
          <div className="flex items-center space-x-3">
            <QuestionMarkCircleIcon className="h-5 w-5 text-gray-500" />
            <span>Support</span>
          </div>
          <div className="flex items-center space-x-1">
            <img
              src={squaredImage} 
              alt="Square Icon"
              className="h-3 w-3"
            />
            <span className="text-gray-500 text-sm">/</span>
          </div>
        </li>

        {/* API */}
        <li className="flex items-center justify-between hover:text-gray-900 cursor-pointer border-b border-gray-200 pb-4">
          <div className="flex items-center space-x-3">
            <CubeIcon className="h-5 w-5 text-gray-500" />
            <span>API</span>
          </div>
          <div className="flex items-center space-x-1">
            <img
              src={squaredImage} 
              alt="Square Icon"
              className="h-3 w-3"
            />
            <span className="text-gray-500 text-sm">A</span>
          </div>
        </li>

        {/* Log Out */}
        <li className="flex items-center justify-between hover:text-gray-500 cursor-pointer">
          <div className="flex items-center space-x-3">
            <LogoutIcon className="h-5 w-5 text-gray-500" />
            <span>Log Out</span>
          </div>
          <div className="flex items-center space-x-0">
          <img
              src={alt} 
              alt="Square Icon"
              className="h-4 w-4 "
            />
            <img
              src={arrow} 
              alt="Square Icon"
              className="h-5 w-5"
            />
            <span className="text-gray-500 text-sm">A</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
