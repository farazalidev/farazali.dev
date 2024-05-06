/** @format */

const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

/*
 * This is a custom ESLint configuration for use with
 * Next.js apps.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
    extends: [
        '@vercel/style-guide/eslint/node',
        '@vercel/style-guide/eslint/typescript',
        '@vercel/style-guide/eslint/browser',
        '@vercel/style-guide/eslint/react',
        '@vercel/style-guide/eslint/next',
        'eslint-config-turbo',
    ].map(require.resolve),
    parserOptions: {
        project,
    },
    globals: {
        React: true,
        JSX: true,
    },
    settings: {
        'import/resolver': {
            typescript: {
                project,
            },
            node: {
                extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
    ignorePatterns: ['node_modules/', 'dist/'],
    plugins: ['prettier'],
    // add rules configurations here
    rules: {
        'import/no-default-export': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        'react/function-component-definition': 'off',
        'prettier/prettier': 'error',
        '@next/next/no-html-link-for-pages': 'off',
        'unicorn/filename-case': [
            'error',
            {
                cases: {
                    camelCase: true,
                    pascalCase: true,
                },
            },
        ],
    },
};
