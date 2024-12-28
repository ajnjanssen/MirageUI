"use client";
import React from "react";
import { ButtonColor } from "@/app/enums/button/ButtonColor";
import { generateButtonClass } from "@/app/utils/functions/components/button/buttonClassGenerator";

interface ButtonProps {
  text: string;
  color: keyof typeof ButtonColor;
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: (e: React.FormEvent<Element>) => Promise<void>;
}

/**
 * Button component renders a button element with specified text, type, and disabled state.
 *
 * @param {ButtonProps} props - The properties for the Button component.
 * @param {string} props.text - The text to display inside the button.
 * @param {string} props.type - The type of the button (e.g., "primary", "secondary").
 * @param {boolean} [props.disabled=false] - Whether the button is disabled.
 */
const Button: React.FC<ButtonProps> = ({
  text,
  type,
  color,
  disabled = false,
}) => {
  const buttonClass = generateButtonClass(ButtonColor[color], disabled);

  return (
    <button type={type} className={buttonClass} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
