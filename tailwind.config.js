/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        'accent-purple': '#8A70D6',
        'accent-purple-deep': '#3730a3',
        'accent-green': '#34D399',
        'accent-indigo': '#818CF8',
        'accent-glow': 'rgba(138, 112, 214, 0.5)',
        
        // Text Colors
        'secondary-text': '#A8B2C7',
        'primary-text': '#F0F2F5',
        
        // Background Colors
        'twilight-blue': '#1E293B',
        'background-start': '#0A0F19',
        'background-end': '#111827',
        
        // Glass Card Colors
        'glass-bg': 'rgba(30, 41, 59, 0.5)',
        'glass-border': 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      spacing: {
        'container-padding': '1.5rem',
        'section-padding': '6rem',
      },
      animation: {
        'spin': 'spin 4s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 15s ease infinite',
        'fadeIn': 'fadeIn 0.6s ease-out',
        'slideInUp': 'slideInUp 0.6s ease-out',
        'slideInLeft': 'slideInLeft 0.6s ease-out',
        'slideInRight': 'slideInRight 0.6s ease-out',
        'scaleIn': 'scaleIn 0.6s ease-out',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce': 'bounce 1s infinite',
        'shimmer': 'shimmer 1.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shimmer: {
          '0%': { left: '-100%' },
          '100%': { left: '100%' },
        },
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        '3xl': '40px',
      },
      boxShadow: {
        'glow': '0 0 30px rgba(138, 112, 214, 0.5)',
        'glow-sm': '0 0 15px rgba(138, 112, 214, 0.3)',
        'glow-lg': '0 0 45px rgba(138, 112, 214, 0.7)',
      },
      transitionDuration: {
        'fast': '0.2s',
        'normal': '0.3s',
        'slow': '0.4s',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
