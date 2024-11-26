import React from 'react';
import Content2 from '../../assets/Content2.png';
import ContentMobile from '../../assets/Contentmobile.png'; 
import FeatureCard2 from './FeautireCard2';

function Feature2() {
  return (
    <div className="pt-20 text-center border-b border-gray-300 pb-24">
    
      <span className="bg-purple-50 text-purple-700 rounded-full px-3 py-1 text-[14px] font-semi border border-purple-300">
        Features
      </span>
      <div className="font-semibold text-[36px] mt-4">
        Cutting-edge features for advanced analytics
      </div>
      <div className="text-gray-500 text-[20px] pt-5">
        Powerful, self-serve product and growth analytics to help you convert,
        engage, <br />
        and retain more users. Trusted by over 4,000 startups.
      </div>

     
      <div className="relative mt-10 flex flex-col items-center">
        <img
          src={Content2}
          alt="Feature Illustration"
          className="hidden sm:block object-contain mb-[-50px]" 
        />
        <img
          src={ContentMobile}
          alt="Mobile Feature Illustration"
          className="block sm:hidden object-contain mb-[-50px]" 
        />
      </div>
      <div className="mt-20 px-4 sm:px-12 lg:-mt-10 lg:pl-28">
  <FeatureCard2 />
</div>

    </div>
  );
}

export default Feature2;
