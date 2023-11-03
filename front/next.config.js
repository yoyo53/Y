/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    basePath: process.env.NODE_ENV == 'production' ? '' : '',
    env: {
        ROOTAPI: 'http://localhost:3000'
    },
    images: {
        unoptimized: true
    }
}

module.exports = nextConfig
