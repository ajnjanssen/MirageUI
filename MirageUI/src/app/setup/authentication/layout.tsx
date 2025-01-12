import React from "react";
import InnerLayout from "@/app/components/templates/layout/InnerLayout";
import VerticalNavigation from "@/app/components/templates/navigation/VerticalNavigation";
import GridBox from "@/app/components/templates/grid/GridBox";
import GridInner from "@/app/components/templates/grid/GridInner";
import Container from "@/app/components/templates/container/container";
import { navigationItems } from "@/app/config/navigation/setup/authentication/navigationConfig";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <InnerLayout>
      <Container padding="Py6">
        <GridBox
          gridTemplateColumns="Col3"
          gap="Gap8"
          justifyItems="Start"
          gridAutoFlow="ColDense"
        >
          <GridInner colSpan="ColSpan1" width="w-full">
            <VerticalNavigation items={navigationItems} />
          </GridInner>

          <GridInner colSpan="ColSpan2" width="w-full">
            <Container padding="P8" glass>
              {children}
            </Container>
          </GridInner>
        </GridBox>
      </Container>
    </InnerLayout>
  );
}
