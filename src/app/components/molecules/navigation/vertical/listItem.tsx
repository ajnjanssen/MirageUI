import FlexBox from "@/app/components/templates/flex/FlexBox";
import React, { JSX, useRef, useEffect } from "react";

interface ListItemProps {
  text: string;
  collapsible?: boolean;
  children?: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
}

/**
 * ListItem component renders a button with optional collapsible content.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.text - The text to display on the button.
 * @param {boolean} [props.collapsible=false] - Determines if the item is collapsible.
 * @param {React.ReactNode} props.children - The content to display when the item is expanded.
 * @param {boolean} [props.isOpen=false] - Determines if the item is open.
 * @param {Function} [props.onToggle] - Function to call when the item is toggled.
 * @returns {JSX.Element} The rendered ListItem component.
 */
function ListItem({
  text,
  collapsible = false,
  children,
  isOpen = false,
  onToggle,
}: ListItemProps): JSX.Element {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isOpen
        ? `${contentRef.current.scrollHeight}px`
        : "0px";
    }
  }, [isOpen]);

  return (
    <>
      <button
        onClick={onToggle}
        className="flex justify-between items-center space-x-6 w-full rounded h-fit transition-all"
      >
        <p className="text-base-content">{text}</p>
        {collapsible && (
          <svg
            id="icon1"
            className={`transform transition-all text-base-content ${
              isOpen ? "rotate-180" : "rotate-90"
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
      <div
        ref={contentRef}
        className="transition-max-height duration-300 ease-in-out overflow-hidden"
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
      >
        <FlexBox uniqueId="menu1" flexDirection="Column" gap="Gap2">
          {children}
        </FlexBox>
      </div>
    </>
  );
}

export default ListItem;
