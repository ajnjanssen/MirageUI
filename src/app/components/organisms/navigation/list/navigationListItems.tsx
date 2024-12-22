import InnerListItem from "@/app/components/molecules/navigation/vertical/innerListItem";
import ListItem from "@/app/components/molecules/navigation/vertical/listItem";
import FlexBox from "@/app/components/templates/flex/FlexBox";
import { NavigationItem } from "@/app/config/navigation/navigationConfig";
import React, { JSX, useState } from "react";

interface NavigationListItemsProps {
  items: NavigationItem[];
}

/**
 * NavigationListItems component that renders a list of ListItem components.
 *
 * @param {Object} props - The properties object.
 * @param {Array} props.items - The list of items to be rendered.
 * @returns {JSX.Element} The rendered NavigationListItems component.
 */
function NavigationListItems({ items }: NavigationListItemsProps): JSX.Element {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FlexBox flexDirection="Column" gap="Gap2">
      {items.map((item, index) => (
        <ListItem
          key={index}
          text={item.text}
          collapsible={!!item.children}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        >
          {item.children &&
            item.children.map((child: NavigationItem, childIndex: number) => (
              <InnerListItem
                key={childIndex}
                text={child.text}
                icon={child.icon}
                padding="P2"
              />
            ))}
        </ListItem>
      ))}
    </FlexBox>
  );
}

export default NavigationListItems;
