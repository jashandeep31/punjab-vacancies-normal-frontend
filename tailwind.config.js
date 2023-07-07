/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                primary: {
                    50: "#FFEFED",
                    100: "#FFD5D1",
                    200: "#FBAEA6",
                    300: "#F88F84",
                    400: "#F57A6C",
                    500: "#EE786B",
                    600: "#E85646",
                    700: "#D74838",
                    800: "#AD2819",
                    900: "#850F02",
                },
                secondary: {
                    100: "#F2F8FF",
                    300: "#ECF6FF",
                    500: "#58C7DE",
                },
            },
        },
    },
    plugins: [],
};
