import React from "react";
import SectionHeader from "@/app/components/molecules/sections/section-header/sectionHeader";

function page() {
  return (
    <SectionHeader
      width="w-full"
      headerText="Library"
      headerSize={1}
      headerColor="primary"
      subText="This is the library page"
      textColor="secondary"
      textSize="large"
      textLeading="Relaxed"
      container
    />
  );
}

export default page;
