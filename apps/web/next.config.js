/**
 * @format
 * @type {import('next').NextConfig}
 */

module.exports = {
    reactStrictMode: true,
    transpilePackages: ['@repo/ui'],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                pathname: '/images/**',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'github.com',
                pathname: '/farazalidev/farazali.dev/blob/main/apps/web/public/**',
            },
        ],
    },
};
