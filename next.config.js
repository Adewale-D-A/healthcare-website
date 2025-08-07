/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  output: "standalone",
  // distDir: "build",
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "",
  //       pathname: "**",
  //     },
  //   ],
  // },
});
// const nextConfig = {
//   output: "standalone",
// };

// module.exports = nextConfig;
