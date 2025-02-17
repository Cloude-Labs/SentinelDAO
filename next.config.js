module.exports = {
    reactStrictMode: true,
    poweredByHeader: false, // Disabled Next.js powered-by header for security
    images: {
        domains: ['example.com'], // Added support for external image domains
    },
    i18n: { // Added internationalization support
        locales: ['en', 'es'], // Supported languages
        defaultLocale: 'en', // Default language
    },
};
