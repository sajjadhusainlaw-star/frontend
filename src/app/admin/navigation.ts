import Router from 'next/router';
import { IRoute } from './types/navigation';

// NextJS Requirement
export const isWindowAvailable = () => typeof window !== 'undefined';
export const findCurrentRoute = (
  routes: IRoute[],
  pathname: string,
): IRoute | null => {
  if (!isWindowAvailable()) return null;

  for (let route of routes) {
    if (route.items && route.items.length > 0) {
      const found = findCurrentRoute(route.items, pathname);
      if (found) return found;
    }
    if (typeof route.path === "string" && pathname === route.path) return route;
    if (route.path instanceof RegExp && route.path.test(pathname)) return route;
  }

  return null; // explicitly return null if nothing found
};


export const getActiveRoute = (routes: IRoute[], pathname: string): string => {
  const route = findCurrentRoute(routes, pathname);
  return route?.name || 'Main Dashboard';
};

export const getActiveNavbar = (
  routes: IRoute[],
  pathname: string,
): boolean => {
  const route = findCurrentRoute(routes, pathname);
  return !!route?.secondary; // convert undefined to false
};


export const getActiveNavbarText = (
  routes: IRoute[],
  pathname: string,
): string | boolean => {
  return getActiveRoute(routes, pathname) || false;
};