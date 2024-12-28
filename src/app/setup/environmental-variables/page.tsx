import { Input } from "@/app/components/atoms/form/input";
import { Label } from "@/app/components/atoms/form/label";
import H1 from "@/app/components/atoms/text/heading/H1";
import H2 from "@/app/components/atoms/text/heading/H2";
import Form from "@/app/components/molecules/form/Form";
import FlexBox from "@/app/components/templates/flex/FlexBox";
import GridBox from "@/app/components/templates/grid/GridBox";
import React from "react";

function page() {
  return (
    <FlexBox width="w-full" height="HFull" flexDirection="Column" gap="Gap16">
      <H1>Environmental variables</H1>
      <Form className="p-4" margin="MxAuto" width="w-full" height="HFull">
        {/* General */}
        <H2>General</H2>
        <GridBox gridTemplateColumns="Col2" justifyItems="Stretch">
          <Label htmlFor="NODE_ENV">NODE_ENV</Label>
          <Input id="NODE_ENV" type="text" placeholder="development" />
        </GridBox>
        <GridBox gridTemplateColumns="Col2" justifyItems="Stretch">
          <Label htmlFor="PORT">PORT</Label>
          <Input id="PORT" type="text" placeholder="3000" />
        </GridBox>
      </Form>
    </FlexBox>
  );
}

export default page;
