import React from "react";
import { TextColor } from "@/app/enums/text/TextColor";

interface IHeading {
  level: number;
  text: string;
  color?: keyof typeof TextColor;
}

function Heading({ level, text, color = "Primary" }: IHeading) {
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
    { className: `${levelClass} ${TextColor[color]}` },
    text
  );
}

export default Heading;
