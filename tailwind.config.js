/** @type {import('tailwindcss').Config} */
export default { 
  content:['./index.html','./src/**/*.{js,jsx,ts,tsx}'], 
  theme:{ 
    extend:{ 
      colors:{ 
        butcher:{
          primary: '#990F02',
          dark: '#5C0000',
          gold: '#C0A060',
          cream: '#F2EDE4',
          btnBg: '#7B0A01',
          btnHover: '#B61606',
          text: '#0F0F0F',
          textSecondary: '#2C2C2C'
        }
      }
    }
  }, 
  plugins:[] 
}
