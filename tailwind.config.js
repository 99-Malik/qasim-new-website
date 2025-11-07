/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D81424",
        secondary: "#0A2154",
        tertiary: "#306EFF",
        graybg: "#F6F6F6",
		
        siemensPrimary: "#019997",
        siemensSecondary: "#FFFFFF",
        siemensBlob: "#E0F2F2", // Subtle teal tint - more visible

        boschPrimary: "#F80000",
        boschSecondary: "#2D3033",
        boschBlob: "#FFF5F5", // Subtle red tint

        samsungPrimary: "#000000",
        samsungSecondary: "#FFFFFF",
        samsungBlob: "#F5F5F5", // Subtle gray tint

        lgPrimary: "#A50034",
        lgSecondary: "#000000",
        lgBlob: "#FDF5F8", // Subtle pink/maroon tint
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
