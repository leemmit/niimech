import type { NextConfig } from "next";

const repoName = "niimech";

module.exports = {
  output: "export",
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
};

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
