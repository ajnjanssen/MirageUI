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
  Width,
} from "@/app/enums";

export interface FlexProps {
  flexDirection?: keyof typeof FlexDirection;
  flexWrap?: keyof typeof FlexWrap;
  justifyContent?: keyof typeof JustifyContent;
  alignItems?: keyof typeof AlignItems;
  alignContent?: keyof typeof AlignContent;
  margin?: keyof typeof Margin;
  padding?: keyof typeof Padding;
  spaceBetween?: keyof typeof SpaceBetween;
  gap?: keyof typeof Gap;
  height?: keyof typeof Height;
  width?: keyof typeof Width;
}
