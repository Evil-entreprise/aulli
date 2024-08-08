/** @type {import('next').NextConfig} */
const nextConfig = {
	serverExternalPackages: ['@react-email/tailwind', '@react-email/components'],
	experimental: {
		typedRoutes: true
	}
};

export default nextConfig;
