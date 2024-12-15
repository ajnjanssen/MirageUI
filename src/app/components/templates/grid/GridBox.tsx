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
