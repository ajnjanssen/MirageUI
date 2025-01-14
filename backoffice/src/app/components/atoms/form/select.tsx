import { CommonProps } from "@/app/types/common/commonProps";
import { TextProps } from "@/app/types/common/text/TextProps";
import React from "react";

interface SelectProps extends TextProps, CommonProps {
  id: string;
  options: string[];
  className?: string;
}

export const Select: React.FC<SelectProps> = ({ id, options, className }) => (
  <div className="relative">
    <select
      id={id}
      className={`block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline ${className}`}
    >
      {options.map((option, index) => (
        <option key={index}>{option}</option>
      ))}
    </select>
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
      <svg
        className="fill-current h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
      </svg>
    </div>
  </div>
);
