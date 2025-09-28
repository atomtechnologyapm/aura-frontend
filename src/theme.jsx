// theme.js
import { createSystem, defaultConfig } from "@chakra-ui/react";

const visionTheme = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: "#f7fafc" },
          100: { value: "#edf2f7" },
          200: { value: "#e2e8f0" },
          300: { value: "#cbd5e0" },
          400: { value: "#a0aec0" },
          500: { value: "#4318FF" },
          600: { value: "#3311CC" },
          700: { value: "#220A99" },
          800: { value: "#110566" },
          900: { value: "#000333" },
        },
        gray: {
          50: { value: "#f7fafc" },
          100: { value: "#edf2f7" },
          200: { value: "#e2e8f0" },
          300: { value: "#cbd5e0" },
          400: { value: "#a0aec0" },
          500: { value: "#718096" },
          600: { value: "#4a5568" },
          700: { value: "#2d3748" },
          800: { value: "#1a202c" },
          900: { value: "#171923" },
        },
        background: {
          main: { value: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" },
          dark: { value: "#0b1426" },
          card: { value: "rgba(255, 255, 255, 0.1)" },
        }
      },
      fonts: {
        heading: { value: "'Plus Jakarta Sans', sans-serif" },
        body: { value: "'Plus Jakarta Sans', sans-serif" },
      },
      fontSizes: {
        xs: { value: "0.75rem" },
        sm: { value: "0.875rem" },
        md: { value: "1rem" },
        lg: { value: "1.125rem" },
        xl: { value: "1.25rem" },
        "2xl": { value: "1.5rem" },
        "3xl": { value: "1.875rem" },
        "4xl": { value: "2.25rem" },
      },
      shadows: {
        glass: { value: "0 8px 32px 0 rgba(31, 38, 135, 0.37)" },
        glow: { value: "0 0 20px rgba(67, 24, 255, 0.3)" },
      },
    },
  },
});

export default visionTheme;
