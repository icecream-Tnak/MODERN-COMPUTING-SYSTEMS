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
