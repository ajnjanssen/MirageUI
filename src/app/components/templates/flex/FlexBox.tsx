import React from "react";
import { FlexDirection } from "@/app/enums/flex/FlexDirection";
import { FlexWrap } from "@/app/enums/flex/FlexWrap";
import { JustifyContent } from "@/app/enums/justify/JustifyContent";
import { AlignItems } from "@/app/enums/align/AlignItems";
import { AlignContent } from "@/app/enums/align/AlignContent";
import { Margin } from "@/app/enums/spacing/margin";
import { Padding } from "@/app/enums/spacing/padding";
import { SpaceBetween } from "@/app/enums/spacing/spaceBetween";
import { Gap } from "@/app/enums/gap/Gap";
import { Height } from "@/app/enums/sizing/height";

interface FlexBoxProps {
  uniqueId?: string;
  children: React.ReactNode;
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
}

/**
 * A functional component that renders a div with flexbox layout styles based on the provided props.
 *
 * @param {string} [uniqueId] - The unique identifier for the flexbox.
 * @param {React.ReactNode} children - The content to be rendered inside the flexbox.
 * @param {string} [flexDirection] - Defines the direction of the flex container's main axis.
 * @param {string} [flexWrap] - Controls whether the flex container is single-line or multi-line.
 * @param {string} [justifyContent] - Aligns flex items along the main axis.
 * @param {string} [alignItems] - Aligns flex items along the cross axis.
 * @param {string} [alignContent] - Aligns flex lines within the flex container.
 * @param {string} [margin] - Specifies the margin around the flex container.
 * @param {string} [padding] - Specifies the padding inside the flex container.
 * @param {string} [spaceBetween] - Specifies the space between flex items.
 * @param {string} [gap] - Specifies the gap between flex items.
 * @param {string} [height] - Specifies the height of the flex container.
 */
function FlexBox({
  children,
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
  alignContent,
  margin,
  padding,
  spaceBetween,
  gap,
  uniqueId,
  height,
}: FlexBoxProps) {
  const classNames = [
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

  return (
    <div id={uniqueId} className={`flex ${classNames}`}>
      {children}
    </div>
  );
}

export default FlexBox;
