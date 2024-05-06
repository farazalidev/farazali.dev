import type { Config } from 'tailwindcss';

// We want each package to be responsible for its own content.
export const config: Config = {
    content: [],
    theme: {
        extend: {
            fontFamily: {},
            colors: {
                'main-bg': '#161616',
                secondary_bg: '#1b1b1b',
                primary: '#F35034',
                secondary: '#161616',
                'secondary-border': '#292626',
                'primary-text': '#FDFDFD',
            },
            container: {
                center: true,
                screens: {
                    sm: '640px',
                    md: '768px',
                    lg: '956x',
                    xl: '1200px',
                    '2xl': '1370px',
                },
                padding: {
                    DEFAULT: '1rem',
                    sm: '2rem',
                    lg: '2rem',
                    xl: '5rem',
                    '2xl': '6rem',
                },
            },
        },
        goldenRation: {
            prefix: true,
        },
    },
    plugins: [require('tailwindcss-golden-ratio')],
};
