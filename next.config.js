module.exports = {
    reactStrictMode: true,
    poweredByHeader: false, // Disabled Next.js powered-by header for security
    images: {
        domains: ['example.com'], // Added support for external image domains
    },
    i18n: {
        locales: ['en', 'es'],
        defaultLocale: 'en',
    },
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
};
