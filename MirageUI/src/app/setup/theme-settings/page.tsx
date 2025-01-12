import React from "react";
import Container from "@/app/components/templates/container/container";
import FlexBox from "@/app/components/templates/flex/FlexBox";
import H1 from "@/app/components/atoms/text/heading/H1";

function page() {
  return (
    <Container>
      <FlexBox width="w-full" height="HFull" flexDirection="Column" gap="Gap16">
        <H1>Theme settings</H1>
      </FlexBox>
    </Container>
  );
}

export default page;
