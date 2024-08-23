/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateAreas: {
        'layout': [
          'header header',
          'sidebar content',
          
        ]
      },
      gridArea:{
        'header' : 'header',
        'sidebar': 'sidebar',
        'content' : 'content'
      }
    },
  },
  plugins: [
    function({addUtilities,theme}){
      const newUtilities = {
        '.grid-areas-layout': {
          '.grid-template-areas' : theme('gridTemplateAreas.layout')
        },
        '.area-header': {
          'grid.area': theme('gridArea.header')
        },
        '.area-sidebar': {
          'grid.area': theme('gridArea.sidebar')
        },
        '.area-content': {
          'grid.area': theme('gridArea.content')
        },
      };
      addUtilities(newUtilities,['responsive']);
    }
  ],
}

