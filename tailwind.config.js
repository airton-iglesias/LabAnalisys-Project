/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./renderer/app/**/*.{js,ts,jsx,tsx,mdx,html}",
    "./renderer/pages/**/*.{js,ts,jsx,tsx,mdx,html}",
    "./renderer/components/**/*.{js,ts,jsx,tsx,mdx,html}",
    "./renderer/**/*.{js,ts,jsx,tsx,mdx,html}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}