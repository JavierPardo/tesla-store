'use client';
import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <i className={`fas ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'} text-gray-500`}></i>
      </button>
      {isOpen && <p className="mt-3 text-gray-600 text-sm leading-relaxed">{answer}</p>}
    </div>
  );
};