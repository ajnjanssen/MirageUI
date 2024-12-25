"use client";

import React from "react";
import NavigationListItems from "@/app/components/organisms/navigation/list/navigationListItems";
import { navigationItems } from "@/app/config/navigation/navigationConfig";
import FlexBox from "@/app/components/templates/flex/FlexBox";

const VerticalNavigation = () => {
  return (
    <div className="glass backdrop-filter backdrop-blur-lg w-full">
      <FlexBox flexDirection="Column" padding="P6" height="HFit" width="w-full">
        <FlexBox flexDirection="Column" padding="P6" height="HFull" gap="Gap4">
          <NavigationListItems items={navigationItems} />
        </FlexBox>
      </FlexBox>
    </div>
  );
};

export default VerticalNavigation;
