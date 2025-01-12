import { Input } from "@/app/components/atoms/form/input";
import { Label } from "@/app/components/atoms/form/label";
import H2 from "@/app/components/atoms/text/heading/H2";
import Form from "@/app/components/molecules/form/Form";
import GridBox from "@/app/components/templates/grid/GridBox";
import React from "react";

function page() {
  return (
    <Form className="p-4" margin="MxAuto" width="w-full" height="HFull">
      <H2>API Keys</H2>
      <GridBox gridTemplateColumns="Col2" justifyItems="Stretch">
        <Label htmlFor="NEXT_PUBLIC_GOOGLE_MAPS_API_KEY">
          NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
        </Label>
        <Input
          id="NEXT_PUBLIC_GOOGLE_MAPS_API_KEY"
          type="text"
          placeholder="your_google_maps_api_key"
        />
      </GridBox>
      <GridBox gridTemplateColumns="Col2" justifyItems="Stretch">
        <Label htmlFor="NEXT_PUBLIC_STRIPE_API_KEY">
          NEXT_PUBLIC_STRIPE_API_KEY
        </Label>
        <Input
          id="NEXT_PUBLIC_STRIPE_API_KEY"
          type="text"
          placeholder="your_stripe_api_key"
        />
      </GridBox>
    </Form>
  );
}

export default page;
