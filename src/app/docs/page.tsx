import React from "react";
import H1 from "@/app/components/atoms/text/heading/H1";
import H2 from "@/app/components/atoms/text/heading/H2";
import P from "@/app/components/atoms/text/text/p";
import Container from "../components/templates/container/container";
import ListItem from "../components/atoms/list/listItem";
import BulletList from "../components/molecules/list/bulletList";
import FlexBox from "../components/templates/flex/FlexBox";
import Label from "../components/atoms/text/label/label";

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

      <H2
        borderColor="primary"
        fontWeight="black"
        textSize="xxl"
        textColor="baseContent"
      >
        Features
      </H2>
      <BulletList>
        <ListItem>Modern and sleek design</ListItem>
        <ListItem>Responsive and mobile-friendly</ListItem>
        <ListItem>Highly customizable</ListItem>
        <ListItem>Easy to use and integrate</ListItem>
      </BulletList>

      <H2
        borderColor="primary"
        fontWeight="black"
        textSize="xxl"
        textColor="baseContent"
      >
        Getting Started
      </H2>
      <P>
        To get started with MirageUI, follow our comprehensive guide that covers
        installation, basic usage, and examples of each component. Whether
        you're a seasoned developer or just starting out, our documentation
        provides all the information you need to leverage MirageUI to its
        fullest potential.
      </P>

      <H2
        borderColor="primary"
        fontWeight="black"
        textSize="xxl"
        textColor="baseContent"
      >
        Support and Contributions
      </H2>
      <P>
        MirageUI is an open-source project, and we welcome contributions from
        the community. If you encounter any issues or have suggestions for
        improvements, please feel free to submit an issue or a pull request on
        our GitHub repository. Your feedback and contributions are invaluable in
        making MirageUI even better.
      </P>

      <footer className="mt-8">
        <P>&copy; {new Date().getFullYear()} MirageUI. All rights reserved.</P>
      </footer>
    </FlexBox>
  );
}

export default DocsPage;
