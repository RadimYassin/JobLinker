/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      customUtilities: {
        'radim': {
          color: 'red',
        },
      },


    },
  },
plugins: [
        require('flowbite/plugin')
    ]
  ,



}