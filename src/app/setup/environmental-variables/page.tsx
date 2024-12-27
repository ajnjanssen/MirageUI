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
      <H1>Environmental Variables</H1>
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

      {/* Firebase */}
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

      {/* Supabase */}
      <Form className="p-4" margin="MxAuto" width="w-full" height="HFull">
        <H2>Supabase</H2>
        <GridBox gridTemplateColumns="Col2" justifyItems="Stretch">
          <Label htmlFor="NEXT_PUBLIC_SUPABASE_URL">
            NEXT_PUBLIC_SUPABASE_URL
          </Label>
          <Input
            id="NEXT_PUBLIC_SUPABASE_URL"
            type="text"
            placeholder="your_supabase_url"
          />
        </GridBox>
        <GridBox gridTemplateColumns="Col2" justifyItems="Stretch">
          <Label htmlFor="NEXT_PUBLIC_SUPABASE_ANON_KEY">
            NEXT_PUBLIC_SUPABASE_ANON_KEY
          </Label>
          <Input
            id="NEXT_PUBLIC_SUPABASE_ANON_KEY"
            type="text"
            placeholder="your_supabase_anon_key"
          />
        </GridBox>
      </Form>

      {/* AWS */}
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

      {/* Database */}
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

      {/* Authentication */}
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

      {/* API Keys */}
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
    </FlexBox>
  );
}

export default page;
