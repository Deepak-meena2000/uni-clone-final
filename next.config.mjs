/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
    remotePatterns : [
        {
            hostname : 'www.uni.cards',
            protocol : 'https'
        }
    ]
  }
};

export default nextConfig;
