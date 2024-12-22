import { Margin, Padding, Height, Width } from "@/app/enums";
import { CommonProps } from "@/app/types/common/commonprops";

export function generateClassNames(props: CommonProps): string {
  const { margin, padding, height, width } = props;

  return [
    margin ? Margin[margin] : "",
    padding ? Padding[padding] : "",
    height ? Height[height] : "",
    width ? Width[width] : "",
  ]
    .filter(Boolean)
    .join(" ");
}
