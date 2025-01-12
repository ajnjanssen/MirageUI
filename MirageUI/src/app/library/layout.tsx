import React from "react";
import InnerLayout from "@/app/components/templates/layout/InnerLayout";
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
      <Container padding="Py6">
        <GridBox
          gridTemplateColumns="Col3"
          gap="Gap8"
          justifyItems="Start"
          gridAutoFlow="ColDense"
        >
          <GridInner width="w-full">
            <Container width="w-full" padding="P6" glass>
              {children}
            </Container>
          </GridInner>
          <GridInner width="w-full">
            <Container width="w-full" padding="P6" glass>
              {children}
            </Container>
          </GridInner>
          <GridInner width="w-full">
            <Container width="w-full" padding="P6" glass>
              {children}
            </Container>
          </GridInner>
        </GridBox>
      </Container>
    </InnerLayout>
  );
}
