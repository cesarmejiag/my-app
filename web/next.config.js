/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async function () {
    return [
      {
        source: "/",
        destination: "/landing",
      },
    ];
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/landing", query: { title: "Home" } },
      "/about": { page: "/landing", query: { title: "About" } },
      "/products": { page: "/landing", query: { title: "Products" } },
      "/contact": { page: "/landing", query: { title: "Contact" } },
      "/custom": { page: "/custom", query: { title: "Custom" } },
    };
  },
};

module.exports = nextConfig;
