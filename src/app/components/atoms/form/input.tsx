import { CommonProps } from "@/app/types/common/commonProps";
import { TextProps } from "@/app/types/common/text/TextProps";
import React from "react";

interface InputProps extends TextProps, CommonProps {
  id: string;
  type: string;
  placeholder?: string;
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  id,
  type,
  placeholder,
  className,
}) => (
  <input
    id={id}
    type={type}
    placeholder={placeholder}
    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${className}`}
  />
);