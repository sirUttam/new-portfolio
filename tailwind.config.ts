import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        surface: '#161B22',
        backdrop: '#0D1117',
        text: '#E6EDF3',
        muted: '#8B949E',
        accent: '#C9A227',
        border: 'rgba(240, 180, 80, 0.15)'
      },
      boxShadow: {
        soft: '0 20px 50px rgba(0, 0, 0, 0.25)',
        glow: '0 0 20px rgba(201, 162, 39, 0.12)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
