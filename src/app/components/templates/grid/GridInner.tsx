import { GridColumnStartEnd } from "@/app/enums/grid/GridColumnStartEnd";
import { GridTemplateColumns } from "@/app/enums/grid/GridTemplateColumns";
import React from "react";

interface GridInnerProps {
  children: React.ReactNode;
  colSpan?: keyof typeof GridColumnStartEnd;
  gridTemplateColumns?: keyof typeof GridTemplateColumns;
}

function GridInner({
  colSpan,
  children,
  gridTemplateColumns,
}: GridInnerProps): React.ReactElement {
  const colSpanClass = colSpan ? GridColumnStartEnd[colSpan] : "";
  const gridTemplateColumnsClass = gridTemplateColumns
    ? GridTemplateColumns[gridTemplateColumns]
    : "";
  return (
    <div className={`${colSpanClass} ${gridTemplateColumnsClass}`}>
      {children}
    </div>
  );
}

export default GridInner;
