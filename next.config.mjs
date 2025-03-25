/** @type {import('next').NextConfig} */
import withPWA from "next-pwa";

const nextConfig = {
  distDir: "build",
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
  images: {
    domains: [
      "res.cloudinary.com",
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
    ],
  },
};

export default withPWA({
  dest: "public", // destination directory for the PWA files
  disable: process.env.NODE_ENV === "development", // disable PWA in the development environment
  register: true, // register the PWA service worker
  skipWaiting: true,
  runtimeCaching: [
    {
      urlPattern: "http://localhost:3000/api/songs", // Adjust for your API URL
      handler: "CacheFirst",
      options: {
        cacheName: "audio-cache",
        expiration: {
          maxEntries: 100, // Store up to 20 songs
          maxAgeSeconds: 60 * 60 * 24 * 7, // Cache for 7 days
        },
      },
    },
  ],
})(nextConfig);
