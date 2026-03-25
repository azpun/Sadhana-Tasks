/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand & Navigation
        primary: {
          blue: "#3B82F6",
          dark: "#1E40AF",
        },
        sidebar: {
          navy: "#1E293B",
        },

        // Layout & Surfaces
        background: "#F8FAFC",
        surface: "#FFFFFF",
        border: "#E2E8F0",

        // Typography
        text: {
          primary: "#0F172A",
          secondary: "#64748B",
          muted: "#94A3B8",
        },

        // Status
        done: "#22C55E",
        progress: "#F59E0B",
        overdue: "#EF4444",
      },
    },
  },
  plugins: [],
};
