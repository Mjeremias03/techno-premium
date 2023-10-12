// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'alfa-slab-one': ['Alfa Slab One', 'serif'],
        'bebas-neue': ['Bebas Neue', 'sans'],
        'rokkitt':['okkitt', 'serif'],
        'libre-baskerville':['Libre Baskerville', 'serif']
      },
      
    },
  },
  plugins: [],
}
// font-family: 'Alfa Slab One', serif;
// font-family: 'Bebas Neue', sans-serif;
// font-family: 'Cinzel', serif;
// font-family: 'DM Serif Display', serif;
// font-family: 'Libre Baskerville', serif;
// font-family: 'Lora', serif;
// font-family: 'Roboto', sans-serif;
// font-family: 'Roboto Slab', serif;
// font-family: 'Rokkitt', serif;