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
    },
    extend: {},
  },
  variants: {
    fontWeight: ['responsive'],
		extend: {},
	},
  transitionTimingFunction: {
  },

  plugins: [],
};
