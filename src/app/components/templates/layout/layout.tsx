import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  nunito: { variable: string };
}

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
