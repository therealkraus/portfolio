/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
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
    },
  },
  plugins: [],
}

