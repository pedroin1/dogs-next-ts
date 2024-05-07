/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dogsapi.origamid.dev",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
