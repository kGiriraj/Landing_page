import React, { useEffect, useState } from 'react';

function NewFeatureBanner() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 395);
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`bg-purple-50 px-2 ${
        isSmallScreen ? "h-auto flex-col" : "h-[32px] flex-row"
      } rounded-full mb-4 border border-purple-300 flex justify-center items-center`}
    >
      <span
        className="bg-white text-purple-500 h-[24px] rounded-full px-2 py-0 border border-purple-300"
        style={{
          fontSize: isSmallScreen ? "12px" : "14px",
          color: "rgba(105, 65, 198, 1)",
        }}
      >
        New Feature
      </span>
      <a
        href="#"
        className={`${
          isSmallScreen ? "mt-2 text-center" : "ml-2"
        } text-purple-500`}
        style={{
          color: "rgba(105, 65, 198, 1)",
          whiteSpace: isSmallScreen ? "normal" : "nowrap",
        }}
      >
        Check out the team dashboard →
      </a>
    </div>
  );
}

export default NewFeatureBanner;
