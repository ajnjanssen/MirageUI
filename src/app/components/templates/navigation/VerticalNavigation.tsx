"use client";

import React from "react";
import NavigationListItems from "@/app/components/organisms/navigation/list/navigationListItems";
import FlexBox from "@/app/components/templates/flex/FlexBox";

interface VerticalNavigationProps {
  /**
   * The items to be displayed in the navigation list.
   */
  items: [];

  collapsable?: boolean;
}

/**
 * VerticalNavigation component that displays a vertical navigation menu.
 *
 * @param {object} props - The component props.
 * @param {NavigationItem[]} props.items - The items to be displayed in the navigation list.
 * @returns {JSX.Element} The rendered component.
 */
const VerticalNavigation: React.FC<VerticalNavigationProps> = ({ items, collapsable = false }) => {
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