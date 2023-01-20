/** @type {import('tailwindcss').Config} */

// const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      100: '#300764',
      200: '#3B0381',
      300: '#8063C9',
      400: '#6219B4',
      500: '#f7f7f7',
      600: '#200A3D',
      700: '#757473',
      710: '#F7F7F7',
      800: '#D0BAE9',
      810: '#F5E6FE',

    }
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          ...{
            "primary": "#6219B4",
            "secondary": "#F5E6FE",
            "accent": "#DEA702",
            "neutral": "#191D24",
            "base-100": "#fff",
            "info": "#8063C9",
            "success": "#36D399",
            "warning": "#FBBD23",
            "error": "#E30000",
          }
        },
      }
    ],
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/line-clamp')
  ]
}
