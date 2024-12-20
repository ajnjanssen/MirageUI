"use client";

import React from "react";
import NavigationListItems from "@/app/components/organisms/navigation/list/navigationListItems";
import ListItem from "@/app/components/molecules/navigation/vertical/listItem";
import InnerListItem from "@/app/components/molecules/navigation/vertical/innerListItem";
import FlexBox from "@/app/components/templates/flex/FlexBox";

const VerticalNavigation = () => {
  return (
    <FlexBox flexDirection="Column" padding="P6" height="HScreen">
      <FlexBox flexDirection="Column" padding="P6" height="HFull" gap="Gap4">
        <InnerListItem text="Messages" icon="settings" />
        <InnerListItem text="Messages" icon="message" />
        <NavigationListItems>
          <ListItem text="Home" collapsible>
            <InnerListItem text="Messages" icon="settings" padding="Px4" />
            <InnerListItem text="Messages" icon="message" padding="Px4" />
          </ListItem>
        </NavigationListItems>

        <NavigationListItems>
          <ListItem text="Home" collapsible>
            <InnerListItem text="Messages" icon="message" padding="Px4" />
            <InnerListItem text="Messages" icon="message" padding="Px4" />
          </ListItem>
        </NavigationListItems>

        <NavigationListItems>
          <ListItem text="Home" collapsible>
            <InnerListItem text="Messages" icon="message" padding="Px4" />
            <InnerListItem text="Messages" icon="message" padding="Px4" />
          </ListItem>
        </NavigationListItems>
      </FlexBox>
    </FlexBox>
  );
};

export default VerticalNavigation;
