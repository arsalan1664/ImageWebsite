export const publicRoutes = ["/", "/explore", "/c/:id", "/photos/:id"];
export const adminRoutes = "/panel";

export const authRoutes = ["/login"];

// export const apiAuthPrefix = "/api/(.*)/";
export const apiAuthPrefix = [
  "/api/auth",
  "/api/sections",
  "/api/categories",
  "/api/posts",
  "/api/tags",
];

export const DEFAULT_REDIRECT_PAGE = "/panel";
