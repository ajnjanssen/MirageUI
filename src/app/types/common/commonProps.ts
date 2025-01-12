import { Margin, Padding, Height, Width } from "@/app/enums";

export interface CommonProps {
  margin?: keyof typeof Margin;
  padding?: keyof typeof Padding;
  height?: keyof typeof Height;
  width?: keyof typeof Width;
}
