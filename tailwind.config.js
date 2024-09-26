/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    screens: {
      sm: "640px",

      md: "768px",

      lg: "1200px",

      xl: "1440px",
    },
    extend: {
      backgroundImage: (theme) => ({
        pattern:
          "url('https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg')",
      }),

      colors: {
        myBlue: "#0A32B3",
        myPink: "#BD365D",
      },
    },
  },
  plugins: [],
};
