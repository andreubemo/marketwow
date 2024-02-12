/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        xs: "490px",
        sm: "576px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1920px",
      },
      colors: {
        white: "#F4F4F4",
        purewhite: "#FFFFFF",
        yellow: "#FFCB00",
        softyellow: "#FFFCF1",
        darkyellow: "#CC9900",
        orange: "#FF9800",
        red: "#FF3333",
        black: {
          100: "#555",
          75: "#777",
          50: "#999",
          25: "#BBB",
        },
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
