import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "1.5rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                brand: {
                    black: "#050505",
                    charcoal: "#1A1A1A",
                    gold: {
                        DEFAULT: "#D4AF37",
                        light: "#F3E5AB",
                        dark: "#B8972E",
                    },
                    cream: "#F5F0EB",
                    grey: {
                        light: "#E5E5E5",
                        medium: "#8A8A8A",
                        dark: "#333333",
                    }
                }
            },
            fontFamily: {
                sans: ["var(--font-inter)"],
                serif: ["var(--font-playfair)"],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                glow: {
                    'from': { boxShadow: '0 0 10px -5px rgba(212, 175, 55, 0.5)' },
                    'to': { boxShadow: '0 0 20px 5px rgba(212, 175, 55, 0.6)' },
                }
            }
        },
    },
    plugins: [],
};
export default config;
