import { Gap } from "@/app/enums/gap/Gap";
import { GridAutoColumns } from "@/app/enums/grid/GridAutoColumns";
import { GridAutoFlow } from "@/app/enums/grid/GridAutoFlow";
import { GridAutoRows } from "@/app/enums/grid/GridAutoRows";
import { GridColumnStartEnd } from "@/app/enums/grid/GridColumnStartEnd";
import { GridTemplateColumns } from "@/app/enums/grid/GridTemplateColumns";
import { GridTemplateRows } from "@/app/enums/grid/GridTemplateRows";
import { JustifyItems } from "@/app/enums/justify/JustifyItems";
import React from "react";

interface GridBoxProps {
  children: React.ReactNode;
  gridAutoColumns?: keyof typeof GridAutoColumns;
  gridAutoFlow?: keyof typeof GridAutoFlow;
  gridAutoRows?: keyof typeof GridAutoRows;
  gridColumnStartEnd?: keyof typeof GridColumnStartEnd;
  gridRowStartEnd?: keyof typeof GridColumnStartEnd;
  gridTemplateColumns?: keyof typeof GridTemplateColumns;
  gridTemplateRows?: keyof typeof GridTemplateRows;
  gap?: keyof typeof Gap;
  justifyItems?: keyof typeof JustifyItems;
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
