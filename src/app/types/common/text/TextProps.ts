import {
  TextAlign,
  TextColor,
  TextSize,
  TextDecoration,
  TextDecorationColor,
  TextDecorationStyle,
  TextDecorationThickness,
  TextHyphens,
  TextIndent,
  TextLeading,
  TextOverflow,
  TextTransform,
  TextUnderLineOffset,
  TextVerticalAlign,
  TextWhitespace,
  TextWordBreak,
  TextWrap,
} from "@/app/enums/text";

import {
  FontFamily,
  FontSize as FontSizeEnum,
  FontSmoothing,
  FontStyle,
  FontVariantNumeric,
  FontWeight,
} from "@/app/enums/fonts";

export interface TextProps {
  textAlign?: keyof typeof TextAlign;
  textColor?: keyof typeof TextColor;
  textSize?: keyof typeof TextSize;
  textDecoration?: keyof typeof TextDecoration;
  textDecorationColor?: keyof typeof TextDecorationColor;
  textDecorationStyle?: keyof typeof TextDecorationStyle;
  textDecorationThickness?: keyof typeof TextDecorationThickness;
  textHyphens?: keyof typeof TextHyphens;
  textIndent?: keyof typeof TextIndent;
  textLeading?: keyof typeof TextLeading;
  textOverflow?: keyof typeof TextOverflow;
  textTransform?: keyof typeof TextTransform;
  textUnderLineOffset?: keyof typeof TextUnderLineOffset;
  textVerticalAlign?: keyof typeof TextVerticalAlign;
  textWhitespace?: keyof typeof TextWhitespace;
  textWordBreak?: keyof typeof TextWordBreak;
  textWrap?: keyof typeof TextWrap;
  fontFamily?: keyof typeof FontFamily;
  fontSize?: keyof typeof FontSizeEnum;
  fontSmoothing?: keyof typeof FontSmoothing;
  fontStyle?: keyof typeof FontStyle;
  fontVariantNumeric?: keyof typeof FontVariantNumeric;
  fontWeight?: keyof typeof FontWeight;
}
