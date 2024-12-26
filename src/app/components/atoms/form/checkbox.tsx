import { CommonProps } from "@/app/types/common/commonProps";
import React from "react";

interface CheckboxProps extends CommonProps {
  id: string;
  label: string;
  className?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ id, label, className }) => (
  <label className={`block text-gray-500 font-bold ${className}`}>
    <input id={id} type="checkbox" className="mr-2 leading-tight" />
    <span className="text-sm">{label}</span>
  </label>
);
