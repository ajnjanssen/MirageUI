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
      "base-100": "#f0f4ff", // Light background to complement the soft tones
      "base-200": "#d9e4ff", // Secondary light tone
      "base-300": "#b3caff", // Soft blue tertiary background
      "base-content": "#2c3e50", // Dark text for contrast
      primary: "#6e8cf7", // Soft accent matching the glow effect
      secondary: "#a7b8ff", // Subtle secondary for text
      warning: "#ffae42", // Slightly muted warning tone
      error: "#f76e6e", // Soft error red
      disabled: "#a0aec0", // Neutral disabled tone
    },
    extend: {
      boxShadow: {
        glass: "0 8px 30px rgba(174, 194, 224, 0.4)",
        glow: "0 0 10px rgba(174, 194, 224, 0.8)",
      },
      backdropFilter: {
        none: "none",
        blur: "blur(20px)",
      },
      gradientColorStops: {
        primary: "#6e8cf7",
        secondary: "#b3caff",
      },
      backgroundImage: {
        "soft-gradient": "linear-gradient(145deg, #d9e4ff, #f0f4ff)",
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
          aspectRatio: "auto",
          borderRadius: "0.5rem",
          backgroundColor: "rgba(255, 255, 255, 0.4)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow: "0 8px 30px rgba(174, 194, 224, 0.4)",
          border: "1px solid rgba(255, 255, 255, 0.4)",
        },
        ".glow": {
          boxShadow: "0 0 10px rgba(174, 194, 224, 0.8)",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
        },
      };
      addUtilities(newUtilities);
    },
  ],
} satisfies Config;
