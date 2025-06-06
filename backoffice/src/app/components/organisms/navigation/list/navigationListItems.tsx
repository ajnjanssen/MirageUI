"use client";

import InnerListItem from "@/app/components/molecules/navigation/vertical/innerListItem";
import ListItem from "@/app/components/molecules/navigation/vertical/listItem";
import Container from "@/app/components/templates/container/container";
import FlexBox from "@/app/components/templates/flex/FlexBox";
import {
  InnerListItemConfig,
  NavigationItem,
} from "@/app/config/navigation/navigationConfig";
import React, { JSX, useState } from "react";

interface NavigationListItemsProps {
  items: NavigationItem[];
  collapsable?: boolean;
}

/**
 * NavigationListItems component that renders a list of ListItem components.
 *
 * @param {Object} props - The properties object.
 * @param {Array} props.items - The list of items to be rendered.
 * @returns {JSX.Element} The rendered NavigationListItems component.
 */
function NavigationListItems({
  items,
  collapsable = true,
}: NavigationListItemsProps): JSX.Element {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    if (collapsable) {
      setOpenIndex(openIndex === index ? null : index);
    }
  };

  return (
    <Container>
      <FlexBox flexDirection="Column" gap="Gap2">
        {items.map((item, index) => (
          <ListItem
            key={index}
            text={item.text}
            collapsible={collapsable && !!item.children}
            isOpen={collapsable ? openIndex === index : true}
            onToggle={() => handleToggle(index)}
          >
            {item.children &&
              item.children.map(
                (child: InnerListItemConfig, childIndex: number) => (
                  <InnerListItem
                    key={childIndex}
                    text={child.text}
                    icon={child.icon}
                    padding="P2"
                    link={child.link}
                  />
                )
              )}
          </ListItem>
        ))}
      </FlexBox>
    </Container>
  );
}

export default NavigationListItems;
