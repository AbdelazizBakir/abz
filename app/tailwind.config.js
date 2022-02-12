module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}","./components/**/*.{js,ts,jsx,tsx}"],
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'sm': '400px',
      // => @media (min-width: 576px) { ... }
      'md': '800px',
      // => @media (min-width: 960px) { ... }
      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
      'xl': '1440px',
      '2xl':'1440px',
    },
    extend: {
      animation : {
        slideL : 'slideL 500ms linear',
        slideR : 'slideR 500ms linear',
      },
      keyframes : {
        slideL : {
          '0%' : {transform : 'translateX(-100%)'},
          '100%' : {transform : 'translateX(0)'},
        },
        slideR : {
          '0%' : {transform : 'translateX(-100%)'},
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
 