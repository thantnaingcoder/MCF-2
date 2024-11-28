/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    fontFamily: {
      sans: ["Hind", "Padauk", "sans-serif"],
    },
    extend: {
      animation: {
				'infinite-scroll': 'infinite-scroll 25s linear infinite',
        border: 'border 4s linear infinite',
			  },
			  keyframes: {
				'infinite-scroll': {
				  from: { transform: 'translateX(0)' },
				  to: { transform: 'translateX(-100%)' },
				},
        border: {
          to: { '--border-angle': '360deg' },
        },
			  },
      backgroundImage: {
        'home-page': "url('./src/assets/aboutUs/heroOther/homePage.png')", // Define custom background image
       
      },
      fontFamily: {
        heading: ["Epilogue", "sans-serif"],
        label: ["Kite One", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#ecfdf6",
          100: "#d0fbe6",
          200: "#a5f5d2",
          300: "#6beabc",
          400: "#30d79f",
          500: "#0cbc87",
          600: "#02996f",
          700: "#017b5c",
          800: "#04614a",
          900: "#04503e",
          950: "#012d24",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
