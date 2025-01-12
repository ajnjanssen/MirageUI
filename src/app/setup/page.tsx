import React from "react";
import Container from "@/app/components/templates/container/container";
import FlexBox from "@/app/components/templates/flex/FlexBox";
import P from "../components/atoms/text/text/p";
import H1 from "../components/atoms/text/heading/H1";

function Page() {
  return (
    <Container glass>
      <FlexBox flexDirection="Column" gap="Gap4" padding="P4">
        <H1>Welcome to the setup page</H1>
        <P>
          Welcome to the setup page. Here you can configure various settings for
          your application.
        </P>
        <P>
          Use the navigation menu on the left to access different sections such
          as Users, Cloud Services, and more.
        </P>
      </FlexBox>
    </Container>
  );
}

export default Page;
