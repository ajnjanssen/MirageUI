import HeroIcon from "@/app/components/atoms/icon/hero/heroIcon";
import React, { Children, JSX, useState } from "react";

interface ListItemProps {
  text: string;
  icon?: string;
}

/**
 * Component that renders a list item with optional icon.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.text - The text to display in the list item.
 * @param {string} [props.icon] - The optional icon to display in the list item. These can be found on https://fonts.google.com/icons
 * @returns {JSX.Element} The rendered list item component.
 */
function InnerListItem({ text, icon }: ListItemProps): JSX.Element {
  return (
    <>
      {icon ? (
        <button className="flex justify-start items-center space-x-6 w-full focus:outline-none focus:text-indigo-400 text-white rounded pl-8">
          <HeroIcon icon={icon} />
          <p className="text-base leading-4">{text}</p>
        </button>
      ) : (
        <button className="flex justify-start items-center space-x-6 w-full focus:outline-none focus:text-indigo-400 text-white rounded pl-8">
          <p className="text-base leading-4">{text}</p>
        </button>
      )}
    </>
  );
}

export default InnerListItem;
