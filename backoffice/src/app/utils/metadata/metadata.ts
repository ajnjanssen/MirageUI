// src/utils/metadata/metadata.ts

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MirageUI",
  description: "MirageUI is a collection of UI components for React.",
};

/**
 * Creates a new metadata object by merging the provided custom metadata with the default metadata.
 *
 * @param customMetadata - Partial metadata object to override the default metadata.
 * @returns A new metadata object with the combined properties.
 */
export const createMetadata = (customMetadata: Partial<Metadata>): Metadata => {
  return {
    ...metadata,
    ...customMetadata,
  };
};
