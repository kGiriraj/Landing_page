import React from "react";
import logo from "./assets/Mainlogo.png";

const Footer = () => {
  return (
    <div className="bg-white text-gray-600 pt-16 pb-8">
    
      <div
        className="text-center pb-16 pt-20 mb-12"
        style={{ backgroundColor: "rgba(249, 250, 251, 1)" }}
      >
        <h2 className="text-[36px] font-bold text-gray-800 mb-4">
          Start your free trial
        </h2>
        <p className="text-[20px] mb-6">
          Join over 4,000+ startups already growing with Untitled.
        </p>

       
        <div className="block sm:hidden text-center mt-6 w-full px-4">
        
          <button className="bg-purple-600 text-white w-full max-w-[400px] px-6 py-3 rounded-md font-medium hover:bg-purple-700 transition  mb-4">
            Get started
          </button>
          <button className="bg-white text-gray-700 w-full max-w-[400px] px-6 py-3 border border-gray-300 rounded-md font-medium hover:bg-gray-100 transitio ">
            Learn more
          </button>
        </div>

      
        <div className="hidden sm:flex justify-center space-x-4 pt-6 pb-12">
          <button className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition">
            Learn more
          </button>
          <button className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition">
            Get started
          </button>
        </div>
      </div>

 
      <div className="grid grid-cols-2 md:grid-cols-6 gap-8 py-6 px-8 md:px-20 bg-white">
    
        <div>
          <h4
            className="font-semibold text-[14px] mb-4"
            style={{ color: "rgba(102, 112, 133, 1)" }}
          >
            Product
          </h4>
          <ul
            className="space-y-2 text-[16px] font-semibold"
            style={{ color: "rgba(71, 84, 103, 1)" }}
          >
            <li><a  className="hover:disappear-reappear">Overview</a></li>
            <li><a className="hover:disappear-reappear">Features</a></li>
            <li>
              <a  className="hover:disappear-reappear">
                Solutions
                <span className="text-[12px] text-green-800 ml-2 bg-green-50 border border-red-200 rounded-full px-2 py-1">
                  New
                </span>
              </a>
            </li>
            <li><a  className="hover:disappear-reappear">Tutorials</a></li>
            <li><a  className="hover:disappear-reappear">Pricing</a></li>
            <li><a  className="hover:disappear-reappear">Releases</a></li>
          </ul>
        </div>

   
        <div>
          <h4
            className="font-semibold text-[14px] mb-4"
            style={{ color: "rgba(102, 112, 133, 1)" }}
          >
            Company
          </h4>
          <ul
            className="space-y-2 text-[16px] font-semibold"
            style={{ color: "rgba(71, 84, 103, 1)" }}
          >
            <li><a  className="hover:disappear-reappear">About us</a></li>
            <li><a  className="hover:disappear-reappear">Careers</a></li>
            <li><a  className="hover:disappear-reappear">Press</a></li>
            <li><a  className="hover:disappear-reappear">News</a></li>
            <li><a  className="hover:disappear-reappear">Media kit</a></li>
            <li><a  className="hover:disappear-reappear">Contact</a></li>
          </ul>
        </div>

      
        <div>
          <h4
            className="font-semibold text-[14px] mb-4"
            style={{ color: "rgba(102, 112, 133, 1)" }}
          >
            Resources
          </h4>
          <ul
            className="space-y-2 text-[16px] font-semibold"
            style={{ color: "rgba(71, 84, 103, 1)" }}
          >
            <li><a  className="hover:disappear-reappear">Blog</a></li>
            <li><a  className="hover:disappear-reappear">Newsletter</a></li>
            <li><a className="hover:disappear-reappear">Events</a></li>
            <li><a  className="hover:disappear-reappear">Help centre</a></li>
            <li><a  className="hover:disappear-reappear">Tutorials</a></li>
            <li><a  className="hover:disappear-reappear">Support</a></li>
          </ul>
        </div>

       
        <div>
          <h4
            className="font-semibold text-[14px] mb-4"
            style={{ color: "rgba(102, 112, 133, 1)" }}
          >
            Use cases
          </h4>
          <ul
            className="space-y-2 text-[16px] font-semibold"
            style={{ color: "rgba(71, 84, 103, 1)" }}
          >
            <li><a  className="hover:disappear-reappear">Startups</a></li>
            <li><a  className="hover:disappear-reappear">Enterprise</a></li>
            <li><a  className="hover:disappear-reappear">Government</a></li>
            <li><a  className="hover:disappear-reappear">SaaS</a></li>
            <li><a className="hover:disappear-reappear">Marketplaces</a></li>
            <li><a  className="hover:disappear-reappear">Ecommerce</a></li>
          </ul>
        </div>

       
        <div>
          <h4
            className="font-semibold text-[14px] mb-4"
            style={{ color: "rgba(102, 112, 133, 1)" }}
          >
            Social
          </h4>
          <ul
            className="space-y-2 text-[16px] font-semibold"
            style={{ color: "rgba(71, 84, 103, 1)" }}
          >
            <li><a className="hover:disappear-reappear">Twitter</a></li>
            <li><a  className="hover:disappear-reappear">LinkedIn</a></li>
            <li><a  className="hover:disappear-reappear">Facebook</a></li>
            <li><a  className="hover:disappear-reappear">GitHub</a></li>
            <li><a  className="hover:disappear-reappear">AngelList</a></li>
            <li><a className="hover:disappear-reappear">Dribbble</a></li>
          </ul>
        </div>

       
        <div>
          <h4
            className="font-semibold text-[14px] mb-4"
            style={{ color: "rgba(102, 112, 133, 1)" }}
          >
            Legal
          </h4>
          <ul
            className="space-y-2 text-[16px] font-semibold"
            style={{ color: "rgba(71, 84, 103, 1)" }}
          >
            <li><a  className="hover:disappear-reappear">Terms</a></li>
            <li><a  className="hover:disappear-reappear">Privacy</a></li>
            <li><a className="hover:disappear-reappear">Cookies</a></li>
            <li><a  className="hover:disappear-reappear">Licenses</a></li>
            <li><a className="hover:disappear-reappear">Settings</a></li>
            <li><a  className="hover:disappear-reappear">Contact</a></li>
          </ul>
        </div>
      </div>

      
      <div className="border-t bg-white border-gray-200 mt-12">
  <div className="flex flex-col md:flex-row items-start justify-between px-6 md:px-20 py-6 md:pt-10">
    
    <div className="flex items-center space-x-2 mb-4 md:mb-0">
      <img
        src={logo} // Use the imported logo
        alt="Logo"
        className="h-10 w-10"
      />
      <h1 className="text-lg md:text-xl font-bold text-gray-800">Untitled UI</h1>
    </div>

    
    <div className="text-sm text-center md:text-right text-gray-400">
      © 2077 Untitled UI. All rights reserved.
    </div>
  </div>
</div>

    </div>
  );
};

export default Footer;
