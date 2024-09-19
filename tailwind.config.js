/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        playwrite: ['Playwrite Cuba', 'serif'],
        dancing: ['Dancing Script', 'cursive'],
      }, gradientColorStopPositions: {
        33: '33%',
      }

    },
  },
  plugins: [],
};
