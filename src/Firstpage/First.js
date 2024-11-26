import React, { useState, useEffect } from "react";
import NewFeatureBanner from "./NewFeatureBanner";
import { PlayIcon } from "@heroicons/react/outline";
import ContentImageDesktop from "../assets/Content.png";
import ContentImageMobile from "../assets/Contentmobile2.png";

function First() {
  const [contentImage, setContentImage] = useState(ContentImageDesktop);

  useEffect(() => {
    const updateImage = () => {
      if (window.innerWidth <= 768) {
        setContentImage(ContentImageMobile);
      } else {
        setContentImage(ContentImageDesktop);
      }
    };

    updateImage();
    window.addEventListener("resize", updateImage);

    return () => window.removeEventListener("resize", updateImage);
  }, []);

  return (
    <div className="bg-white flex flex-col items-center justify-start pt-6 sm:pt-12 relative">
      <div className="flex justify-center w-full px-4 mb-4">
        <NewFeatureBanner />
      </div>

      <div className="w-full px-4 lg:px-20 text-center">
        <h1 className="text-[36px] md:text-[48px] lg:text-[60px] font-semibold leading-tight mb-2 lg:mb-3 whitespace-normal">
          Beautiful analytics <br className="block md:hidden" />
          to grow smarter
        </h1>

        <p className="text-sm md:text-base lg:text-lg mb-4 md:mb-6 text-gray-500 leading-relaxed">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, <br className="hidden md:block" />
          and retain more users. Trusted by over 4,000 startups.
        </p>

        <div className="w-full flex flex-col md:flex-row justify-center items-center md:space-x-4 mb-4 space-y-2 md:space-y-0">
          <button className="bg-white text-gray-700 border border-gray-300 font-bold py-3 px-4 md:px-6 lg:py-4 lg:px-8 rounded w-full md:w-auto flex items-center justify-center">
            <PlayIcon className="h-5 w-5 text-black mr-2" />
            Demo
          </button>
          <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-4 md:px-6 lg:py-4 lg:px-8 rounded w-full md:w-auto">
            Sign Up
          </button>
        </div>

        <div className="w-full flex justify-center">
          <img
            src={contentImage}
            alt="Footer Illustration"
            className="object-contain mx-auto mt-4 sm:mt-0"
          />
        </div>
      </div>
    </div>
  );
}

export default First;
