import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
        pathname: '/**',
      },
    ],
    dangerouslyAllowSVG: true,  // ← HABILITA SVG
    contentDispositionType: 'attachment',  // ← SEGURIDAD ADICIONAL
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",  // ← SEGURIDAD
  },
};

export default nextConfig;