import Heading from "@/app/components/atoms/heading/heading";
import Text from "@/app/components/atoms/heading/text/text";
import Container from "@/app/components/templates/container/container";
import { TextColor } from "@/app/enums/text/TextColor";
import { TextLeading } from "@/app/enums/text/TextLeading";
import { TextSize } from "@/app/enums/text/TextSize";
import { Margin, Padding, Height, Width } from "@/app/enums";
import React from "react";
import { TextProps } from "@/app/types/common/text/TextProps";
import { CommonProps } from "@/app/types/common/commonProps";

interface SectionHeaderProps extends TextProps, CommonProps {
  headerText: string;
  headerSize?: number;
  headerColor?: keyof typeof TextColor;
  subText?: string;
  container?: boolean;
  width?: keyof typeof Width;
  height?: keyof typeof Height;
  margin?: keyof typeof Margin;
  padding?: keyof typeof Padding;
}

/**
 * SectionHeader component renders a header and optional subtext with customizable styles.
 *
 * @param {object} props - The properties object.
 * @param {string} props.headerText - The main header text.
 * @param {number} [props.headerSize] - The size level of the header (default is 1).
 * @param {string} [props.headerColor] - The color of the header text.
 * @param {string} [props.subText] - The subtext displayed below the header.
 * @param {string} [props.textColor="Primary"] - The color of the subtext (default is "Primary").
 * @param {string} [props.textSize="Medium"] - The size of the subtext (default is "Medium").
 * @param {string} [props.textLeading="None"] - The leading (line height) of the subtext (default is "None").
 * @param {boolean} [props.container=false] - Whether to wrap the content in a container (default is false).
 */
function SectionHeader({
  headerText,
  headerSize,
  headerColor,
  subText,
  textColor = "primary",
  textSize = "medium",
  textLeading = "None",
  container = false,
  margin,
  padding,
  height,
  width,
  ...props
}: SectionHeaderProps) {
  const content = (
    <>
      <Heading level={headerSize || 1} text={headerText} color={headerColor} />
      <Text
        text={subText || ""}
        color={TextColor[textColor]}
        textSize={TextSize[textSize]}
        leading={TextLeading[textLeading]}
        {...props}
      />
    </>
  );

  const commonClasses = `${margin ? Margin[margin] : ""} ${
    padding ? Padding[padding] : ""
  } ${height ? Height[height] : ""} ${width ? Width[width] : ""}`;

  return container ? (
    <Container className={commonClasses}>{content}</Container>
  ) : (
    <div className={commonClasses}>{content}</div>
  );
}

export default SectionHeader;
