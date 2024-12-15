import React from "react";
import { TextColor } from "@/app/enums/text/TextColor";
import { TextSize } from "@/app/enums/text/TextSize";
import { TextLeading } from "@/app/enums/text/TextLeading";
import { TextTransform } from "@/app/enums/text/TextTransform";

interface IText {
  text: string;
  color?: TextColor;
  textSize?: TextSize;
  uppercase?: TextTransform;
  leading?: TextLeading;
}

function Text({ text, color, textSize, uppercase, leading }: IText) {
  const classNames = `${color} ${textSize} ${
    uppercase ? "uppercase" : ""
  } ${leading}`;
  return <div className={classNames}>{text}</div>;
}

export default Text;
