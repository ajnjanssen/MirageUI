import React, { JSX } from "react";
import { TextProps } from "@/app/types/common/text/TextProps";
import { generateTextClassNames } from "@/app/utils/classnames/textClassNameGenerator";

interface H1Props extends TextProps {
  children: React.ReactNode;
}

/**
 * H1 component renders an H1 heading with optional text properties.
 *
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The content to be rendered inside the H1 element.
 * @param {keyof typeof TextAlign} [props.textAlign] - The text alignment.
 * @param {keyof typeof TextColor} [props.textColor] - The text color.
 * @param {keyof typeof TextSize} [props.textSize] - The text size.
 * @param {keyof typeof TextDecoration} [props.textDecoration] - The text decoration.
 * @param {keyof typeof TextDecorationColor} [props.textDecorationColor] - The text decoration color.
 * @param {keyof typeof TextDecorationStyle} [props.textDecorationStyle] - The text decoration style.
 * @param {keyof typeof TextDecorationThickness} [props.textDecorationThickness] - The text decoration thickness.
 * @param {keyof typeof TextHyphens} [props.textHyphens] - The text hyphens.
 * @param {keyof typeof TextIndent} [props.textIndent] - The text indent.
 * @param {keyof typeof TextLeading} [props.textLeading] - The text leading.
 * @param {keyof typeof TextOverflow} [props.textOverflow] - The text overflow.
 * @param {keyof typeof TextTransform} [props.textTransform] - The text transform.
 * @param {keyof typeof TextUnderLineOffset} [props.textUnderLineOffset] - The text underline offset.
 * @param {keyof typeof TextVerticalAlign} [props.textVerticalAlign] - The text vertical align.
 * @param {keyof typeof TextWhitespace} [props.textWhitespace] - The text whitespace.
 * @param {keyof typeof TextWordBreak} [props.textWordBreak] - The text word break.
 * @param {keyof typeof TextWrap} [props.textWrap] - The text wrap.
 * @param {keyof typeof FontFamily} [props.fontFamily] - The font family.
 * @param {keyof typeof FontSizeEnum} [props.fontSize] - The font size.
 * @param {keyof typeof FontSmoothing} [props.fontSmoothing] - The font smoothing.
 * @param {keyof typeof FontStyle} [props.fontStyle] - The font style.
 * @param {keyof typeof FontVariantNumeric} [props.fontVariantNumeric] - The font variant numeric.
 * @param {keyof typeof FontWeight} [props.fontWeight] - The font weight.
 * @returns {JSX.Element} The rendered H1 component.
 */
function H1({ children, textColor, textSize, ...props }: H1Props): JSX.Element {
  const classNames = generateTextClassNames({
    ...props,
    textColor: textColor || "baseContent",
    textSize: textSize || "xxxxxxl",
  });

  return <h1 className={`${classNames}`}>{children}</h1>;
}

export default H1;
