import React from "react";

function Logo({ logomark, logotype }) {
  return (
    <div className="flex items-center space-x-4">
     
      <img
        src={logomark}
        alt="Company Logo"
        className="w-12 h-12 object-contain" 
      />
      
      <img
        src={logotype}
        alt="Company Name"
        className="h-6 object-contain" 
      />
    </div>
  );
}

export default Logo;
