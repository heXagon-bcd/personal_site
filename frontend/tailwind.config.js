/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        spaceMono: ["'Space Mono'", "monospace"], // Adding custom font family
        colfax: ['"colfax-web"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
