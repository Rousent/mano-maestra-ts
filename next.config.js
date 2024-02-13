const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
	reactStrictMode: false, // React Strict Mode is off
};

module.exports = withMDX(nextConfig);
