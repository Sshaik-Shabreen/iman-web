 /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        glow: {
          "0%, 100%": {
            textShadow:
              "0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(210, 148, 137, 0.8)",
          },
          "50%": {
            textShadow:
              "0 0 15px rgba(255, 255, 255, 1), 0 0 30px rgba(210, 148, 137, 1)",
          },
        },
      },
      animation: {
        glow: "glow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-glow": {
          textShadow:
            "0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(210, 148, 137, 0.8)",
        },
        ".text-glow-strong": {
          textShadow:
            "0 0 15px rgba(255, 255, 255, 1), 0 0 30px rgba(210, 148, 137, 1)",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
