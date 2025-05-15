
// module.exports = {
//     content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//     theme: {
//       extend: {
//         colors: {
//           beige: {
//             light: '#F8F5F1',
//             dark: '#E4E2DD',
//           },
//           blue: '#6B8EF1',
//           violet: '#A68FA3',
//           yellow: '#D9B24C',
//           orange: '#DB4A2B',
//           gray: {
//             text: '#202020',
//           },
//           black: '#000000',
//         },
//       },
//     },
//     plugins: [],
//   };
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        anton: ['var(--font-anton)'],
        poppins: ['var(--font-poppins)'],
      },
      colors: {
        beige: {
          light: '#F8F5F1',
          dark: '#E4E2DD',
        },
        blue: '#6B8EF1',
        violet: '#A68FA3',
        yellow: '#D9B24C',
        orange: '#DB4A2B',
        gray: {
          text: '#202020',
        },
        black: '#000000',
      },
    },
  },
  plugins: [],
};

export default config;
