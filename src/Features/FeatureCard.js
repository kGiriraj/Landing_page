import React from "react";
import Icon from "../assets/feaut/Featured.png";
import Icon1 from "../assets/feaut/Featured1.png";
import Icon2 from "../assets/feaut/Featured2.png";
import Icon3 from "../assets/feaut/Featured3.png";
import Icon4 from "../assets/feaut/Featured4.png";
import Icon5 from "../assets/feaut/Featured5.png";

function FeatureCard() {
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
    {
      icon: Icon3,
      title: "Connect with customers",
      description:
        "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
    },
    {
      icon: Icon4,
      title: "Connect the tools you already use",
      description:
        "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
    },
    {
      icon: Icon5,
      title: "Our people make the difference",
      description:
        "We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
    },
  ];

  return (
    <div className="container mx-auto pt-16 pb-20">
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

            {/* Title */}
            <h2 className="text-lg font-semibold text-gray-900 mb-2" >
              {feature.title}
            </h2>

            {/* Description */}
            <p className="  text-[16px] leading-relaxed"  style={{ color: 'rgba(71, 84, 103, 1)' }}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureCard;
