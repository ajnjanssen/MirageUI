// src/utils/layout/flex.ts

/**
 * Interface representing options for configuring flexbox layout.
 *
 * @param flex - Optional boolean to enable or disable flexbox layout.
 * @param direction - Optional string to specify the flex direction. Can be "flex-col" or "flex-row".
 * @param justify - Optional string to specify the justification of flex items.
 *                  Can be "justify-start", "justify-center", "justify-end", "justify-between", or "justify-around".
 * @param align - Optional string to specify the alignment of flex items.
 *                Can be "items-start", "items-center", "items-end", "items-baseline", or "items-stretch".
 * @param wrap - Optional string to specify the wrapping behavior of flex items.
 *               Can be "flex-wrap", "flex-nowrap", or "flex-wrap-reverse".
 * @param gap - Optional string to specify the gap between flex items.
 */
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
