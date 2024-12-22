import React from "react";
import InnerLayout from "@/app/components/templates/layout/InnerLayout";
import VerticalNavigation from "@/app/components/templates/navigation/VerticalNavigation";
import GridBox from "@/app/components/templates/grid/GridBox";
import GridInner from "@/app/components/templates/grid/GridInner";
import Container from "../components/templates/container/container";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <InnerLayout>
      <GridBox
        gridTemplateColumns="Col4"
        gap="Gap8"
        justifyItems="Start"
        gridAutoFlow="ColDense"
      >
        <GridInner colSpan="ColSpan1">
          <VerticalNavigation />
        </GridInner>

        <GridInner colSpan="ColSpan3">
          <Container>{children}</Container>
        </GridInner>
      </GridBox>
    </InnerLayout>
  );
}
