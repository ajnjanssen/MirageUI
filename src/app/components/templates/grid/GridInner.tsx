import { GridColumnStartEnd } from "@/app/enums/grid/GridColumnStartEnd";
import { GridTemplateColumns } from "@/app/enums/grid/GridTemplateColumns";
import React from "react";

interface GridInnerProps {
  children: React.ReactNode;
  colSpan?: keyof typeof GridColumnStartEnd;
  gridTemplateColumns?: keyof typeof GridTemplateColumns;
}

/**
 * A functional component that renders a grid item with optional column span and grid template columns.
 *
 * @param {Object} props - The properties object.
 * @param {number} props.colSpan - The number of columns the grid item should span.
 * @param {React.ReactNode} props.children - The content to be rendered inside the grid item.
 * @param {string} props.gridTemplateColumns - The grid template columns style to be applied.
 * @returns {React.ReactElement} The rendered grid item component.
 */
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
