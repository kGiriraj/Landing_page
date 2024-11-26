import React from "react";
import Logomark6 from "../assets/Logomark6.png"; // Correct relative path
import Logotype6 from "../assets/Logotype6.png"; // Correct relative path
import Avatar from "../assets/Avatar.png";

function Testimonial()
{
    return(

        <div className="pt-20 pb-20" style={{ backgroundColor: 'rgba(249, 250, 251, 1)' }}>

<div className="flex justify-center items-center space-x-2">
      <img
        src={Logomark6}
        alt="Company Logo"
        className="w-12 h-12 object-contain"
      />
      <img
        src={Logotype6}
        alt="Company Name"
        className="h-7 object-contain"
      />
    </div>
            
            <div className="text-center text-[36px] md:text-[48px]">We’ve been using Untitled to kick start every new <br />project and can’t imagine working without it.</div>
            
            <div className="text-center mt-10">
      
        <img
          src={Avatar}
          alt="Person Logo"
          className="w-16 h-16 mx-auto font-semibold object-cover rounded-full border-2 border-gray-300"
        />
      
        <div className="text-[18px] font-semibold mt-4">Candice Wu</div>
     
        <div className="text-[16px] text-gray-500 mt-2">Product Manager, Sisyphus</div>
      </div>
         </div>
    )
}

export default Testimonial;