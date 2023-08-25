/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#FF3D00',
        'secondary': '#00C3FF',
        'action': '#181818',
        'accent': '#212121',
        'background': '#121212',
      },
      boxShadow: {
        '2': '0px 0px 8px 0px rgba(0, 0, 0, 1)',
      },
      keyframes: {
        flipverticalright: {
          '0%': { transform: 'rotateY(0)' },
          '100%': { transform: 'rotateY(180deg)' },
        },
        flipverticalleft: {
          '0%': { transform: 'rotateY(180deg)' },
          '100%': { transform: 'rotateY(0)' },
        }
      },
      animation: {
        flipverticalright: 'flipverticalright 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955)',
        flipverticalleft: 'flipverticalleft 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955)',
      },
    },
  },
  plugins: [],
}