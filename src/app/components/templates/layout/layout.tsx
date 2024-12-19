import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  nunito: { variable: string };
}

/**
 * Layout component that wraps the application content.
 *
 * @param {LayoutProps} props - The properties for the Layout component.
 * @param {React.ReactNode} props.children - The child elements to be rendered within the layout.
 * @param {any} props.nunito - The nunito font configuration object.
 * @returns {JSX.Element} The rendered layout component.
 */
const Layout: React.FC<LayoutProps> = ({ children, nunito }) => {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${nunito.variable} ${nunito.variable} antialiased`}
      >
        <div className="relative w-screen h-screen">
          <div className="z-10">{children}</div>
        </div>
      </body>
    </html>
  );
};

export default Layout;
