module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}","./components/**/*.{js,ts,jsx,tsx}"],
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'sm': '650px',
      // => @media (min-width: 576px) { ... }
      'md': '800px',
      // => @media (min-width: 960px) { ... }
      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
      'xl': '1440px',
      '2xl':'1440px',
    },
    extend: {},
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
 