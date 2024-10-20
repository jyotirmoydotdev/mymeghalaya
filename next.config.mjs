/** @type {import('next').NextConfig} */
const nextConfig = {
        images: {
            remotePatterns: [
                {
                  protocol: 'https',
                  hostname: 'ewooifarchgirohujmyz.supabase.co',
                  port: '',
                  pathname: '/storage/v1/object/public/**',
                },
                {
                  protocol: 'http',
                  hostname: '127.0.0.1',
                  port: '54321',
                  pathname: '/storage/v1/object/public/**',
                },
            ],
        },
};

export default nextConfig;