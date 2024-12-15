import React from "react";
import InnerLayout from "@/app/components/templates/layout/InnerLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <InnerLayout>{children}</InnerLayout>;
}
