/** @type {import('tailwindcss').Config} */

export default {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
          fontFamily: {
            monserrat: ['Montserrat'],
            notoSans: ['Noto Sans'],
            ubuntu: ['Ubuntu'],
          },        
        },
          
      }
}