import { CommonProps } from "@/app/types/common/commonProps";
import { TextProps } from "@/app/types/common/text/TextProps";
import React from "react";

interface ErrorMessageProps extends TextProps, CommonProps {
  children: React.ReactNode;
  className?: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  children,
  className,
}) => <p className={`text-red-500 text-xs italic ${className}`}>{children}</p>;
