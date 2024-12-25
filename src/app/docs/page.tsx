import React from "react";
import H1 from "@/app/components/atoms/text/heading/H1";
import H2 from "@/app/components/atoms/text/heading/H2";
import P from "@/app/components/atoms/text/text/p";
import FlexBox from "../components/templates/flex/FlexBox";

function DocsPage() {
  return (
    <FlexBox flexDirection="Column" gap="Gap8">
      <H1
        borderColor="primary"
        fontWeight="black"
        textSize="xxxl"
        textColor="primary"
      >
        Welcome to MirageUI Documentation
      </H1>
      <P>
        MirageUI is a comprehensive collection of user interface components
        designed specifically for React applications. Our goal is to provide
        developers with a robust and versatile toolkit to build modern and
        visually appealing web applications with ease.
      </P>

      <H2
        borderColor="primary"
        fontWeight="black"
        textSize="xxl"
        textColor="baseContent"
      >
        Introduction
      </H2>
      <P>
        MirageUI offers a wide range of UI components, including buttons,
        containers, forms, and more. Each component is built with flexibility
        and customization in mind, ensuring that you can tailor them to fit the
        unique needs of your project.
      </P>
    </FlexBox>
  );
}

export default DocsPage;
