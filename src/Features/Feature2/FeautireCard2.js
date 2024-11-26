import React from "react";
import Icon from "../../assets/feaut/Featured.png";
import Icon1 from "../../assets/feaut/Featured1.png";
import Icon2 from "../../assets/feaut/Featured2.png";
import ForwardIcon from "../../assets/feaut/ForwardIcon.png";

function FeatureCard2() {
  const features = [
    {
      icon: Icon,
      title: "Share team inboxes",
      description:
        "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    },
    {
      icon: Icon1,
      title: "Deliver instant answers",
      description:
        "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    },
    {
      icon: Icon2,
      title: "Manage your team with reports",
      description:
        "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
    },
  ];

  return (
    <div className="container mx-auto  pb-10 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="text-center max-w-sm mx-auto">
            {/* Icon */}
            <div className="flex justify-center items-center w-16 h-16 mx-auto mb-4">
              <img
                src={feature.icon}
                alt={`Feature ${index + 1}`}
                className="w-12 h-12 object-contain"
              />
            </div>

         
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              {feature.title}
            </h2>

    
            <p
              className="text-[16px] leading-relaxed mb-4"
              style={{ color: "rgba(71, 84, 103, 1)" }}
            >
              {feature.description}
            </p>

       
            <a
              href="#"
              className="text-purple-700 flex items-center justify-center space-x-2 text-sm"
            >
              <span className="text-[16px]">Learn more</span>
              <img
                src={ForwardIcon}
                alt="Forward Icon"
                className="w-3 h-3 object-contain"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureCard2;
