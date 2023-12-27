/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental:{
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"]
},
  images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'occ-0-3933-116.1.nflxso.net',
              pathname: '**',
          },
      ]
  }
}

module.exports = nextConfig;
