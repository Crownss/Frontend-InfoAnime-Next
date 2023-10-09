/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",

  // i18n:{
  //   locales: ['en-US', 'id-ID'],
  //   defaultLocale: 'id-ID',
  //   localeDetection: true
  // }
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.myanimelist.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
