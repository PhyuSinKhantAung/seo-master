/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2124b1",
        secondary: "#ffffff",
        tint: "#FDEDE8",
        paleBlue: "#638BF7",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // backgroundImage: {
      //   hero: "url('/images/hero/scene.svg')",
      //   faq: "url('/images/faq/bg.svg')",
      //   footer: "url('/images/footer/bg.svg')",
      // },
    },
  },
  plugins: [],
};
