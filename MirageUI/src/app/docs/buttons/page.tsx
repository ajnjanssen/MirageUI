import React from "react";
import Container from "@/app/components/templates/container/container";
import Heading from "@/app/components/atoms/heading/heading";

function page() {
  return (
    <>
      <Container>
        <Heading level={1} text="Buttons" color="primary" />
        <Container grid cols="grid-cols-3" gap="gap-4"></Container>
      </Container>
    </>
  );
}

export default page;
