/**
 * @format
 * @type {import('next').NextConfig}
 */

module.exports = {
    reactStrictMode: true,
    transpilePackages: ['@repo/ui'],
    images: {
        remotePatterns: [{ protocol: 'https', hostname: 'cdn.sanity.io', pathname: '/images/**', port: '' }],
    },
};
