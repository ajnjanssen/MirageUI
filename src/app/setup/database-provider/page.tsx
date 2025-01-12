import React from "react";
import Container from "@/app/components/templates/container/container";
import FlexBox from "@/app/components/templates/flex/FlexBox";
import H1 from "@/app/components/atoms/text/heading/H1";
import Form from "@/app/components/molecules/form/Form";
import H2 from "@/app/components/atoms/text/heading/H2";
import GridBox from "@/app/components/templates/grid/GridBox";
import { Input } from "@/app/components/atoms/form/input";
import { Label } from "@/app/components/atoms/form/label";

function page() {
  return (
<Form className="p-4" margin="MxAuto" width="w-full" height="HFull">
        <H2>Database</H2>
        <GridBox gridTemplateColumns="Col2" justifyItems="Stretch">
          <Label htmlFor="DATABASE_URL">DATABASE_URL</Label>
          <Input
            id="DATABASE_URL"
            type="text"
            placeholder="your_database_url"
          />
        </GridBox>
      </Form>
  );
}

export default page;
