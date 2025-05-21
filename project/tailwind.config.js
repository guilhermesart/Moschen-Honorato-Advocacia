/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#722F37', // New primary color
        secondary: '#6c201b', // New secondary color for text
        accent: '#bca794', // Brown accent for contrast
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'ui-serif', 'Georgia', 'serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.secondary'),
            h2: {
              fontFamily: theme('fontFamily.serif'),
              color: theme('colors.secondary'),
              fontWeight: '700',
            },
            h3: {
              fontFamily: theme('fontFamily.serif'),
              color: theme('colors.secondary'),
            },
            a: {
              color: theme('colors.accent'),
              '&:hover': {
                color: theme('colors.accent/90'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
};