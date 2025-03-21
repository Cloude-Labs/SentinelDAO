module.exports = {
    reactStrictMode: true,
    poweredByHeader: false,
    images: {
        domains: ['example.com'],
        unoptimized: false,
    },
    i18n: {
        locales: ['en', 'es', 'fr'], // Added French locale support
        defaultLocale: 'en',
    },
    trailingSlash: true,
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    { key: "Content-Encoding", value: "br" }, // Brotli Compression
                    { key: "X-Frame-Options", value: "DENY" },
                    { key: "X-XSS-Protection", value: "1; mode=block" },
                    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
                    { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
                    { key: "Content-Security-Policy", value: "default-src 'self'; script-src 'self' 'unsafe-inline';" }, // CSP Security
                    { key: "Permissions-Policy", value: "geolocation=(), microphone=()" }, // Disable unnecessary permissions
                    { key: "Cache-Control", value: "public, max-age=31536000, immutable" } // Added caching for performance
                ],
            },
        ];
    },
    async rewrites() {
        return [
            { source: "/api/users", destination: "/api/v1/users" },
            { source: "/api/posts", destination: "/api/v1/posts" },
        ];
    },
    experimental: {
        optimizeCss: true, // Optimizes CSS to reduce file size
        modern: true, // Serves modern JavaScript for better performance
    },
};
