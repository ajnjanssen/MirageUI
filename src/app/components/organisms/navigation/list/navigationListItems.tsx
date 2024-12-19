import React, { Children, JSX } from "react";

interface NavigationListItemsProps {
  children: React.ReactNode;
}

/**
 * A functional component that renders a list of navigation items.
 *
 * @param {NavigationListItemsProps} props - The props for the component.
 * @param {React.ReactNode} props.children - The child elements to be rendered within the navigation list.
 * @returns {JSX.Element} The rendered navigation list items.
 */
function NavigationListItems({
  children,
}: NavigationListItemsProps): JSX.Element {
  return <div className="flex flex-col justify-start w-full">{children}</div>;
}

export default NavigationListItems;
