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
        <div className="relative w-screen h-screen bg-white">
          <div className="z-10">{children}</div>
          <div className="-z-10 absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        </div>
      </body>
    </html>
  );
};

export default Layout;
