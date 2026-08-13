export default {
  content: [
    "./resources/**/*.{js,jsx,ts,tsx}",
    "./resources/**/*.{html,php}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e293b',
        secondary: '#ea580c',
        accent: '#f97316',
        'accent-light': '#fb923c',
        light: '#ffedd5',
        dark: '#0f172a',
        text: '#1e293b',
        'text-light': '#64748b',
        'bg-light': '#f8fafc',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}