"use client";

import React from "react";
import NavigationListItems from "@/app/components/organisms/navigation/list/navigationListItems";
import { navigationItems } from "@/app/config/navigation/navigationConfig";
import FlexBox from "@/app/components/templates/flex/FlexBox";
import InnerListItem from "@/app/components/molecules/navigation/vertical/innerListItem";

const VerticalNavigation = () => {
  return (
    <FlexBox flexDirection="Column" padding="P6" height="HScreen">
      <FlexBox flexDirection="Column" padding="P6" height="HFull" gap="Gap4">
        <NavigationListItems items={navigationItems} />
      </FlexBox>
    </FlexBox>
  );
};

export default VerticalNavigation;
