/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        bgMainImg: "url('/HeroImage.jpg')",
      },
      animation: {
        "bg-images": "bg 15s infinite",
        "ball": "ball 5s infinite",
        "WaveAnimation": "animation 5s infinite",
      },
      keyframes: {
        bg: {
          "0%": { backgroundImage: 'url("/Backgrounds/scenary2.jpg")' },
          "50%": { backgroundImage: 'url("/Backgrounds/scenary1.jpg")' },
          "100%": { backgroundImage: 'url("/Backgrounds/scenary3.jpg")' },
        },
        ball: {
          "5%": { background: "linear-gradient(#2f00ff,#eb58f0)" },
          "100%": { background: "linear-gradient(#eb58f0,#2f00ff)" },
        },
        animation: {
          "0%": { transform: "translatey(0)" },
          "50%": { transform: "translatey(-20px)" },
          "100%": { transform: "translatey(0)" },
        },
      },
    },
  },
  plugins: [],
};
