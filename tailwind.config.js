/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx,html}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx,html}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,html}",
 
    // Or if using `src` directory:
    "./renderer/**/*.{js,ts,jsx,tsx,mdx,html}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}