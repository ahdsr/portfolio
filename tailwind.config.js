module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    fontFamily: {
      serif: ['Zilla Slab', 'serif'],
      sans: ['Inter', 'sans-serif'],
      mono: ['Roboto Mono', 'monospace'],
    },

    borderRadius: {
      none: '0',
      sm: '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      md: '0.375rem',
      lg: '0.5rem',
      full: '9999px',
      large: '12px',
      huge: '128px',
    },

    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1600px',
      '3xl': '1920px',
    },
    extend: {
      colors: {
        black: '#000',
        white: '#FFF',
        'example-color': {
          light: '#ffb288',
          DEFAULT: '#d18d67',
          dark: '#ce8860',
        },
        customblue: '#000AFF',
        customblue2: '#203136',
        customyellow: '#F2F2CF',
        customgray: '#F3F3F3',
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/global/placeholder.webp')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-easing-gradients')({
      variants: ['responsive'],
      // required
      gradients: {
        ex1: ['#121213', '#212124'], // must be two colors
        ex2: {
          easing: 'cubic-bezier(0.48, 0.3, 0.64, 0.3)',
          steps: 5,
          color: ['#0009EA', '#000AFF'],
        },
        ex3: {
          easing: 'cubic-bezier(0.48, 0.3, 0.64, 1)',
          color: ['#000', '#03041A'],
        },
        ex4: { easing: 'steps(4, skip-none)', color: ['#121213', '#212124'] },
      },
      // defaults
      alphaDecimals: 5,
      colorMode: 'lrgb',
      type: 'linear',
      easing: 'ease', // default settings
      colorStops: 15,
      directions: {
        t: 'to top',
        tr: 'to top right',
        r: 'to right',
        b: 'to bottom',
        l: 'to left',
      },
    }),
  ],
};
