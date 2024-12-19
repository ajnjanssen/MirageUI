// src/utils/font.ts

import { Geist, Geist_Mono, Nunito } from "next/font/google";

// Font constants in module scope
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

/**
 * Initializes the Geist Mono font with the specified configuration.
 *
 * @param {Object} config - The configuration object for the Geist Mono font.
 * @param {string} config.variable - The CSS variable name for the font.
 * @param {string[]} config.subsets - The subsets of the font to include.
 * @returns {Object} The initialized Geist Mono font configuration.
 */
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const fonts = {
  geistSans,
  geistMono,
  nunito,
};
