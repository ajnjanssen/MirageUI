import React from "react";

interface RootLayoutProps {
  children: React.ReactNode;
}

/**
 * InnerLayout component that wraps its children with a container div.
 *
 * @param {Readonly<RootLayoutProps>} props - The properties for the InnerLayout component.
 * @param {React.ReactNode} props.children - The child elements to be rendered inside the layout.
 * @returns {JSX.Element} The rendered InnerLayout component.
 */
export default function InnerLayout({ children }: Readonly<RootLayoutProps>) {
  return <div className="container mx-auto">{children}</div>;
}
