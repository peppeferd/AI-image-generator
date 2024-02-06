/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'oaidalleapiprodscus.blob.core.windows.net'],
  },
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },
}

export default nextConfig
