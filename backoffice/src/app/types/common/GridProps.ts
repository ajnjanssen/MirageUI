import { Gap } from "@/app/enums/gap/Gap";
import {
  GridAutoColumns,
  GridAutoFlow,
  GridAutoRows,
  GridColumnStartEnd,
  GridTemplateColumns,
  GridTemplateRows,
} from "@/app/enums/grid";
import { JustifyItems } from "@/app/enums/justify/JustifyItems";

export interface GridProps {
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

export {
  GridAutoColumns,
  GridAutoFlow,
  GridAutoRows,
  GridColumnStartEnd,
  GridTemplateColumns,
  GridTemplateRows,
};
