import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // QR code destination — keep this a temporary (307) redirect so the
        // Linktree URL can change later without needing a new QR code.
        source: "/redirect",
        destination: "https://linktr.ee/eatmoez",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
