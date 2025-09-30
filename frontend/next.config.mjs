/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React Strict Mode
  reactStrictMode: true,
  
  // Configure webpack to handle the OpenID client properly
  webpack: (config, { isServer }) => {
    // Important: return the modified config
    if (!isServer) {
      // Exclude openid-client from being processed by Next.js in the browser
      config.resolve.fallback = {
        ...config.resolve.fallback,
        'openid-client': false
      };
    }
    return config;
  },
  
  // Configure images if needed
  images: {
    domains: ['localhost'], // Add your image domains here
  },
  
  // Enable ES modules
  experimental: {
    esmExternals: 'loose',
  },
};

export default nextConfig;
