/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "img-1": "url('/public/images/bg-1.jpg')",
        "img-2": "url('/public/images/bg-2.jpg')",
      },
    },
    fontFamily: {
      serif: ["IBM Plex Serif"],
      sans: ["Zilla Slab"],
    },
  },
  plugins: [],
};
