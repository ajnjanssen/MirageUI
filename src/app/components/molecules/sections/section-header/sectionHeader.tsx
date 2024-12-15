import Heading from "@/app/components/atoms/heading/heading";
import Text from "@/app/components/atoms/heading/text/text";
import Container from "@/app/components/container/container";
import { TextColor } from "@/app/enums/text/TextColor";
import { TextLeading } from "@/app/enums/text/TextLeading";
import { TextSize } from "@/app/enums/text/TextSize";
import React from "react";

interface SectionHeaderProps {
  headerText: string;
  headerSize?: number;
  headerColor?: keyof typeof TextColor;
  subText?: string;
  textColor?: keyof typeof TextColor;
  textSize?: keyof typeof TextSize;
  textLeading?: keyof typeof TextLeading;
  container?: boolean;
}

function SectionHeader({
  headerText,
  headerSize,
  headerColor, // Default value as string
  subText,
  textColor = "Primary", // Default value as string
  textSize = "Medium", // Default value as string
  textLeading = "None", // Default value as string
  container = false,
}: SectionHeaderProps) {
  const content = (
    <>
      <Heading level={headerSize || 1} text={headerText} color={headerColor} />
      <Text
        text={subText || ""}
        color={TextColor[textColor]}
        textSize={TextSize[textSize]}
        leading={TextLeading[textLeading]}
      />
    </>
  );

  return container ? <Container>{content}</Container> : content;
}

export default SectionHeader;
