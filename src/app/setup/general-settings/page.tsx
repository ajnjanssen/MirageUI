import React from "react";
import Container from "@/app/components/templates/container/container";
import FlexBox from "@/app/components/templates/flex/FlexBox";
import H1 from "@/app/components/atoms/text/heading/H1";
import Form from "@/app/components/molecules/form/Form";
import H2 from "@/app/components/atoms/text/heading/H2";
import GridBox from "@/app/components/templates/grid/GridBox";
import { Label } from "@/app/components/atoms/form/label";
import { Input } from "@/app/components/atoms/form/input";
import Divider from "@/app/components/atoms/format/divider";

function page() {
  return (
    <Container>
      <FlexBox width="w-full" height="HFull" flexDirection="Column" gap="Gap16">
        <H1>General settings</H1>
        <Form className="p-4" margin="MxAuto" width="w-full" height="HFull">
          {/* General */}
          <GridBox gridTemplateColumns="Col2" justifyItems="Stretch">
            <Label htmlFor="projectName">Project name</Label>
            <Input id="projectName" type="text" placeholder="My Project" />
          </GridBox>
          <GridBox gridTemplateColumns="Col2" justifyItems="Stretch">
            <Label htmlFor="logLevel">Log Level</Label>
            <Input id="logLevel" type="text" placeholder="info" />
          </GridBox>
          <GridBox gridTemplateColumns="Col2" justifyItems="Stretch">
            <Label htmlFor="sessionTimeout">Session Timeout</Label>
            <Input id="sessionTimeout" type="text" placeholder="3600" />
          </GridBox>
          <GridBox gridTemplateColumns="Col2" justifyItems="Stretch">
            <Label htmlFor="maxUploadSize">Max Upload Size</Label>
            <Input id="maxUploadSize" type="text" placeholder="10MB" />
          </GridBox>
          <GridBox gridTemplateColumns="Col2" justifyItems="Stretch">
            <Label htmlFor="allowedOrigins">Allowed Origins</Label>
            <Input
              id="allowedOrigins"
              type="text"
              placeholder="http://localhost:3000"
            />
          </GridBox>
          <Divider />
        </Form>
      </FlexBox>
      {/* Analytics */}
      <Form className="p-4" margin="MxAuto" width="w-full" height="HFull">
        <H2>Analytics</H2>
        <GridBox gridTemplateColumns="Col2" justifyItems="Stretch">
          <Label htmlFor="NEXT_PUBLIC_GOOGLE_ANALYTICS_ID">
            NEXT_PUBLIC_GOOGLE_ANALYTICS_ID
          </Label>
          <Input
            id="NEXT_PUBLIC_GOOGLE_ANALYTICS_ID"
            type="text"
            placeholder="your_google_analytics_id"
          />
        </GridBox>
      </Form>

      {/* Other */}
      <Form className="p-4" margin="MxAuto" width="w-full" height="HFull">
        <H2>Other</H2>
        <GridBox gridTemplateColumns="Col2" justifyItems="Stretch">
          <Label htmlFor="NEXT_PUBLIC_API_BASE_URL">
            NEXT_PUBLIC_API_BASE_URL
          </Label>
          <Input
            id="NEXT_PUBLIC_API_BASE_URL"
            type="text"
            placeholder="your_api_base_url"
          />
        </GridBox>
        <GridBox gridTemplateColumns="Col2" justifyItems="Stretch">
          <Label htmlFor="NEXT_PUBLIC_SENTRY_DSN">NEXT_PUBLIC_SENTRY_DSN</Label>
          <Input
            id="NEXT_PUBLIC_SENTRY_DSN"
            type="text"
            placeholder="your_sentry_dsn"
          />
        </GridBox>
      </Form>
    </Container>
  );
}

export default page;
