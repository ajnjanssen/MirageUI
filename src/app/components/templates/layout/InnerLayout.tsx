import React from "react";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function InnerLayout({ children }: Readonly<RootLayoutProps>) {
  return <div className="container mx-auto">{children}</div>;
}
