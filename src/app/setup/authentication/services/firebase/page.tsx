import React from "react";
import Container from "@/app/components/templates/container/container";
import FlexBox from "@/app/components/templates/flex/FlexBox";
import H1 from "@/app/components/atoms/text/heading/H1";
import Form from "@/app/components/molecules/form/Form";
import H2 from "@/app/components/atoms/text/heading/H2";
import GridBox from "@/app/components/templates/grid/GridBox";
import { Label } from "@/app/components/atoms/form/label";
import { Input } from "@/app/components/atoms/form/input";

function page() {
  return (
      <Form className="p-4" margin="MxAuto" width="w-full" height="HFull">
        <H2>Firebase</H2>
        <GridBox gridTemplateColumns="Col2" justifyItems="Stretch">
          <Label htmlFor="NEXT_PUBLIC_FIREBASE_API_KEY">
            NEXT_PUBLIC_FIREBASE_API_KEY
          </Label>
          <Input
            id="NEXT_PUBLIC_FIREBASE_API_KEY"
            type="text"
            placeholder="your_firebase_api_key"
          />
        </GridBox>
        <GridBox gridTemplateColumns="Col2" justifyItems="Stretch">
          <Label htmlFor="NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN">
            NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
          </Label>
          <Input
            id="NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN"
            type="text"
            placeholder="your_firebase_auth_domain"
          />
        </GridBox>
        <GridBox gridTemplateColumns="Col2" justifyItems="Stretch">
          <Label htmlFor="NEXT_PUBLIC_FIREBASE_PROJECT_ID">
            NEXT_PUBLIC_FIREBASE_PROJECT_ID
          </Label>
          <Input
            id="NEXT_PUBLIC_FIREBASE_PROJECT_ID"
            type="text"
            placeholder="your_firebase_project_id"
          />
        </GridBox>
        <GridBox gridTemplateColumns="Col2" justifyItems="Stretch">
          <Label htmlFor="NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET">
            NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
          </Label>
          <Input
            id="NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET"
            type="text"
            placeholder="your_firebase_storage_bucket"
          />
        </GridBox>
        <GridBox gridTemplateColumns="Col2" justifyItems="Stretch">
          <Label htmlFor="NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID">
            NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
          </Label>
          <Input
            id="NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID"
            type="text"
            placeholder="your_firebase_messaging_sender_id"
          />
        </GridBox>
        <GridBox gridTemplateColumns="Col2" justifyItems="Stretch">
          <Label htmlFor="NEXT_PUBLIC_FIREBASE_APP_ID">
            NEXT_PUBLIC_FIREBASE_APP_ID
          </Label>
          <Input
            id="NEXT_PUBLIC_FIREBASE_APP_ID"
            type="text"
            placeholder="your_firebase_app_id"
          />
        </GridBox>
        <GridBox gridTemplateColumns="Col2" justifyItems="Stretch">
          <Label htmlFor="NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID">
            NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
          </Label>
          <Input
            id="NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID"
            type="text"
            placeholder="your_firebase_measurement_id"
          />
        </GridBox>
      </Form>

  );
}

export default page;
