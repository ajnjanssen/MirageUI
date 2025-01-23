import React from "react";
import { GridProps } from "@/app/types/common/GridProps";
import {
  GridAutoColumns,
  GridAutoFlow,
  GridAutoRows,
  GridColumnStartEnd,
  GridTemplateColumns,
  GridTemplateRows,
} from "@/app/enums/grid";
import { Gap } from "@/app/enums/gap/Gap";
import { JustifyItems } from "@/app/enums/justify/JustifyItems";

interface GridBoxProps extends GridProps {
  children?: React.ReactNode;
}

/**
 * A functional component that renders a div with grid layout styles based on the provided props.
 *
 * @param {React.ReactNode} children - The content to be rendered inside the grid.
 * @param {string} [gridAutoColumns] - Defines the size of implicitly created grid columns.
 * @param {string} [gridAutoFlow] - Controls how the auto-placement algorithm works.
 * @param {string} [gridAutoRows] - Defines the size of implicitly created grid rows.
 * @param {string} [gridColumnStartEnd] - Specifies a grid item's start and end position within the grid columns.
 * @param {string} [gridRowStartEnd] - Specifies a grid item's start and end position within the grid rows.
 * @param {string} [gridTemplateColumns] - Defines the column structure of the grid.
 * @param {string} [gridTemplateRows] - Defines the row structure of the grid.
 * @param {string} [gap] - Specifies the gap between grid items.
 * @param {string} [justifyItems] - Aligns grid items along the inline (row) axis.
 */
function GridBox({
  children,
  gridAutoColumns,
  gridAutoFlow,
  gridAutoRows,
  gridColumnStartEnd,
  gridRowStartEnd,
  gridTemplateColumns,
  gridTemplateRows,
  gap,
  justifyItems,
}: GridBoxProps) {
  const classNames = [
    gridAutoColumns ? GridAutoColumns[gridAutoColumns] : "",
    gridAutoFlow ? GridAutoFlow[gridAutoFlow] : "",
    gridAutoRows ? GridAutoRows[gridAutoRows] : "",
    gridColumnStartEnd ? GridColumnStartEnd[gridColumnStartEnd] : "",
    gridRowStartEnd ? GridColumnStartEnd[gridRowStartEnd] : "",
    gridTemplateColumns ? GridTemplateColumns[gridTemplateColumns] : "",
    gridTemplateRows ? GridTemplateRows[gridTemplateRows] : "",
    gap ? Gap[gap] : "",
    justifyItems ? JustifyItems[justifyItems] : "",
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={`grid ${classNames}`}>{children}</div>;
}

export default GridBox;
