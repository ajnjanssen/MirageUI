// src/components/Container.tsx
import React from "react";
import { getFlexClasses, FlexOptions } from "@/app/utils/layout/flex";
import { getGridClasses, GridOptions } from "@/app/utils/layout/grid";

interface Props extends FlexOptions, GridOptions {
  children?: React.ReactNode;
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
 * @param {string} glass - Additional class for glass effect.
 */
const Container: React.FC<Props> = ({
  children,
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

  return (
    <div className={`${glass ? glass : ""} w-full p-8 ${combinedClasses}`}>
      {children}
    </div>
  );
};

export default Container;
