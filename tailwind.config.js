export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6B00",
        secondary: "#0EA5E9",
        accent: "#FACC15",
        dark: "#111827",
        darker: "#0B1120",
        surface: "#F8FAFC",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
