import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      "base-100": "#0d1117", // Background
      "base-200": "#161b22", // Secondary background
      "base-300": "#21262d", // Tertiary background
      "base-content": "#fff", // Primary text
      primary: "#1f6feb", // Primary accent
      secondary: "#8b949e", // Secondary text
      warning: "#d29922", // Warning
      error: "#f85149", // Error
      disabled: "#484f58", // Disabled
    },
    extend: {
      boxShadow: {
        glass: "0 4px 30px rgba(0, 0, 0, 0.1)",
      },
      backdropFilter: {
        none: "none",
        blur: "blur(10px)",
      },
    },
  },
  plugins: [
    function ({
      addUtilities,
    }: {
      addUtilities: (
        utilities: Record<string, any>,
        options?: Partial<{ respectPrefix: boolean; respectImportant: boolean }>
      ) => void;
    }) {
      const newUtilities = {
        ".glass": {
          isolation: "isolate",
          aspectRatio: "16 / 9",
          borderRadius: "0.75rem",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          ringWidth: "1px",
          ringColor: "rgba(0, 0, 0, 0.05)",
          borderBottomColor: "rgba(255, 255, 255, 0.1)",
          borderBottom: "4px solid rgba(255, 255, 255, 0.1)",
        },
      };
      addUtilities(newUtilities);
    },
  ],
} satisfies Config;
