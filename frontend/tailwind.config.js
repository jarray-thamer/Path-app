/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { colors: { checked: "#5151FC", notchecked: "#3F3D56" } },
  },
  plugins: [],
};
