/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        spaceMono: ["'Space Mono'", "monospace"], // Adding custom font family
        colfax: ['"colfax-web"', "sans-serif"],
      },
      fontWeight: {
        // Define a custom name or use a numeric value for the medium font weight
        medium: 500, // Adding medium font weight
      },
      minWidth: {
        "60p": "60%", // Adding custom minimum width of 60%
      },
      padding: {
        "100p": "100%",
      },
    },
  },
  plugins: [],
};
