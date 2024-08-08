/** @type {import('next').NextConfig} */
const nextConfig = {
	serverExternalPackages: ['@react-email/tailwind', '@react-email/components'],
};


const withVercelToolbar = (await import('@vercel/toolbar/plugins/next')).default();

export default withVercelToolbar(nextConfig);