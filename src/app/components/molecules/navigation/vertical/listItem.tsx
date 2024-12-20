import FlexBox from "@/app/components/templates/flex/FlexBox";
import React, { JSX, useState } from "react";

interface ListItemProps {
  text: string;
  collapsible?: boolean;
  children?: React.ReactNode;
}

/**
 * ListItem component renders a button with optional collapsible content.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.text - The text to display on the button.
 * @param {boolean} [props.collapsible=false] - Determines if the item is collapsible.
 * @param {React.ReactNode} props.children - The content to display when the item is expanded.
 * @returns {JSX.Element} The rendered ListItem component.
 */
function ListItem({
  text,
  collapsible = false,
  children,
}: ListItemProps): JSX.Element {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleMenu = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        className="flex justify-start items-center space-x-6 w-full rounded h-fit transition-all"
      >
        <p className="text-sm leading-5 uppercase">{text}</p>
        {collapsible && (
          <svg
            id="icon1"
            className={`transform  transition-all ${
              isCollapsed ? "rotate-90" : "rotate-180"
            }`}
            width="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 15L12 9L6 15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
      {!isCollapsed && (
        <FlexBox uniqueId="menu1" flexDirection="Column" gap="Gap2">
          {children}
        </FlexBox>
      )}
    </>
  );
}

export default ListItem;
