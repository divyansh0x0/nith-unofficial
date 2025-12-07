export default {
    darkMode: 'class', // togglable dark mode via 'dark' class
    content: [
        './components/**/*.{vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './composables/**/*.{ts,js}',
        './app.vue',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#4F46E5',
                    DEFAULT: '#4338CA',
                    dark: '#312E81',
                },
                secondary: {
                    light: '#FDE68A',
                    DEFAULT: '#FBBF24',
                    dark: '#B45309',
                },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [],
}