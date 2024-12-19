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

/**
 * A functional component that renders a text element with customizable styles.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.text - The text content to be displayed.
 * @param {string} props.color - The color class for the text.
 * @param {string} props.textSize - The size class for the text.
 * @param {boolean} props.uppercase - If true, the text will be transformed to uppercase.
 * @param {string} props.leading - The leading (line-height) class for the text.
 */
function Text({ text, color, textSize, uppercase, leading }: IText) {
  const classNames = `${color} ${textSize} ${
    uppercase ? "uppercase" : ""
  } ${leading}`;
  return <div className={classNames}>{text}</div>;
}

export default Text;
