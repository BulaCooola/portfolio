/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Roboto Mono", "monospace"],
      },
      colors: {
        serika_bg: "#323437",
        serika_main: "#e2b714",
        serika_caret: "#e2b714",
        serika_sub: "#646669",
        serika_subAlt: "#2c2e31",
        serika_text: "#d1d0c5",
        serika_error: "#ca4754",
        serika_errorExtra: "#7e2a33",
        serika_colorfulError: "#ca4754",
        serika_colorfulErrorExtra: "#7e2a33",
      },
    },
  },
  plugins: [],
};
