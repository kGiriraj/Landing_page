import React from 'react';

function NewFeatureBanner() {
  return (
    <div className="bg-purple-50 px-1 h-[32px] rounded-full mb-4 border border-purple-300 flex flex-wrap justify-center items-center">
      <span className="bg-white text-[14px] text-purple-500  h-[24px] rounded-full px-2 py-0  border border-purple-300"style={{ color: "rgba(105, 65, 198, 1)" }}>
        New Feature
      </span>
      <a
  
        className=" ml-2 "style={{ color: "rgba(105, 65, 198, 1)" }}
      >
        Check out the team dashboard →
      </a>
    </div>
  );
}

export default NewFeatureBanner;
