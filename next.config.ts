import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Netlify deployment (best performance, $0 cost)
  output: "export",

  // Trailing slash to match existing URL structure (/hu/ not /hu)
  trailingSlash: true,

  // Image optimization not available in static export
  images: {
    unoptimized: true,
  },

  // Security and caching headers (replaces Netlify _headers)
  // Note: headers don't work with output: 'export', will use _headers file in out/
};

export default nextConfig;
