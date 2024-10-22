/** @type {import('tailwindnpm auditfcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        color0: "#230871",
        color1: "#191D48",
        color2: "#83859C",
        color3: "#B2B1BB",
        color4: "#6F6B79",
        color5: "#E0E0E0",
        color6: "#32365C",
        color7: "#F6F6F6",
        color8: "#252851",
        color9: "#150545",
        color10: "#3D3D3D",
        color11: "#626262",
        color12: "#2308701A",
        background: "#EC661D",
        white: "#ffffff",
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        'bodyfont':['Kollektif', 'sans-serif'],
        'secondaryfont': ['Barabara', 'sans-serif'],
      },
      backgroundImage: {
        'hero-bg': "url('./src/assets/home-banner.gif')",
        'mhome-bg':"url('./src/assets/mHome-header.png')"
      },
    },
    screens: {
      // xs: "480px",
      // ss: "620px",
      // sm: "768px",
      // md: "1060px",
      // lg: "1200px",
      // xl: "1700px",


      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',


      // 'sm': '640px',
      // // => @media (min-width: 640px) { ... }

      // 'md': '768px',
      // // => @media (min-width: 768px) { ... }

      // 'lg': '1024px',
      // // => @media (min-width: 1024px) { ... }

      // 'xl': '1280px',
      // // => @media (min-width: 1280px) { ... }

      // '2xl': '1536px',
      // // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};