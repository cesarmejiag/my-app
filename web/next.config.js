/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: async function (defaultPathMap, {dev, dir, outDir, distDir, buildId}) {
    return {
      "/": { page: "/landing" },
      "/about": { page: "/landing", query: { title: "About" } },
      "/products": { page: "/landing", query: { title: "Products" } },
      "/contact": { page: "/landing", query: { title: "Contact" } },
      "/custom": { page: "/custom", query: { title: "Custom" } },
    };
  },
};

module.exports = nextConfig;
