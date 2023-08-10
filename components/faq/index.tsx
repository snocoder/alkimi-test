"use client";
import { FAQItem } from "@/constants/faq";
import { useState } from "react";

interface FAQProps {
  faqData: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ faqData }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full">
      {faqData.map((item, index) => (
        <div key={index} className="mb-4">
          <div
            className={`${"flex items-center justify-between cursor-pointer px-8 md:px-60 "} ${
              index === activeIndex
                ? "bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
                : ""
            }`}
            onClick={() => toggleSection(index)}
          >
            <h3 className="text-lg font-semibold">{item.question}</h3>
            <span className="text-xl">{activeIndex === index ? "+" : "-"}</span>
          </div>
          {activeIndex === index && (
            <p className="mt-2 opacity-50 text-sm px-8 md:px-60 ">
              {item.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
