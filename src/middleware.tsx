import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import authConfig from "./app/(Backend)/api/auth/[...nextauth]/auth.config";

import {
  apiAuthPrefix,
  authRoutes,
  DEFAULT_REDIRECT_PAGE,
  adminRoutes,
} from "./lib/routes";

const { auth } = NextAuth(authConfig);

export default auth((req): any => {
  // return null;
  const nextUrl = req.nextUrl;
  const isLoggedIn = !!req.auth;
  // const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isApiAuthRoute = apiAuthPrefix.includes(nextUrl.pathname);
  // const isPublicRoutes = publicRoutes.includes(nextUrl.pathname);
  const isAdminRoutes = nextUrl.pathname.startsWith(adminRoutes);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  // to protect api
  if (isApiAuthRoute) {
    return null;
  }
  // // to protect login
  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_REDIRECT_PAGE, nextUrl));
    }
    return null;
  }

  if (isAdminRoutes && !isLoggedIn) {
    return Response.redirect(new URL("/login", nextUrl));
  }
  return null;
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/c", "/(api|trpc)(.*)"],
};
