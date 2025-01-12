"use client";
import React from "react";
import { ButtonColor } from "@/app/enums/button/ButtonColor";
import { generateButtonClass } from "@/app/utils/functions/components/button/buttonClassGenerator";
import { openModal } from "@/app/utils/functions/components/button/openModal";

interface ButtonProps {
  text: string;
  color: keyof typeof ButtonColor;
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  shouldOpenModal?: boolean;
  modalId?: string;
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
  shouldOpenModal = false,
  modalId,
  onClick,
}) => {
  const buttonClass = generateButtonClass(ButtonColor[color], disabled);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (shouldOpenModal) {
      e.preventDefault();
      openModal(shouldOpenModal, modalId);
    }
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      type={type}
      className={buttonClass}
      disabled={disabled}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
