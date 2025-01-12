"use client";

import React, { ChangeEvent } from "react";

interface InputProps {
  id: string;
  name: string;
  label?: string; // Add label prop
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  id,
  name,
  label,
  type,
  placeholder,
  value,
  onChange,
}) => (
  <input
    id={id}
    name={name}
    aria-label={label}
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="input-class shadow appearance-none border-base-200 rounded w-full py-2 px-3 text-gray-700 leading-tight"
  />
);

export default Input;
