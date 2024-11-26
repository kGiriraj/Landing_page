import React from "react";
import Logomark from "../assets/Logomark.png";
import Logomark1 from "../assets/Logomark1.png";
import Logomark2 from "../assets/Logomark2.png";
import Logomark3 from "../assets/Logomark3.png";
import Logomark4 from "../assets/Logomark4.png";
import Logomark5 from "../assets/Logomark5.png";
import Logotype from "../assets/Logotype.png";
import Logotype1 from "../assets/Logotype1.png";
import Logotype2 from "../assets/Logotype2.png";
import Logotype3 from "../assets/Logotype3.png";
import Logotype4 from "../assets/Logotype4.png";
import Logotype5 from "../assets/Logotype5.png";

function Company() {
  return (
    <div className="text-center p-12 md:p-16 lg:p-20 xl:p-24">
      <h1 className="text-[16px]  mb-6" style={{ color: 'rgba(71, 84, 103, 1)' }}>
        Join 4,000+ companies already growing
      </h1>


      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-center mt-6 border-b border-gray-300 pb-12 sm:pb-24">
        {[
          { logomark: Logomark, logotype: Logotype },
          { logomark: Logomark1, logotype: Logotype1 },
          { logomark: Logomark2, logotype: Logotype2 },
          { logomark: Logomark3, logotype: Logotype3 },
          { logomark: Logomark4, logotype: Logotype4 },
          { logomark: Logomark5, logotype: Logotype5 },
        ].map((company, index) => (
          <div
            key={index}
            className="flex items-center justify-center space-x-2"
          >
         
            <img
              src={company.logomark}
              alt={`Company Logo ${index + 1}`}
              className="w-8 h-8 object-contain sm:w-12 sm:h-12"
            />
          
            <img
              src={company.logotype}
              alt={`Company Name ${index + 1}`}
              className="h-4 object-contain sm:h-6"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Company;
