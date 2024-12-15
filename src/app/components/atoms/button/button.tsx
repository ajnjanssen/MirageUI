"use client";
import React from "react";
import { ButtonColor } from "@/app/enums/button/ButtonColor";
import { generateButtonClass } from "@/app/utils/functions/components/button/buttonClassGenerator";

interface ButtonProps {
  text: string;
  type: ButtonColor;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, type, disabled = false }) => {
  const buttonClass = generateButtonClass(type, disabled);

  return (
    <button className={buttonClass} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
