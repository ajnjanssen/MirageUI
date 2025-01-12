import { TextProps } from "@/app/types/common/text/TextProps";
import React from "react";

interface LabelProps extends TextProps {
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
}

export const Label: React.FC<LabelProps> = ({
  htmlFor,
  children,
  className,
}) => (
  <label
    htmlFor={htmlFor}
    className={`block text-gray-700 text-sm font-bold mb-2 ${className}`}
  >
    {children}
  </label>
);
