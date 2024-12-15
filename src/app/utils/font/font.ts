// src/utils/font.ts

import { Geist, Geist_Mono, Nunito } from "next/font/google";

// Font constants in module scope
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

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
