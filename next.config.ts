import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	experimental: {
		cssChunking: "strict",
	},
	// Only configure webpack if not using turbopack
	webpack: (config, { dev, isServer }) => {
		if (!dev && !isServer) {
			config.experiments = {
				...config.experiments,
				topLevelAwait: true,
			};
		}
		return config;
	},
};

export default nextConfig;
