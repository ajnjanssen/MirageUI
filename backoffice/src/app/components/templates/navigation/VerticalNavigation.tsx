import React from "react";
import NavigationListItems from "@/app/components/organisms/navigation/list/navigationListItems";
import FlexBox from "@/app/components/templates/flex/FlexBox";
import { NavigationItem } from "@/app/config/navigation/setup/navigationConfig";

interface VerticalNavigationProps {
  items: NavigationItem[];
  collapsable?: boolean;
}

const VerticalNavigation: React.FC<VerticalNavigationProps> = ({
  items,
  collapsable = false,
}) => {
  return (
    <div className="glass backdrop-filter backdrop-blur-lg w-full">
      <FlexBox flexDirection="Column" padding="P6" height="HFit" width="w-full">
        <FlexBox flexDirection="Column" padding="P6" height="HFull" gap="Gap4">
          <NavigationListItems collapsable={collapsable} items={items} />
        </FlexBox>
      </FlexBox>
    </div>
  );
};

export default VerticalNavigation;
