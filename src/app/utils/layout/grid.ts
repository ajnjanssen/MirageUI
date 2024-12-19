// src/utils/layout/grid.ts

/**
 * Interface representing the options for configuring a CSS grid layout.
 *
 * @param grid - A boolean indicating whether the grid layout is enabled.
 * @param cols - A string specifying the number of columns in the grid (e.g., "grid-cols-2").
 * @param rows - A string specifying the number of rows in the grid (e.g., "grid-rows-3").
 * @param gap - A string specifying the gap between grid items (e.g., "gap-4").
 * @param flow - A string specifying the grid flow direction and density. Possible values are:
 *               - "grid-flow-row"
 *               - "grid-flow-col"
 *               - "grid-flow-row-dense"
 *               - "grid-flow-col-dense"
 */
export interface GridOptions {
  grid?: boolean;
  cols?: string; // e.g. "grid-cols-2"
  rows?: string; // e.g. "grid-rows-3"
  gap?: string; // e.g. "gap-4"
  flow?:
    | "grid-flow-row"
    | "grid-flow-col"
    | "grid-flow-row-dense"
    | "grid-flow-col-dense";
}

export const getGridClasses = ({
  grid,
  cols,
  rows,
  gap,
  flow,
}: GridOptions): string => {
  return grid
    ? `grid ${cols || ""} ${rows || ""} ${gap || ""} ${flow || ""}`
    : "";
};
