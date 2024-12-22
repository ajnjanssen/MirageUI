"use client";

import React from "react";
import NavigationListItems from "@/app/components/organisms/navigation/list/navigationListItems";
import { navigationItems } from "@/app/config/navigation/navigationConfig";
import FlexBox from "@/app/components/templates/flex/FlexBox";
import Container from "@/app/components/templates/container/container";

const VerticalNavigation = () => {
  return (
    <Container>
      <div className="glass isolate aspect-video w-96 rounded-xl shadow-lg ring-1 ring-black/5 backdrop-filter backdrop-blur-lg">
        <FlexBox flexDirection="Column" padding="P6" height="HScreen">
          <FlexBox
            flexDirection="Column"
            padding="P6"
            height="HFull"
            gap="Gap4"
          >
            <NavigationListItems items={navigationItems} />
          </FlexBox>
        </FlexBox>
      </div>
    </Container>
  );
};

export default VerticalNavigation;
