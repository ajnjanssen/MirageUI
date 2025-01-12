import { fonts } from "@/app/utils/font/font";
import "@/app/globals.css";
import React from "react";
import { createMetadata } from "@/app/utils/metadata/metadata";
import Layout from "@/app/components/templates/layout/layout";

const { nunito } = fonts;
export const metadata = createMetadata({
  title: "MirageUI",
  description: "MirageUI is a collection of UI components for React.",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Layout nunito={nunito}>{children}</Layout>;
}
