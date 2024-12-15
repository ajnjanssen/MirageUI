// src/components/Container.tsx
import React from "react";
import { getFlexClasses, FlexOptions } from "@/app/utils/layout/flex";
import { getGridClasses, GridOptions } from "@/app/utils/layout/grid";

interface Props extends FlexOptions, GridOptions {
  children?: React.ReactNode;
  size?: string;
  glass?: boolean;
}

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
