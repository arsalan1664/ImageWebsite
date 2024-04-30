/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vercel.com",
        port: "",
        pathname: "/api/www/avatar/KsiAhjUApMop2IPifCXWsbxt?s=64",
      },
    ],
  },
};

export default nextConfig;
