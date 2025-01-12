import React from "react";
import Form from "@/app/components/molecules/form/Form";
import H2 from "@/app/components/atoms/text/heading/H2";
import GridBox from "@/app/components/templates/grid/GridBox";
import { Label } from "@/app/components/atoms/form/label";
import { Input } from "@/app/components/atoms/form/input";

function page() {
  return (
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
  );
}

export default page;
