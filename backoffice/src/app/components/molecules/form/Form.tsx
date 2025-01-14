import React from "react";
import { CommonProps } from "@/app/types/common/commonProps";
import { FlexProps } from "@/app/types/common/FlexProps";
import { Margin, Padding, Height, Width } from "@/app/enums";

interface FormProps extends CommonProps, FlexProps {
  children: React.ReactNode;
  className?: string;
  margin?: keyof typeof Margin;
  padding?: keyof typeof Padding;
  height?: keyof typeof Height;
  width?: keyof typeof Width;
  onSubmit?: (e: React.FormEvent) => void;
}

/**
 * A functional component that renders a form with optional flex, margin, padding, height, and width styles.
 *
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The content to be rendered inside the form.
 * @param {string} props.className - Additional class names to be applied.
 * @param {keyof typeof Margin} [props.margin] - The margin to be applied.
 * @param {keyof typeof Padding} [props.padding] - The padding to be applied.
 * @param {keyof typeof Height} [props.height] - The height to be applied.
 * @param {keyof typeof Width} [props.width] - The width to be applied.
 * @returns {React.ReactElement} The rendered form component.
 */
function Form({
  children,
  className,
  margin,
  padding,
  height,
  width,
  ...props
}: FormProps): React.ReactElement {
  const marginClass = margin ? Margin[margin] : "";
  const paddingClass = padding ? Padding[padding] : "";
  const heightClass = height ? Height[height] : "";
  const widthClass = width ? Width[width] : "";

  const classNames = `flex flex-col gap-4 ${className} ${marginClass} ${paddingClass} ${heightClass} ${widthClass}`;

  return (
    <form className={classNames} {...props}>
      {children}
    </form>
  );
}

export default Form;
