// src/utils/metadata/metadata.ts

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MirageUI",
  description: "MirageUI is a collection of UI components for React.",
};

export const createMetadata = (customMetadata: Partial<Metadata>): Metadata => {
  return {
    ...metadata,
    ...customMetadata,
  };
};
