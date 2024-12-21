import React, { JSX } from "react";
import { FlexProps } from "@/app/types/common/FlexProps";
import { generateClassNames } from "@/app/utils/classnames/classNameGenerator";

interface FlexBoxProps extends FlexProps {
  children: React.ReactNode;
}

/**
 * FlexBox component that renders a div with flexbox styles based on the provided props.
 *
 * @param {FlexBoxProps} props - The properties for the FlexBox component.
 * @param {React.ReactNode} props.children - The child elements to be rendered within the FlexBox.
 * @param {keyof typeof FlexDirection} [props.flexDirection] - The flex direction.
 * @param {keyof typeof FlexWrap} [props.flexWrap] - The flex wrap.
 * @param {keyof typeof JustifyContent} [props.justifyContent] - The justify content.
 * @param {keyof typeof AlignItems} [props.alignItems] - The align items.
 * @param {keyof typeof AlignContent} [props.alignContent] - The align content.
 * @param {keyof typeof Margin} [props.margin] - The margin.
 * @param {keyof typeof Padding} [props.padding] - The padding.
 * @param {keyof typeof SpaceBetween} [props.spaceBetween] - The space between.
 * @param {keyof typeof Gap} [props.gap] - The gap.
 * @param {keyof typeof Height} [props.height] - The height.
 * @returns {JSX.Element} The rendered FlexBox component.
 */
function FlexBox({ children, ...props }: FlexBoxProps): JSX.Element {
  const classNames = generateClassNames(props);

  return <div className={classNames}>{children}</div>;
}

export default FlexBox;
