import React from "react";

function DocsPage() {
  return (
    <div className="">
      <h1 className="text-3xl font-bold mb-4">
        Welcome to MirageUI Documentation
      </h1>
      <p className="text-lg mb-6">
        MirageUI is a comprehensive collection of user interface components
        designed specifically for React applications. Our goal is to provide
        developers with a robust and versatile toolkit to build modern and
        visually appealing web applications with ease.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p className="text-base">
          MirageUI offers a wide range of UI components, including buttons,
          containers, forms, and more. Each component is built with flexibility
          and customization in mind, ensuring that you can tailor them to fit
          the unique needs of your project.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Features</h2>
        <ul className="list-disc list-inside">
          <li className="text-base mb-2">Modern and sleek design</li>
          <li className="text-base mb-2">Highly customizable components</li>
          <li className="text-base mb-2">
            Built with TypeScript for type safety
          </li>
          <li className="text-base mb-2">Responsive and accessible</li>
          <li className="text-base mb-2">Seamless integration with React</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Getting Started</h2>
        <p className="text-base">
          To get started with MirageUI, follow our comprehensive guide that
          covers installation, basic usage, and examples of each component.
          Whether you're a seasoned developer or just starting out, our
          documentation provides all the information you need to leverage
          MirageUI to its fullest potential.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          Support and Contributions
        </h2>
        <p className="text-base">
          MirageUI is an open-source project, and we welcome contributions from
          the community. If you encounter any issues or have suggestions for
          improvements, please feel free to submit an issue or a pull request on
          our GitHub repository. Your feedback and contributions are invaluable
          in making MirageUI even better.
        </p>
      </section>

      <footer className="mt-8">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} MirageUI. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default DocsPage;
