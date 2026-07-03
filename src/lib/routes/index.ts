export const routes = {
  home: "/",
  signIn: "/sign-in",
  admin: "/admin",
} as const;

export type RouteKey = keyof typeof routes;
export type AppRoute = (typeof routes)[RouteKey];
