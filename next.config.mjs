// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // output: "export",
//   basePath: "/next",
//   trailingSlash: true,
//  assetPrefix: "/next/",
 
 
//   images: {
//     unoptimized: true,
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "kits.roxthemes.com",
//       },
//       {
//         protocol: "https",
//         hostname: "images.unsplash.com",
//       },
//       {
//         protocol: "https",
//         hostname: "i.pravatar.cc",
//       },
//     ],
//   },
// };

// export default nextConfig;




/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,  // only once

  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "kits.roxthemes.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "i.pravatar.cc" },
    ],
  },
};

export default nextConfig;