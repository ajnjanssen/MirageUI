import { CommonProps } from "@/app/types/common/commonProps";
import { TextProps } from "@/app/types/common/text/TextProps";
import React from "react";

interface HelperTextProps extends CommonProps, TextProps {
  children: React.ReactNode;
  className?: string;
}

export const HelperText: React.FC<HelperTextProps> = ({
  children,
  className,
}) => <p className={`text-gray-600 text-xs italic ${className}`}>{children}</p>;
