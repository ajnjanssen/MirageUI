// src/utils/layout/grid.ts

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
