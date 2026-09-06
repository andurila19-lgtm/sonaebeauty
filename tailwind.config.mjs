/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        "canvas": "#FBF8F4",
        "canvas-alt": "#F3ECE3",
        "primary-salon": "#7F513C",
        "primary-dark": "#633B2A",
        "primary-light": "#F6ECE6",
        "cream-card": "#FFFFFF",
        "cream-border": "#E8DFD5",
        "text-dark": "#1A1816",
        "text-muted": "#5C544E",
        "text-subtle": "#8E847C",
        "gold-star": "#C68D37",
        "brand-wa": "#25D366"
      },
      fontFamily: {
        serif: ["'Libre Baskerville'", "Georgia", "serif"],
        sans: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"]
      }
    },
  },
  plugins: [],
};
