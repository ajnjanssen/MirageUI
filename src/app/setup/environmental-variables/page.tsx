// app/settings/page.tsx (Server Component)
import { Metadata } from "next";
import { getEnvVariables } from "@/app/lib/getEnvVariables";
import ClientForm from "@/app/setup/environmental-variables/ClientForm";
import FlexBox from "@/app/components/templates/flex/FlexBox";
import H1 from "@/app/components/atoms/text/heading/H1";

export default async function SettingsPage() {
  const envVariables = await getEnvVariables();

  return (
    <FlexBox width="w-full" height="HFull" flexDirection="Column" gap="Gap16">
      <H1>Environmental variables</H1>
      {/* Pass environment variables to the ClientForm */}
      <ClientForm envVariables={envVariables} />
    </FlexBox>
  );
}
