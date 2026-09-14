/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Frontend-only project: serve local images as-is, no optimizer pipeline.
    unoptimized: true,
  },
};

export default nextConfig;
