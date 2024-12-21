import {
  FlexDirection,
  FlexWrap,
  JustifyContent,
  AlignItems,
  AlignContent,
  Margin,
  Padding,
  SpaceBetween,
  Gap,
  Height,
} from "@/app/enums";
import { FlexProps } from "@/app/types/common/FlexProps";

export function generateClassNames(props: FlexProps): string {
  const {
    flexDirection,
    flexWrap,
    justifyContent,
    alignItems,
    alignContent,
    margin,
    padding,
    spaceBetween,
    gap,
    height,
  } = props;

  return [
    flexDirection ? FlexDirection[flexDirection] : "",
    flexWrap ? FlexWrap[flexWrap] : "",
    justifyContent ? JustifyContent[justifyContent] : "",
    alignItems ? AlignItems[alignItems] : "",
    alignContent ? AlignContent[alignContent] : "",
    margin ? Margin[margin] : "",
    padding ? Padding[padding] : "",
    spaceBetween ? SpaceBetween[spaceBetween] : "",
    gap ? Gap[gap] : "",
    height ? Height[height] : "",
  ]
    .filter(Boolean)
    .join(" ");
}
