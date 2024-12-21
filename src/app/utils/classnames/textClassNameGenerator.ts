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
import { TextProps } from "@/app/types/common/text/TextProps";

export function generateTextClassNames(props: TextProps): string {
  const {
    textAlign,
    textColor,
    textSize,
    textDecoration,
    textDecorationColor,
    textDecorationStyle,
    textDecorationThickness,
    textHyphens,
    textIndent,
    textLeading,
    textOverflow,
    textTransform,
    textUnderLineOffset,
    textVerticalAlign,
    textWhitespace,
    textWordBreak,
    textWrap,
    fontFamily,
    fontSize,
    fontSmoothing,
    fontStyle,
    fontVariantNumeric,
    fontWeight,
  } = props;

  return [
    textAlign ? TextAlign[textAlign] : "",
    textColor ? TextColor[textColor] : "",
    textSize ? TextSize[textSize] : "",
    textDecoration ? TextDecoration[textDecoration] : "",
    textDecorationColor ? TextDecorationColor[textDecorationColor] : "",
    textDecorationStyle ? TextDecorationStyle[textDecorationStyle] : "",
    textDecorationThickness
      ? TextDecorationThickness[textDecorationThickness]
      : "",
    textHyphens ? TextHyphens[textHyphens] : "",
    textIndent ? TextIndent[textIndent] : "",
    textLeading ? TextLeading[textLeading] : "",
    textOverflow ? TextOverflow[textOverflow] : "",
    textTransform ? TextTransform[textTransform] : "",
    textUnderLineOffset ? TextUnderLineOffset[textUnderLineOffset] : "",
    textVerticalAlign ? TextVerticalAlign[textVerticalAlign] : "",
    textWhitespace ? TextWhitespace[textWhitespace] : "",
    textWordBreak ? TextWordBreak[textWordBreak] : "",
    textWrap ? TextWrap[textWrap] : "",
    fontFamily ? FontFamily[fontFamily] : "",
    fontSize ? FontSizeEnum[fontSize] : "",
    fontSmoothing ? FontSmoothing[fontSmoothing] : "",
    fontStyle ? FontStyle[fontStyle] : "",
    fontVariantNumeric ? FontVariantNumeric[fontVariantNumeric] : "",
    fontWeight ? FontWeight[fontWeight] : "",
  ]
    .filter(Boolean)
    .join(" ");
}
