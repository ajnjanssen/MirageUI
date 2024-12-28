import React from "react";
import Form from "@/app/components/molecules/form/Form";
import H2 from "@/app/components/atoms/text/heading/H2";
import GridBox from "@/app/components/templates/grid/GridBox";
import { Label } from "@/app/components/atoms/form/label";
import { Input } from "@/app/components/atoms/form/input";

function page() {
  return (
    <Form className="p-4" margin="MxAuto" width="w-full" height="HFull">
      <H2>AWS</H2>
      <GridBox gridTemplateColumns="Col2" justifyItems="Stretch">
        <Label htmlFor="AWS_ACCESS_KEY_ID">AWS_ACCESS_KEY_ID</Label>
        <Input
          id="AWS_ACCESS_KEY_ID"
          type="text"
          placeholder="your_aws_access_key_id"
        />
      </GridBox>
      <GridBox gridTemplateColumns="Col2" justifyItems="Stretch">
        <Label htmlFor="AWS_SECRET_ACCESS_KEY">AWS_SECRET_ACCESS_KEY</Label>
        <Input
          id="AWS_SECRET_ACCESS_KEY"
          type="text"
          placeholder="your_aws_secret_access_key"
        />
      </GridBox>
      <GridBox gridTemplateColumns="Col2" justifyItems="Stretch">
        <Label htmlFor="AWS_REGION">AWS_REGION</Label>
        <Input id="AWS_REGION" type="text" placeholder="your_aws_region" />
      </GridBox>
      <GridBox gridTemplateColumns="Col2" justifyItems="Stretch">
        <Label htmlFor="AWS_S3_BUCKET">AWS_S3_BUCKET</Label>
        <Input
          id="AWS_S3_BUCKET"
          type="text"
          placeholder="your_s3_bucket_name"
        />
      </GridBox>
    </Form>
  );
}

export default page;
