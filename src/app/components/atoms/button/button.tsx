"use client";
import React from "react";

interface ButtonProps {
  text: string;
  type:
    | "primary"
    | "secondary"
    | "base-100"
    | "base-200"
    | "base-300"
    | "base-content"
    | "warning"
    | "error"
    | "disabled";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, type, disabled = false }) => {
  const baseClass =
    "py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 glass";
  const typeClass = {
    primary: "bg-primary text-white hover:bg-primary-dark focus:ring-primary",
    secondary:
      "bg-secondary text-white hover:bg-secondary-dark focus:ring-secondary",
    "base-100":
      "bg-base-100 text-base-content hover:bg-base-300 focus:ring-base-100",
    "base-200":
      "bg-base-200 text-base-content hover:bg-base-300 focus:ring-base-200",
    "base-300":
      "bg-base-300 text-base-content hover:bg-base-200 focus:ring-base-300",
    "base-content":
      "bg-base-300 text-base-content hover:bg-base-200 focus:ring-base-content",
    warning: "bg-warning text-white hover:bg-warning-dark focus:ring-warning",
    error: "bg-error text-white hover:bg-error-dark focus:ring-error",
    disabled: "bg-gray-300 text-gray-500 cursor-not-allowed",
  };

  const buttonClass = `${baseClass} ${typeClass[type]} ${
    disabled ? typeClass.disabled : ""
  }`;

  return (
    <button className={buttonClass} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
