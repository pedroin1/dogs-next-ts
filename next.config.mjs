/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dog.api.origamid.dev",
        port: "",
        pathname: "/imagens/**",
      },
    ],
  },
};

export default nextConfig;
