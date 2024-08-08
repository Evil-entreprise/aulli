/** @type {import('next').NextConfig} */
const nextConfig = {
	serverExternalPackages: ['@react-email/tailwind', '@react-email/components'],
};

export default nextConfig;



const withVercelToolbar = require('@vercel/toolbar/plugins/next')();
// Instead of module.exports = nextConfig, do this:
module.exports = withVercelToolbar(nextConfig);