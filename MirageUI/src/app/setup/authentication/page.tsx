import React from "react";
import Form from "@/app/components/molecules/form/Form";
import H2 from "@/app/components/atoms/text/heading/H2";
import GridBox from "@/app/components/templates/grid/GridBox";
import { Label } from "@/app/components/atoms/form/label";
import { Input } from "@/app/components/atoms/form/input";

function page() {
  return (
    <Form className="p-4" margin="MxAuto" width="w-full" height="HFull">
      <H2>Authentication</H2>
      <GridBox gridTemplateColumns="Col2" justifyItems="Stretch">
        <Label htmlFor="NEXT_PUBLIC_AUTH0_DOMAIN">
          NEXT_PUBLIC_AUTH0_DOMAIN
        </Label>
        <Input
          id="NEXT_PUBLIC_AUTH0_DOMAIN"
          type="text"
          placeholder="your_auth0_domain"
        />
      </GridBox>
      <GridBox gridTemplateColumns="Col2" justifyItems="Stretch">
        <Label htmlFor="NEXT_PUBLIC_AUTH0_CLIENT_ID">
          NEXT_PUBLIC_AUTH0_CLIENT_ID
        </Label>
        <Input
          id="NEXT_PUBLIC_AUTH0_CLIENT_ID"
          type="text"
          placeholder="your_auth0_client_id"
        />
      </GridBox>
      <GridBox gridTemplateColumns="Col2" justifyItems="Stretch">
        <Label htmlFor="NEXT_PUBLIC_AUTH0_CLIENT_SECRET">
          NEXT_PUBLIC_AUTH0_CLIENT_SECRET
        </Label>
        <Input
          id="NEXT_PUBLIC_AUTH0_CLIENT_SECRET"
          type="text"
          placeholder="your_auth0_client_secret"
        />
      </GridBox>
    </Form>
  );
}

export default page;
