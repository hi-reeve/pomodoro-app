module.exports = {
    mode: "jit",
    purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                progressColor: {
                    DEFAULT: "var(--progress)",
                },
                theme: {
                    orange: "var(--orange)",
                    cyan: "var(--cyan)",
                    purple: "var(--purple)",
                },
                blue: {
                    dark: "var(--dark-blue)",
                    "very-dark": "var(--very-dark-blue)",
                    "very-light": "var(--very-light-blue)",
                },
                gradient: {
                    light: "var(--gradient-light)",
                    dark: "var(--gradient-dark)",
                },
                "custom-gray": {
                    DEFAULT: "var(--gray)",
                },
            },
            fontFamily: {
                "kumbh-sans": ["Kumbh Sans", "sans-serif"],
                "roboto-sans": ["Roboto Slab", "serif"],
                "space-mono": ["Space Mono", "monospace"],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
