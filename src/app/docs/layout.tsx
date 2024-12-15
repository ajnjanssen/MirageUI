import React from "react";
import InnerLayout from "@/app/components/templates/layout/InnerLayout";
import VerticalNavigation from "@/app/components/organisms/navigation/VerticalNavigation";
import GridBox from "@/app/components/templates/grid/GridBox";
import GridInner from "@/app/components/templates/grid/GridInner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <InnerLayout>
      <GridBox
        gridTemplateColumns="Col6"
        justifyItems="Start"
        gridAutoFlow="ColDense"
      >
        <GridInner colSpan="ColSpan1">
          <VerticalNavigation />
        </GridInner>
        <GridInner colSpan="ColSpan5">{children}</GridInner>
      </GridBox>
    </InnerLayout>
  );
}
