import React from "react";

interface IHeading {
  level: number;
  text: string;
  color:
    | "text-primary"
    | "text-secondary"
    | "text-base-content"
    | "text-base-100"
    | "text-base-200"
    | "text-base-300"
    | "text-warning"
    | "text-error";
}

function Heading({ level, text, color }: IHeading) {
  const levelClass =
    [
      { level: 1, className: "text-6xl font-bold" },
      { level: 2, className: "text-5xl font-bold" },
      { level: 3, className: "text-4xl font-bold" },
      { level: 4, className: "text-3xl font-bold" },
      { level: 5, className: "text-2xl font-bold" },
      { level: 6, className: "text-xl font-bold" },
    ].find((l) => l.level === level)?.className || "";

  return React.createElement(
    `h${level}`,
    { className: `${levelClass} ${color}` },
    text
  );
}

export default Heading;
