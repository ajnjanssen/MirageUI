import React from "react";
import SectionHeader from "@/app/components/molecules/sections/section-header/sectionHeader";

function page() {
  return (
    <SectionHeader
      headerText="Library"
      headerSize={1}
      headerColor="Primary"
      subText="This is the library page"
      textColor="Secondary"
      textSize="Large"
      textLeading="Relaxed"
      container
    />
  );
}

export default page;
