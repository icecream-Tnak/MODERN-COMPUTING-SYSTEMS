const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === "true";
const isUserOrOrganizationPage = repositoryName.endsWith(".github.io");

export const courseBasePath =
  isGitHubPagesBuild && repositoryName && !isUserOrOrganizationPage
    ? `/${repositoryName}`
    : "";

export function courseHref(path: string) {
  if (path === "/") return `${courseBasePath}/`;
  return `${courseBasePath}${path.replace(/\/$/, "")}/`;
}

export function courseSectionHref(id: string) {
  return `${courseHref("/")}#${id}`;
}

export const courseRoutes = ["/", "/courseware", "/labs", "/questions", "/resources"];

export function courseAssetHref(path?: string): string | undefined {
  const value = path?.trim();
  if (!value) return undefined;

  // 支持外部网站。
  if (/^https?:\/\//i.test(value)) return value;

  // 其余只允许站内文件路径。
  if (
    /^[a-z][a-z0-9+.-]*:/i.test(value) ||
    value.startsWith("//") ||
    value.includes("\\")
  ) {
    return undefined;
  }

  return encodeURI(
    `${courseBasePath}/${value.replace(/^\/+/, "")}`
  );
}
