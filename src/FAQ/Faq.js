import React, { useState } from "react";
import IconPlus from "../assets/IconPlus.png"; 
import IconSub from "../assets/IconSub.png"; 
import ContactSection from "./ContactSection";

const Faq = () => {
  const [open, setOpen] = useState(null); 

  const faqs = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can other info be added to an invoice?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "How does billing work?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "How do I change my account email?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpen(open === index ? null : index); 
  };

  return (
    <div className="border-b border-gray-300 pb-16">
     
      <div className="text-center pt-24">
        <div className="font-semibold text-[36px]">Frequently asked questions</div>
        <div
          className="text-[20px] px-5"
          style={{ color: "rgba(71, 84, 103, 1)" }}
        >
          Everything you need to know about the product and billing.
        </div>
      </div>

   
      <div className="max-w-3xl mx-auto my-12 p-4">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 font-medium text-[18px] pb-8">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center text-lg  font-medium text-black-300"
              >
                {faq.question}
                <img
                  src={open === index ? IconSub : IconPlus}
                  alt={open === index ? "Collapse Icon" : "Expand Icon"}
                  className="w-6 h-6 text-gray-500"
                />
              </button>
              {open === index && (
                <p className="mt-2  font-normal text-[16px]" style={{ color: "rgba(71, 84, 103, 1)" }}>{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <ContactSection/>
      
    </div>
  );
};

export default Faq;
