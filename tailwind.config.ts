import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        "primary-hover": "var(--primary-hover)",
        "primary-light": "var(--primary-light)",
        "text-dark": "var(--text-dark)",
        "text-muted": "var(--text-muted)",
        "bg-page": "var(--bg-page)",
        "border-light": "var(--border-light)",
        "info-bg": "var(--info-bg)",
        "info-icon-bg": "var(--info-icon-bg)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "var(--container-max)",
      },
      borderRadius: {
        card: "var(--radius-card)",
        button: "var(--radius-button)",
        logo: "var(--radius-logo)",
      },
      boxShadow: {
        card: "var(--shadow-card)",
        "card-soft": "var(--shadow-card-soft)",
      },
    },
  },
  plugins: [],
};

export default config;
