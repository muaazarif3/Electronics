/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens : {
      'sm': '440px',
      'md': '845px',
      'lg': '1024px',
    },
    colors : {
      main : '#EC3D2F' ,
      sec : '#BCCDE0',
      black : "#000000",
      White : "#ffffff",
      gray : '#545454',
    }
  },
  plugins: [],
}