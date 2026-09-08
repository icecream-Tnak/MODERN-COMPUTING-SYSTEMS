import type { NextConfig } from "next";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === "true";
const isUserOrOrganizationPage = repositoryName.endsWith(".github.io");
const basePath =
  isGitHubPagesBuild && repositoryName && !isUserOrOrganizationPage
    ? `/${repositoryName}`
    : "";

const nextConfig: NextConfig = {
  output: isGitHubPagesBuild ? "export" : undefined,
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
