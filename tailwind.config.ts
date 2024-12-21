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
      "base-100": "#f5f5f5",
      "base-200": "#e0e0e0",
      "base-300": "#c2c2c2",
      "base-content": "#1f2937",
      primary: "#007bff",
      secondary: "#6c757d",
      warning: "#ffc107",
      error: "#dc3545",
      disabled: "#6c757d",
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
          background: "rgba(255, 255, 255, 0.2)",
          borderRadius: "10px",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          color: "#333333",
        },
      };
      addUtilities(newUtilities);
    },
  ],
} satisfies Config;
