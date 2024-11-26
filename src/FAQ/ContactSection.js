import React from "react";
import Logo1 from "../assets/Avatar1.png"; // Replace with your first logo path  
import Logo2 from "../assets/Avatar2.png"; // Replace with your second logo path
import Logo3 from "../assets/Avatar3.png"; // Replace with your third logo path

const ContactSection = () => {
  return (
    <div 
      className="flex flex-col items-center justify-center rounded-lg p-8 shadow-lg mx-4 sm:mx-12 lg:mx-28 my-12" 
      style={{ backgroundColor: 'rgba(249, 250, 251, 1)' }}
    >
    
      <div className="flex items-center mb-6 relative">
     
        <img
          src={Logo2}
          alt="Logo 1"
          className="w-12 h-12 sm:w-16 sm:h-16 object-contain z-10"
          style={{ marginRight: "-10%" }} 
        />
       
        <img
          src={Logo1}
          alt="Logo 2"
          className="w-12 h-12 sm:w-16 sm:h-16 object-contain z-20"
          style={{ marginTop: "-10px" }}
        />
      }
        <img
          src={Logo3}
          alt="Logo 3"
          className="w-12 h-12 sm:w-16 sm:h-16 object-contain z-10"
          style={{ marginLeft: "-10%" }} // Move Logo3 partially behind Logo2
        />
      </div>

    
      <h2 className="text-md sm:text-lg font-semibold text-gray-800">
        Still have questions?
      </h2>
      <p className="text-gray-500 text-center mb-6 text-sm sm:text-base md:text-[18px]">
        Can’t find the answer you’re looking for? Please chat with our friendly
        team.
      </p>


      <button className="bg-purple-500 text-white px-4 sm:px-6 py-2 rounded-md hover:bg-purple-600 transition">
        Get in touch
      </button>
    </div>
  );
};

export default ContactSection;
