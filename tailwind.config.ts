import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      theme: '1440px',
    },
    extend: {
      colors: {
        black: '#1A1A1A',
        white: '#FDFDF4',
        green: '#6FAE8C',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
        serif: ['var(--font-dm-serif-display)', 'serif'],
      },
      fontSize: {
        sm: '1.6rem',
        base: '1.8rem',
        md: '2.8rem',
        lg: '5.2rem',
        xl: '7.2rem',
      },
      maxWidth: {
        theme: '1440px',
      },
    },
  },
  plugins: [],
};
export default config;
