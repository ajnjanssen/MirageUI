// src/utils/layout/flex.ts

export interface FlexOptions {
  flex?: boolean;
  direction?: "flex-col" | "flex-row";
  justify?:
    | "justify-start"
    | "justify-center"
    | "justify-end"
    | "justify-between"
    | "justify-around";
  align?:
    | "items-start"
    | "items-center"
    | "items-end"
    | "items-baseline"
    | "items-stretch";
  wrap?: "flex-wrap" | "flex-nowrap" | "flex-wrap-reverse";
  gap?: string;
}

export const getFlexClasses = ({
  flex,
  direction,
  justify,
  align,
  wrap,
  gap,
}: FlexOptions): string => {
  return flex
    ? `flex ${direction || ""} ${justify || ""} ${align || ""} ${wrap || ""} ${
        gap || ""
      }`
    : "";
};
