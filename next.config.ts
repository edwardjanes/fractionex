import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  async redirects() {
    return [{ source: "/signup", destination: "/waitlist", permanent: false }];
  },
};

export default nextConfig;
