/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  experimental: { optimizePackageImports: [] }
};
export default nextConfig;
