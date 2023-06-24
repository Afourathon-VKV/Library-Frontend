/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{html,js,jsx}", 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
    theme: {
      extend: {
        colors:{
          gray: {
            150: "#eeeeee",
            50: "#f8f8f8"
          },
          blue: {
            450: "#337AB7",
            250: "#4CB0D6",
            550: "#000842",
          }
        },
        width: {
          '1/7': "14.2857143%",
          '1/8': "12.5%",
  
        },
        screens: {
          'nlg': '900px'
        }
      },
    },
    plugins: [
      require('flowbite/plugin')
    ]
  }
  