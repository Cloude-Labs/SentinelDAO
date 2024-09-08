module.exports = {
    reactStrictMode: true,
    poweredByHeader: false,
    images: {
        domains: ['example.com'],
        unoptimized: false,
    },
    i18n: {
        locales: ['en', 'es'],
        defaultLocale: 'en',
    },
    trailingSlash: true,
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    { key: "X-Frame-Options", value: "DENY" },
                    { key: "X-XSS-Protection", value: "1; mode=block" },
                    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
                    { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" }
                ],
            },
        ];
    },
    async rewrites() {
        return [
            { source: "/api/users", destination: "/api/v1/users" }, // Shorten API paths
            { source: "/api/posts", destination: "/api/v1/posts" },
        ];
    },
};
