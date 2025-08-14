/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            colors: {
                // TODO: custom colors doesn't work rn, waiting for a fix
                primary: '#77c6b0',
                secondary: '#3e2f34'
            }
        }
    },
    plugins: []
}
