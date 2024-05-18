// tailwind config is required for editor support

import type { Config } from 'tailwindcss';
import { config as sharedConfig } from '@repo/tailwind-config';

const config: Config = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    presets: [sharedConfig],
    plugins: [require('@tailwindcss/typography')],
};

export default config;
