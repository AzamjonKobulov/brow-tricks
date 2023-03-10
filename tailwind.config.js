/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          gray: '#DFDFDF',
          peach: '#E9CFC4',
          peachDull: '#EDE9E7',
          black: '#241717',
          greyOne: '#FAF9F9',
          greyTwo: '#F7F6F6',
          greyThree: '#E8DEDE',
          greyFive: '#DDD3D3',
          greySeven: '#AFA2A2',
          greyNine: '#4D4646',
          red: '#D82C0D',
          blue: '#1062BF',
          success: '#9AC9B4',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        10: '0.625rem',
        13: '0.8125rem',
        15: '0.9375rem',
        26: '1.625rem',
        32: '2rem',
      },
      maxWidth: {
        base: '94.5rem',
        478: '29.875rem',
      },
      boxShadow: {
        sm: '0px 1px 2px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
};
