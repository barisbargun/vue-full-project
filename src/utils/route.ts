import { routeConfig, routeNames } from "@/constants/route";

export const getRouteConfig = (name: NavPath) => {
  return { path: routeConfig[name].path, name: routeNames[name] };
}