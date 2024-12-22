import React from "react";
import { getFlexClasses, FlexOptions } from "@/app/utils/layout/flex";
import { getGridClasses, GridOptions } from "@/app/utils/layout/grid";
import { CommonProps } from "@/app/types/common/commonprops";
import { Margin, Padding, Height, Width } from "@/app/enums";

interface Props extends FlexOptions, GridOptions, CommonProps {
  children?: React.ReactNode;
  className?: string;
  size?: string;
  glass?: boolean;
}

/**
 * Container component that applies flexbox or grid layout styles based on the provided props.
 *
 * @param {React.ReactNode} children - The content to be rendered inside the container.
 * @param {boolean} flex - Flag to enable flexbox layout.
 * @param {boolean} grid - Flag to enable grid layout.
 * @param {string} direction - Flexbox direction (e.g., 'row', 'column').
 * @param {string} justify - Flexbox justify-content property.
 * @param {string} align - Flexbox align-items property.
 * @param {string} wrap - Flexbox wrap property.
 * @param {number} cols - Number of columns for grid layout.
 * @param {number} rows - Number of rows for grid layout.
 * @param {string} gap - Gap between grid items.
 * @param {string} flow - Grid auto-flow property.
 * @param {boolean} glass - Flag to enable glass effect.
 * @param {string} className - Additional class names to be applied.
 * @returns {React.ReactElement} The rendered container component.
 */
const Container: React.FC<Props> = ({
  children,
  className,
  flex,
  grid,
  direction,
  justify,
  align,
  wrap,
  cols,
  rows,
  gap,
  flow,
  glass,
  margin,
  padding,
  height,
  width,
}: Props) => {
  const flexClasses = getFlexClasses({
    flex,
    direction,
    justify,
    align,
    wrap,
    gap,
  });
  const gridClasses = getGridClasses({ grid, cols, rows, gap, flow });
  const combinedClasses = `${flexClasses} ${gridClasses}`;
  const commonClasses = `${margin ? Margin[margin] : ""} ${
    padding ? Padding[padding] : ""
  } ${height ? Height[height] : ""} ${width ? Width[width] : ""}`;

  return (
    <div
      className={`${
        glass ? "glass" : ""
      } ${combinedClasses} ${commonClasses} ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
