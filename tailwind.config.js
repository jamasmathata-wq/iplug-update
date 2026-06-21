export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#0F7490', 50: '#E8F7FA', 100: '#C5ECF3', 200: '#8DD9E7', 300: '#4FC2D8', 400: '#1DA3BE', 500: '#0F7490', 600: '#0C5F76', 700: '#094A5C', 800: '#063542', 900: '#032028' },
        secondary: { DEFAULT: '#D32F2F', 50: '#FDE8E8', 100: '#FABCBC', 200: '#F58A8A', 300: '#EF5858', 400: '#E63C3C', 500: '#D32F2F', 600: '#B22525', 700: '#8E1D1D', 800: '#6B1515', 900: '#470E0E' },
        accent: { DEFAULT: '#FFC107', 50: '#FFF9E0', 100: '#FFF0B3', 200: '#FFE680', 300: '#FFDB4D', 400: '#FFD01A', 500: '#FFC107', 600: '#E0A800', 700: '#B38600', 800: '#866400', 900: '#594300' },
        surface: { DEFAULT: '#FFFFFF', dark: '#111827' },
        page: { DEFAULT: '#F8FAFC', dark: '#030712' }
      },
      boxShadow: {
        soft: '0 4px 24px -2px rgba(15, 116, 144, 0.08)',
        card: '0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)',
        'card-hover': '0 8px 32px rgba(15, 116, 144, 0.12)',
        glow: '0 0 20px rgba(15, 116, 144, 0.15)'
      },
      borderRadius: {
        '4xl': '2rem'
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { opacity: '0', transform: 'translateY(10px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } }
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
};
