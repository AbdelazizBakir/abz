module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}","./components/**/*.{js,ts,jsx,tsx}"],
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'sm': '420px',
      // => @media (min-width: 576px) { ... }
      'md': '800px',
      // => @media (min-width: 960px) { ... }
      'lg': '1365px',
      // => @media (min-width: 1440px) { ... }
      'xl': '1440px',
      '2xl':'1440px',
    },
    extend: {
      fontFamily: {
        cursive: ["High Tide"]
      },
      animation : {
        slideL : 'slideL 400ms linear',
        slideR : 'slideR 400ms linear',
      },
      keyframes : {
        slideL : {
          '0%' : {transform : 'translateX(-100%)'},
          '100%' : {transform : 'translateX(0)'},
        },
        slideR : {
          '0%' : {transform : 'translateX(100%)'},
          '100%' : {transform : 'translateX(0)'},
        },
      },
    },
    fontFamily: {
    },
    container:{
      center: true,
      padding: "1rem",
    },
  },
  variants: {
    fontWeight: ['responsive'],
		extend: {},
	},
  transitionTimingFunction: {
  },

  plugins: [],
};
 