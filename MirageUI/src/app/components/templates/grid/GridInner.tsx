import React from "react";
import {
  GridProps,
  GridColumnStartEnd,
  GridTemplateColumns,
} from "@/app/types/common/GridProps";

import { CommonProps } from "@/app/types/common/commonProps";
import { Margin, Padding, Height, Width } from "@/app/enums";

interface GridInnerProps extends GridProps, CommonProps {
  children?: React.ReactNode;
  colSpan?: keyof typeof GridColumnStartEnd;
}

/**
 * A functional component that renders a grid item with optional column span and grid template columns.
 *
 * @param {Object} props - The properties object.
 * @param {number} props.colSpan - The number of columns the grid item should span.
 * @param {React.ReactNode} props.children - The content to be rendered inside the grid item.
 * @param {string} props.gridTemplateColumns - The grid template columns style to be applied.
 * @param {string} props.className - Additional class names to be applied.
 * @param {React.CSSProperties} props.style - Inline styles to be applied.
 * @param {keyof typeof Margin} [props.margin] - The margin to be applied.
 * @param {keyof typeof Padding} [props.padding] - The padding to be applied.
 * @param {keyof typeof Height} [props.height] - The height to be applied.
 * @param {keyof typeof Width} [props.width] - The width to be applied.
 * @returns {React.ReactElement} The rendered grid item component.
 */
function GridInner({
  colSpan,
  children,
  gridTemplateColumns,
  margin,
  padding,
  height,
  width,
}: GridInnerProps): React.ReactElement {
  const colSpanClass = colSpan ? GridColumnStartEnd[colSpan] : "";
  const gridTemplateColumnsClass = gridTemplateColumns
    ? GridTemplateColumns[gridTemplateColumns]
    : "";
  const marginClass = margin ? Margin[margin] : "";
  const paddingClass = padding ? Padding[padding] : "";
  const heightClass = height ? Height[height] : "";
  const widthClass = width ? Width[width] : "";

  return (
    <div
      className={`${colSpanClass} ${gridTemplateColumnsClass} ${marginClass} ${paddingClass} ${heightClass} ${widthClass}`}
    >
      {children}
    </div>
  );
}

export default GridInner;
