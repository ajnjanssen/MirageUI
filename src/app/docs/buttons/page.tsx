import React from "react";
import Button from "@/app/components/atoms/button/button";
import Container from "@/app/components/templates/container/container";
import Heading from "@/app/components/atoms/heading/heading";

function page() {
  return (
    <>
      <Container>
        <Heading level={1} text="Buttons" color="text-primary" />
        <Container grid cols="grid-cols-3" gap="gap-4">
          <Button text="Primary Button" type="primary" />
          <Button text="Secondary Button" type="secondary" />
          <Button text="Base-100 Button" type="base-100" />
          <Button text="Base-200 Button" type="base-200" />
          <Button text="Base-300 Button" type="base-300" />
          <Button text="Base Content Button" type="base-content" />
          <Button text="Warning Button" type="warning" />
          <Button text="Error Button" type="error" />
          <Button text="Disabled Button" type="disabled" disabled={true} />
        </Container>
      </Container>
    </>
  );
}

export default page;
